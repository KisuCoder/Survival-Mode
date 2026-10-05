const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export async function predictPropertyPrice(formData) {
  try {
    const response = await fetch(`${API_URL}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Prediction request failed");
    }

    const data = await response.json();

    return data;
  } catch {
    console.warn("Backend unavailable. Using demo prediction.");

    // Demo prediction for frontend testing
    const area = Number(formData.floorArea) || 50;
    const bedrooms = Number(formData.bedrooms) || 1;
    const bathrooms = Number(formData.bathrooms) || 1;

    let pricePerSqm = 100000;

    if (formData.location === "Makati City") {
      pricePerSqm = 150000;
    } else if (formData.location === "Taguig City") {
      pricePerSqm = 140000;
    } else if (formData.location === "Quezon City") {
      pricePerSqm = 110000;
    } else if (formData.location === "Pasig City") {
      pricePerSqm = 120000;
    } else if (formData.location === "Marikina City") {
      pricePerSqm = 90000;
    } else if (formData.location === "Cavite") {
      pricePerSqm = 70000;
    }

    let estimatedPrice = area * pricePerSqm;

    estimatedPrice += bedrooms * 150000;
    estimatedPrice += bathrooms * 100000;

    const rangeLow = estimatedPrice * 0.93;
    const rangeHigh = estimatedPrice * 1.07;

    return {
      price: `₱${Math.round(estimatedPrice).toLocaleString()}`,
      range: `₱${Math.round(rangeLow).toLocaleString()} - ₱${Math.round(rangeHigh).toLocaleString()}`,
      confidence: 87,
    };
  }
}