import {
  X,
  BedDouble,
  Bath,
  Maximize,
  Calendar
} from "lucide-react";

import { Link } from "react-router-dom";

import "../css/PropertyModal.css";

function PropertyModal({ property, onClose }) {
  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >

      <div
        className="property-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="modal-close"
          onClick={onClose}
        >
          <X size={17} />
        </button>

        <img
          src={property.image}
          alt={property.title}
          className="modal-image"
        />

        <div className="modal-content">

          <span className="modal-type">
            {property.type}
          </span>

          <div className="modal-price">
            {property.price}
          </div>

          <h2>{property.title}</h2>

          <p className="modal-location">
            {property.location}
          </p>

          <div className="modal-details">

            <span>
              <BedDouble size={14} />
              {property.bedrooms} Bedrooms
            </span>

            <span>
              <Bath size={14} />
              {property.bathrooms} Bathrooms
            </span>

            <span>
              <Maximize size={14} />
              {property.area} m²
            </span>

            <span>
              <Calendar size={14} />
              {property.yearBuilt}
            </span>

          </div>

          <p className="modal-description">
            {property.description}
          </p>

          <Link
            to="/predictor"
            className="modal-predict-button"
            onClick={onClose}
          >
            Use This Property for Prediction
          </Link>

        </div>

      </div>

    </div>
  );
}

export default PropertyModal;