import { useState } from "react";

import Navbar from "../components/Navbar";
import PredictorForm from "../components/PredictorForm";
import PredictionResult from "../components/PredictionResult";

import { predictPropertyPrice } from "../services/api";

import "../css/Predictor.css";

function Predictor() {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePrediction = async (formData) => {
    setLoading(true);
    setError("");

    try {
      const result = await predictPropertyPrice(formData);

      setPrediction({
        ...result,
        property: formData
      });

    } catch {
      setError(
        "Unable to generate prediction. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const resetPrediction = () => {
    setPrediction(null);
    setError("");
  };

  return (
    <>
      <Navbar />

      <main className="predictor-page">

        {!prediction ? (
          <>

            <div className="predictor-heading">

              <div className="predictor-badge">
                ✨ AI Price Predictor
              </div>

              <h1>AI Property Price Predictor</h1>

              <p>
                Enter the details of a property to receive an
                estimated market value.
              </p>

            </div>

            <PredictorForm
              onSubmit={handlePrediction}
              loading={loading}
            />

            {error && (
              <div className="prediction-error">
                {error}
              </div>
            )}

          </>
        ) : (
          <PredictionResult
            prediction={prediction}
            onReset={resetPrediction}
          />
        )}

      </main>
    </>
  );
}

export default Predictor;