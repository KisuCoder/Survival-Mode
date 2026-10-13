import {
  BedDouble,
  Bath,
  Maximize,
  MapPin
} from "lucide-react";

import "../css/PropertyCard.css";

function PropertyCard({ property, onView }) {
  const thumbnail = property.images && property.images.length > 0 
    ? property.images[0] 
    : property.image;
  return (
    <div className="property-card">

      <div className="property-image-container">

        <img
          src={thumbnail}
          alt={property.title}
          className="property-image"
        />

        <span className="property-type">
          {property.type}
        </span>

      </div>

      <div className="property-content">

        <div className="property-price">
          {property.price}
        </div>

        <h3>{property.title}</h3>

        <div className="property-location">
          <MapPin size={11} />
          {property.location}
        </div>

        <div className="property-details">

          <span>
            <BedDouble size={11} />
            {property.bedrooms} Beds
          </span>

          <span>
            <Bath size={11} />
            {property.bathrooms} Baths
          </span>

          <span>
            <Maximize size={11} />
            {property.area} m²
          </span>

        </div>

        <button
          className="view-property-button"
          onClick={() => onView(property)}
        >
          View Property
        </button>

      </div>

    </div>
  );
}

export default PropertyCard;