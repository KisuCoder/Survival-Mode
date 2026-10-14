
import { useNavigate } from "react-router-dom";
import { BedDouble, Bath, Maximize, Calendar, ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import "../css/Transaction.css";

function Transaction() {
  const navigate = useNavigate();

  const property = JSON.parse(
    localStorage.getItem("dihausTransactionProperty") || "null"
  );

  const reservedIds = JSON.parse(
    localStorage.getItem("dihausReservedIds") || "[]"
  );

  const isReserved = property && reservedIds.includes(property.id);

  function cancelReservation() {
    const updated = reservedIds.filter((id) => id !== property.id);

    localStorage.setItem("dihausReservedIds", JSON.stringify(updated));
    navigate("/properties");
  }

  return (
    <>
      <Navbar />

      <main className="transaction-page">
        <div className="transaction-container">
          <button
            className="transaction-back"
            onClick={() => navigate("/properties")}
          >
            <ArrowLeft size={16} /> Back to Properties
          </button>

          <h1>Property Transaction</h1>
          <p className="transaction-subtitle">
            Review your selected property and reservation status.
          </p>

          {!property ? (
            <div className="transaction-empty">
              <h2>No property selected</h2>
              <p>Please select a property first.</p>
              <button onClick={() => navigate("/properties")}>
                Browse Properties
              </button>
            </div>
          ) : (
            <div className="transaction-card">
              <img
                src={
                    property.images && property.images.length > 0
                    ? property.images[0]
                    : property.image
                    }
                  alt={property.title}
                className="transaction-image"
              />

              <div className="transaction-content">
                <span className="transaction-type">{property.type}</span>
                <h2>{property.title}</h2>
                <p className="transaction-location">{property.location}</p>

                <div className="transaction-price-box">
                  <span>Property Price</span>
                  <strong>{property.price}</strong>
                </div>

                <div className="transaction-details">
                  <span><BedDouble size={17} /> {property.bedrooms} Bedrooms</span>
                  <span><Bath size={17} /> {property.bathrooms} Bathrooms</span>
                  <span><Maximize size={17} /> {property.area} m²</span>
                  <span><Calendar size={17} /> Built in {property.yearBuilt}</span>
                </div>

                <p className="transaction-description">
                  {property.description}
                </p>

                {isReserved ? (
                  <>
                    <div className="reservation-status">
                      <span className="status-dot" />
                      Property Reserved
                    </div>

                    <button
                      className="transaction-cancel"
                      onClick={cancelReservation}
                    >
                      Cancel Reservation
                    </button>
                  </>
                ) : (
                  <div className="transaction-not-reserved">
                    This property has not been reserved.
                    <button onClick={() => navigate("/properties")}>
                      Return to Properties to Reserve
                    </button>
                  </div>
                )}

                <p className="transaction-note">
                  This is a demo reservation. No payment has been made.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default Transaction;
