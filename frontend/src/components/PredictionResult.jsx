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

        <div className="result-range">
          Estimated range: {prediction.range}
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
            <span>Near Main Road</span>
            <strong>{property.mainroad === "yes" || property.mainroad === true ? "Yes" : "No"}</strong>
          </div>

          <div>
            <span>Air Conditioning</span>
            <strong>{property.airconditioning === "yes" || property.airconditioning === true ? "Yes" : "No"}</strong>
          </div>

          <div>
            <span>Hot Water Heater</span>
            <strong>{property.hotwaterheating === "yes" || property.hotwaterheating === true ? "Yes" : "No"}</strong>
          </div>

          <div>
            <span>Guest Room</span>
            <strong>{property.guestroom === "yes" || property.guestroom === true ? "Yes" : "No"}</strong>
          </div>
          
          <div>
            <span>Basement</span>
            <strong>{property.basement === "yes" || property.basement === true ? "Yes" : "No"}</strong>
          </div>

          <div>
            <span>Preferred Area</span>
            <strong>{property.prefarea === "yes" || property.prefarea === true ? "Yes" : "No"}</strong>
          </div>

          <div> 
            <span>Furnishing Status</span>
            <strong>{property.furnishedStatus || property.furnishingstatus || "Unfurnished"}</strong>
          </div>

          <div>
            <span>Parking Spaces</span>
            <strong>{property.parkingSpaces}</strong>
          </div>

          <div> 
            <span>Furnishing Condition</span>
            <strong>{property.furnishingStatus}</strong>
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
        be considered a guaranteed market price.
      </p>

    </div>
  );
}

export default PredictionResult;