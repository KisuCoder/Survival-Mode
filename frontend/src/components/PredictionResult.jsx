import {
  CheckCircle,
  RotateCcw,
  Home,
  MapPin
} from "lucide-react";

import { Link } from "react-router-dom";
import "../css/PredictionResult.css";

function PredictionResult({ prediction, onReset }) {
  const property = prediction.property;

  return (
    <div className="result-page">
      <div className="result-badge">
        <CheckCircle size={13} />
        Prediction Complete
      </div>

      <h1>Estimated Property Value</h1>

      <p className="result-subtitle">
        Based on the property details you provided.
      </p>

      <div className="result-card">
        <span className="result-label">
          AI Estimated Market Value
        </span>

        <div className="result-price">
          {prediction.price}
        </div>

        <div className="result-divider" />

        <div className="result-property">
          <div>
            <span>Location</span>
            <strong>
              <MapPin size={12} />
              {property.location}
            </strong>
          </div>

          <div>
            <span>Property Type</span>
            <strong>{property.propertyType}</strong>
          </div>

          <div>
            <span>Floor Area</span>
            <strong>{property.floorArea} m²</strong>
          </div>

          <div>
            <span>Bedrooms</span>
            <strong>{property.bedrooms}</strong>
          </div>

          <div>
            <span>Bathrooms</span>
            <strong>{property.bathrooms}</strong>
          </div>

          <div>
            <span>Year Built</span>
            <strong>{property.yearBuilt}</strong>
          </div>
        </div>
      </div>

      <div className="result-actions">
        <button
          className="try-again-button"
          onClick={onReset}
        >
          <RotateCcw size={13} />
          Predict Another Property
        </button>

        <Link
          to="/properties"
          className="browse-result-button"
        >
          <Home size={13} />
          Browse Properties
        </Link>
      </div>

      <p className="result-disclaimer">
        This value is an AI-generated estimate and should not
        be considered a guaranteed market price. The model currently
        uses default values for some property features.
      </p>
    </div>
  );
}

export default PredictionResult;