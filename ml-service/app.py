"""
AI-Driven Real Estate Valuation System
ML Microservice (Flask) - Member 1 / ML Lead

Loads the trained GradientBoostingRegressor (housing_model.pkl) and the
feature schema it was trained on (model_features.pkl), exposes a single
POST /predict endpoint that:
  1. Accepts raw property attributes as JSON (the same shape as Housing.csv
     rows, e.g. "mainroad": "yes" / "no", "furnishingstatus": "furnished")
  2. Applies the exact same preprocessing used in Estate.ipynb
     (binary yes/no -> 1/0, one-hot encode furnishingstatus)
  3. Reorders the resulting features to match model_features.pkl exactly
  4. Runs model.predict() and returns {"predicted_price": <float>}

Run locally:
    pip install -r requirements.txt
    python app.py
    # service listens on http://127.0.0.1:5000

Backend Lead (Node/Express) should POST to http://127.0.0.1:5000/predict
"""

import os
import joblib
import pandas as pd
from flask import Flask, request, jsonify

app = Flask(__name__)

# ---------------------------------------------------------------------------
# Load model artifacts once at startup (not per-request -- this is the #1
# perf mistake people make with Flask + sklearn services).
# ---------------------------------------------------------------------------
MODEL_PATH = os.path.join(os.path.dirname(__file__), "housing_model.pkl")
FEATURES_PATH = os.path.join(os.path.dirname(__file__), "model_features.pkl")

try:
    model = joblib.load(MODEL_PATH)
    model_features = joblib.load(FEATURES_PATH)  # exact column order used in training
    print(f"[startup] Model loaded OK. Expects {len(model_features)} features:")
    print(f"[startup] {model_features}")
except FileNotFoundError as e:
    raise RuntimeError(
        f"Could not find model artifacts. Make sure housing_model.pkl and "
        f"model_features.pkl are in the same folder as app.py. ({e})"
    )

# Fields the frontend is expected to send, and their types/constraints.
# Centralizing this makes it trivial to keep in sync with model_features.pkl
# and gives the Frontend Lead one clear contract to build the form against.
NUMERIC_FIELDS = ["area", "bedrooms", "bathrooms", "stories", "parking"]
BINARY_FIELDS = [
    "mainroad", "guestroom", "basement",
    "hotwaterheating", "airconditioning", "prefarea",
]
FURNISHING_VALUES = {"furnished", "semi-furnished", "unfurnished"}

REQUIRED_FIELDS = NUMERIC_FIELDS + BINARY_FIELDS + ["furnishingstatus"]


def validate_and_clean(payload: dict):
    """
    Validates the incoming JSON payload and returns a cleaned dict, or
    raises ValueError with a human-readable message on the first problem
    found. Keeping this separate from the route makes it unit-testable.
    """
    missing = [f for f in REQUIRED_FIELDS if f not in payload]
    if missing:
        raise ValueError(f"Missing required field(s): {', '.join(missing)}")

    cleaned = {}

    # --- numeric fields ---
    for field in NUMERIC_FIELDS:
        value = payload[field]
        try:
            value = float(value)
        except (TypeError, ValueError):
            raise ValueError(f"Field '{field}' must be a number, got: {value!r}")
        if value < 0:
            raise ValueError(f"Field '{field}' cannot be negative, got: {value}")
        cleaned[field] = value

    # --- binary yes/no fields ---
    for field in BINARY_FIELDS:
        value = str(payload[field]).strip().lower()
        if value not in ("yes", "no"):
            raise ValueError(
                f"Field '{field}' must be 'yes' or 'no', got: {payload[field]!r}"
            )
        cleaned[field] = 1 if value == "yes" else 0

    # --- furnishingstatus (categorical, one-hot in training) ---
    furnishing = str(payload["furnishingstatus"]).strip().lower()
    if furnishing not in FURNISHING_VALUES:
        raise ValueError(
            f"Field 'furnishingstatus' must be one of {sorted(FURNISHING_VALUES)}, "
            f"got: {payload['furnishingstatus']!r}"
        )
    cleaned["furnishingstatus"] = furnishing

    return cleaned


def build_feature_vector(cleaned: dict) -> pd.DataFrame:
    """
    Turns the cleaned payload into a single-row DataFrame whose columns
    match model_features.pkl exactly -- same names, same order. This
    mirrors the pd.get_dummies(..., drop_first=True) step from the
    notebook, but done manually since we only ever have one row at a
    time here (get_dummies on a single row can't infer the other
    categories, so we set the two dummy columns explicitly instead).
    """
    row = {field: cleaned[field] for field in NUMERIC_FIELDS + BINARY_FIELDS}

    # Recreate furnishingstatus one-hot encoding (drop_first=True in training
    # means "furnished" is the baseline / all-zeros category)
    row["furnishingstatus_semi-furnished"] = 1 if cleaned["furnishingstatus"] == "semi-furnished" else 0
    row["furnishingstatus_unfurnished"] = 1 if cleaned["furnishingstatus"] == "unfurnished" else 0

    df = pd.DataFrame([row])

    # Reorder/select columns to match training exactly. This will raise a
    # clear KeyError if model_features.pkl and this function ever drift
    # apart, instead of silently mispredicting.
    df = df[model_features]
    return df


@app.route("/", methods=["GET"])
def health_check():
    """Simple liveness check -- handy for Backend Lead to confirm the service is up."""
    return jsonify({
        "status": "ok",
        "service": "real-estate-valuation-ml-service",
        "model_loaded": model is not None,
        "expected_features": model_features,
    })


@app.route("/predict", methods=["POST"])
def predict():
    if not request.is_json:
        return jsonify({"error": "Request body must be JSON (Content-Type: application/json)"}), 400

    payload = request.get_json(silent=True)
    if payload is None:
        return jsonify({"error": "Invalid or empty JSON body"}), 400

    try:
        cleaned = validate_and_clean(payload)
        X = build_feature_vector(cleaned)
        prediction = model.predict(X)[0]
    except ValueError as e:
        return jsonify({"error": str(e)}), 400
    except Exception as e:
        # Catch-all so a malformed request never 500s without explanation
        return jsonify({"error": f"Prediction failed: {e}"}), 500

    return jsonify({"predicted_price": round(float(prediction), 2)}), 200


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8000, debug=False)
