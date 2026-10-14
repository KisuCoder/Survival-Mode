const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80";
  
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

export async function getListedProperties() {
  const response = await fetch(`${API_URL}/properties`);

  if (!response.ok) throw new Error("Could not load properties.");

  
  const data = await response.json();

  // Only show listings that are still available
  return data
    .filter((p) => p.status === "available")
    .map((p) => ({
      id: p._id,
      type: "Property",
      images: p.imageUrls?.length ? p.imageUrls : [PLACEHOLDER_IMAGE],
      price: p.price
        ? `₱${p.price.toLocaleString("en-PH")}`
        : "Price on request",
      numericPrice: p.price || 0,
      title: p.title,
      location: p.address || "Metro Manila",
      furnishingStatus: p.furnishingstatus,
      bedrooms: p.bedrooms,
      bathrooms: p.bathrooms,
      area: p.area,
      yearBuilt: new Date(p.createdAt).getFullYear(),
      description: p.description || "",
    }));
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