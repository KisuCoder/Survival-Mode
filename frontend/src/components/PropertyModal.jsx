
import {
  X, BedDouble, Bath, Maximize, Calendar
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../css/PropertyModal.css";

function PropertyModal({
  property,
  onClose,
  isReserved,
  onReserve,
  onCancelReservation
}) {
  const navigate = useNavigate();

  function handleReserve() {
    onReserve(property);
    onClose();
    navigate("/transaction");
  }

  function handleCancel() {
    onCancelReservation(property.id);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="property-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={17} />
        </button>

        <img
          src={property.image}
          alt={property.title}
          className="modal-image"
        />

        <div className="modal-content">
          <span className="modal-type">{property.type}</span>
          <div className="modal-price">{property.price}</div>
          <h2>{property.title}</h2>
          <p className="modal-location">{property.location}</p>

          <div className="modal-details">
            <span><BedDouble size={14} /> {property.bedrooms} Bedrooms</span>
            <span><Bath size={14} /> {property.bathrooms} Bathrooms</span>
            <span><Maximize size={14} /> {property.area} m²</span>
            <span><Calendar size={14} /> {property.yearBuilt}</span>
          </div>

          <p className="modal-description">{property.description}</p>

          {isReserved ? (
            <button
              className="modal-reserve-button cancel"
              onClick={handleCancel}
            >
              Cancel Reservation
            </button>
          ) : (
            <button
              className="modal-reserve-button"
              onClick={handleReserve}
            >
              Reserve Property
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PropertyModal;
