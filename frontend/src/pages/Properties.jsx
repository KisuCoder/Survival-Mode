import { Search, ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";

import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyCard";
import PropertyModal from "../components/PropertyModal";

import "../css/Properties.css";

const properties = [
  {
    id: 1,
    type: "Apartment",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=80",
    price: "₱2,900,000",
    numericPrice: 2900000,
    title: "Studio Apartment near BGC",
    location: "Taguig City",
    bedrooms: 1,
    bathrooms: 1,
    area: 28,
    yearBuilt: 2020,
    description:
      "A modern studio apartment located near business districts, restaurants, and transportation."
  },
  {
    id: 2,
    type: "Condominium",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80",
    price: "₱4,100,000",
    numericPrice: 4100000,
    title: "High-Rise 1BR with City View",
    location: "Makati City",
    bedrooms: 1,
    bathrooms: 1,
    area: 42,
    yearBuilt: 2021,
    description:
      "A high-rise condominium unit with a modern interior and city views."
  },
  {
    id: 3,
    type: "Condominium",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=700&q=80",
    price: "₱5,800,000",
    numericPrice: 5800000,
    title: "Modern 2BR Condominium",
    location: "Quezon City",
    bedrooms: 2,
    bathrooms: 2,
    area: 65,
    yearBuilt: 2022,
    description:
      "A spacious two-bedroom condominium designed for comfortable city living."
  },
  {
    id: 4,
    type: "House",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=700&q=80",
    price: "₱7,200,000",
    numericPrice: 7200000,
    title: "Family House with Garden",
    location: "Marikina City",
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    yearBuilt: 2018,
    description:
      "A family-friendly house with a spacious living area and garden."
  },
  {
    id: 5,
    type: "Townhouse",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80",
    price: "₱6,300,000",
    numericPrice: 6300000,
    title: "Modern Townhouse",
    location: "Pasig City",
    bedrooms: 3,
    bathrooms: 2,
    area: 95,
    yearBuilt: 2019,
    description:
      "A modern townhouse with efficient use of space and convenient access to the city."
  },
  {
    id: 6,
    type: "House",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=700&q=80",
    price: "₱9,500,000",
    numericPrice: 9500000,
    title: "Spacious Modern Residence",
    location: "Cavite",
    bedrooms: 4,
    bathrooms: 3,
    area: 180,
    yearBuilt: 2020,
    description:
      "A spacious modern residence suitable for larger families."
  }
];

function Properties() {
 
const [reservedIds, setReservedIds] = useState(
  () => JSON.parse(localStorage.getItem("dihausReservedIds") || "[]")
);

function reserveProperty(property) {
  const updated = [...new Set([...reservedIds, property.id])];

  localStorage.setItem("dihausReservedIds", JSON.stringify(updated));
  localStorage.setItem("dihausTransactionProperty", JSON.stringify(property));

  setReservedIds(updated);
}

function cancelReservation(propertyId) {
  const updated = reservedIds.filter((id) => id !== propertyId);

  localStorage.setItem("dihausReservedIds", JSON.stringify(updated));
  setReservedIds(updated);
}

  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [price, setPrice] = useState("Any Price");
  const [bedrooms, setBedrooms] = useState("All");
  const [sort, setSort] = useState("Newest");

  const [selectedProperty, setSelectedProperty] = useState(null);

  const filteredProperties = useMemo(() => {
    let result = [...properties];

    if (search.trim() !== "") {
      const keyword = search.toLowerCase();

      result = result.filter(
        (property) =>
          property.title.toLowerCase().includes(keyword) ||
          property.location.toLowerCase().includes(keyword)
      );
    }

    if (type !== "All") {
      result = result.filter(
        (property) => property.type === type
      );
    }

    if (price === "Under ₱5M") {
      result = result.filter(
        (property) => property.numericPrice < 5000000
      );
    }

    if (price === "₱5M - ₱8M") {
      result = result.filter(
        (property) =>
          property.numericPrice >= 5000000 &&
          property.numericPrice <= 8000000
      );
    }

    if (price === "Above ₱8M") {
      result = result.filter(
        (property) => property.numericPrice > 8000000
      );
    }

    if (bedrooms !== "All") {
      result = result.filter(
        (property) =>
          property.bedrooms >= Number(bedrooms)
      );
    }

    if (sort === "Price: Low to High") {
      result.sort(
        (a, b) => a.numericPrice - b.numericPrice
      );
    }

    if (sort === "Price: High to Low") {
      result.sort(
        (a, b) => b.numericPrice - a.numericPrice
      );
    }

    if (sort === "Newest") {
      result.sort(
        (a, b) => b.yearBuilt - a.yearBuilt
      );
    }

    return result;
  }, [search, type, price, bedrooms, sort]);

  return (
    <>
      <Navbar />

      <main className="properties-page">

        <div className="properties-container">

          <div className="properties-header">
            <h1>Explore Properties</h1>
            <p>Find properties that match your needs.</p>
          </div>

          <div className="filter-box">

            <div className="search-wrapper">
              <Search size={13} />

              <input
                type="text"
                placeholder="Search by location or property name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="select-wrapper">
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="All">Property Type</option>
                <option value="Apartment">Apartment</option>
                <option value="Condominium">Condominium</option>
                <option value="House">House</option>
                <option value="Townhouse">Townhouse</option>
              </select>

              <ChevronDown size={13} />
            </div>

            <div className="select-wrapper">
              <select
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              >
                <option>Any Price</option>
                <option>Under ₱5M</option>
                <option>₱5M - ₱8M</option>
                <option>Above ₱8M</option>
              </select>

              <ChevronDown size={13} />
            </div>

            <div className="select-wrapper">
              <select
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
              >
                <option value="All">Bedrooms</option>
                <option value="1">1+ Bedrooms</option>
                <option value="2">2+ Bedrooms</option>
                <option value="3">3+ Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
              </select>

              <ChevronDown size={13} />
            </div>

            <div className="select-wrapper">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>

              <ChevronDown size={13} />
            </div>

          </div>

          <div className="result-count">
            Showing <strong>{filteredProperties.length}</strong> properties
          </div>

          <div className="property-grid">

            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onView={setSelectedProperty}
              />
            ))}

          </div>

          {filteredProperties.length === 0 && (
            <div className="no-results">
              No properties found.
            </div>
          )}

        </div>

      </main>

      {selectedProperty && (
  <PropertyModal
    property={selectedProperty}
    isReserved={reservedIds.includes(selectedProperty.id)}
    onReserve={reserveProperty}
    onCancelReservation={cancelReservation}
    onClose={() => setSelectedProperty(null)}
  />
)}

    </>
  );
}

export default Properties;