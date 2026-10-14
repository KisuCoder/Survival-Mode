import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BedDouble, Bath, Maximize, Calendar, ArrowLeft, CreditCard, Lock } from "lucide-react";
import Navbar from "../components/Navbar";
import { saveTransaction } from "../services/api";
import "../css/Transaction.css";
import { deleteTransaction } from "../services/api"; 

function Transaction() {
  const navigate = useNavigate();

const property = JSON.parse(
    localStorage.getItem("dihausTransactionProperty") || "null"
  );

  // Use a unique key for tracking reservations
  const propertyKey = property ? (property.id || `${property.title}-${property.location}`) : null;

  const reservedIds = JSON.parse(
    localStorage.getItem("dihausReservedIds") || "[]"
  );

  const isAlreadyReserved = Boolean(propertyKey && reservedIds.includes(propertyKey));

  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [reserved, setReserved] = useState(isAlreadyReserved);

  const thumbnail = property?.images && property.images.length > 0
    ? property.images[0]
    : property?.image;

async function handleReserveSubmit(e) {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    await saveTransaction({
      propertyTitle: property.title,
      propertyLocation: property.location,
      propertyPrice: property.price,
      cardNumber,
      cardholderName: cardName
    });

    const updated = [...new Set([...reservedIds, propertyKey])];
    localStorage.setItem("dihausReservedIds", JSON.stringify(updated));
    setReserved(true);
  } catch (err) {
    setError(err.message || "Reservation failed. Please log in and try again.");
  } finally {
    setLoading(false);
  }
}

const cancelReservation = async () => {
  try {
    if (property) {
      // Pass the property title or ID as the identifier
      const identifier = property.title || property.id;
      if (identifier) {
        await deleteTransaction(identifier);
      }
    }

    // Clear local storage tracking
    const reservedIds = JSON.parse(localStorage.getItem("dihausReservedIds") || "[]");
    const updated = reservedIds.filter(id => id !== (property?.id || property?.title));
    localStorage.setItem("dihausReservedIds", JSON.stringify(updated));
    localStorage.removeItem("dihausTransactionProperty");

    setReserved(false);
    setCardNumber("");
    setCardExpiry("");
    setCardCvv("");
    setCardName("");
  } catch (err) {
    console.error("Failed to cancel reservation:", err);
    alert("Could not cancel reservation on the server. Please try again.");
  }
};


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
            Review your selected property and complete your reservation details.
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
                src={thumbnail}
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

                {reserved ? (
                  <>
                    <div className="reservation-status">
                      <span className="status-dot" />
                      Property Successfully Reserved & Saved to Database
                    </div>

                    <button
                      type="button"
                      disabled
                      style={{
                        marginTop: "10px",
                        padding: "12px",
                        background: "#16a34a",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        fontWeight: "600",
                        width: "100%",
                        cursor: "default",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px"
                      }}
                    >
                      ✓ Reserved
                    </button>

                    <button
                      type="button"
                      onClick={cancelReservation}
                      style={{
                        marginTop: "8px",
                        padding: "8px",
                        background: "transparent",
                        color: "#dc2626",
                        border: "none",
                        fontSize: "13px",
                        cursor: "pointer",
                        textDecoration: "underline",
                        width: "100%"
                      }}
                    >
                      Cancel Reservation
                    </button>
                  </>
                ) : (
                  <form onSubmit={handleReserveSubmit} className="credit-card-form" style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "14px", textAlign: "left" }}>
                    <h3 style={{ fontSize: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <CreditCard size={18} /> Payment & Reservation Details
                    </h3>

                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                      <label style={{ fontSize: "12px", fontWeight: "600" }}>Cardholder Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        required
                        style={{ padding: "10px", borderRadius: "8px", border: "1px solid #cbd5e1" }}
                      />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                      <label style={{ fontSize: "12px", fontWeight: "600" }}>Credit Card Number</label>
                      <input
                        type="text"
                        placeholder="4532 •••• •••• ••••"
                        maxLength="19"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                        style={{ padding: "10px", borderRadius: "8px", border: "1px solid #cbd5e1" }}
                      />
                    </div>

                    <div style={{ display: "flex", gap: "10px" }}>
                      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "5px" }}>
                        <label style={{ fontSize: "12px", fontWeight: "600" }}>Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          maxLength="5"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          required
                          style={{ padding: "10px", borderRadius: "8px", border: "1px solid #cbd5e1" }}
                        />
                      </div>
                      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "5px" }}>
                        <label style={{ fontSize: "12px", fontWeight: "600" }}>CVV</label>
                        <input
                          type="password"
                          placeholder="123"
                          maxLength="4"
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          required
                          style={{ padding: "10px", borderRadius: "8px", border: "1px solid #cbd5e1" }}
                        />
                      </div>
                    </div>

                    {error && <p style={{ color: "#dc2626", fontSize: "12px" }}>{error}</p>}

                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        marginTop: "10px",
                        padding: "12px",
                        background: "#2563eb",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        fontWeight: "600",
                        cursor: "pointer",
                        width: "100%"
                      }}
                    >
                      {loading ? "Processing Reservation..." : "Continue to Payment"}
                    </button>
                  </form>
                )}

                <p className="transaction-note" style={{ display: "flex", alignItems: "center", gap: "5px", justifyContent: "center", marginTop: "15px" }}>
                  <Lock size={12} /> Securely encrypted and saved to MongoDB.
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