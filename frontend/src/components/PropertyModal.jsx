import { useState } from "react";
import {
  X,
  BedDouble,
  Bath,
  Maximize,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp
} from "lucide-react";

import { Link } from "react-router-dom";

import "../css/PropertyModal.css";

function PropertyModal({ property, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const images = property.images && property.images.length > 0
    ? property.images
    : [property.image];

  const descriptionText = Array.isArray(property.description)
    ? property.description.join("\n")
    : property.description || "";

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
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
        <div className="modal-image-container">
          <div className="image-counter">
            {currentImageIndex + 1} / {images.length}
          </div>
        <img
          src={images[currentImageIndex]}
          alt={property.title}
          className="modal-image"
        />
        {images.length > 1 && (
            <>
              <button className="slider-btn prev-btn" onClick={handlePrev}>
                <ChevronLeft size={20} />
              </button>
              <button className="slider-btn next-btn" onClick={handleNext}>
                <ChevronRight size={20} />
              </button>
            </>
        )}
        </div>

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

          <div className="description-dropdown">
            <button
              type="button"
              className="description-toggle"
              onClick={() => setIsDescriptionOpen((prev) => !prev)}
              aria-expanded={isDescriptionOpen}
            >
              <span>Description</span>
              {isDescriptionOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            <div className={`description-panel ${isDescriptionOpen ? "open" : ""}`}>
              <p className="modal-description">{descriptionText}</p>
            </div>
          </div>

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