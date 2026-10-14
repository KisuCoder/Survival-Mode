const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80";
  
const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

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