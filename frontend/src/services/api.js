const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export async function predictPropertyPrice(formData) {
  const response = await fetch(`${API_URL}/predict`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.error || "Prediction failed. Please try again."
    );
  }

  if (typeof data.predicted_price !== "number") {
    throw new Error("The ML service returned an invalid prediction.");
  }

  return {
    price: `₱${Math.round(data.predicted_price).toLocaleString("en-PH")}`,
    property: { ...formData },
  };
}