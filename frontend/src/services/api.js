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

export async function deleteTransaction(propertyId) {
  const token = localStorage.getItem("dihausToken");
  const baseUrl = API_URL.endsWith('/api') ? API_URL : `${API_URL}/api`;

  const response = await fetch(`${baseUrl}/transactions/${encodeURIComponent(propertyId)}`, {
    method: "DELETE",
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    }
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || "Failed to cancel reservation.");
  }

  return true;
}

export async function saveTransaction(transactionData) {
  const token = localStorage.getItem("dihausToken");
  const response = await fetch(`${API_URL}/transactions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify(transactionData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to save reservation.");
  }

  return data;
}