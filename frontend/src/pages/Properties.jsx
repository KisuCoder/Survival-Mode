import { Search, ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyCard";
import PropertyModal from "../components/PropertyModal";
import {properties, marker} from "../config/info";
import { Icon, DivIcon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "../css/Properties.css";

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
  const [price, setPrice] = useState("Any Price");
  const [bedrooms, setBedrooms] = useState("All");
  const [furnish, setFurnish] = useState("All");
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

    if (furnish !== "All") {
      const selectedFurnish = furnish.toLowerCase().replace(/\s+/g, "-");

      result = result.filter((property) => {
        const propertyFurnish = (property.furnishingStatus || property.furnishedStatus || "")
          .toLowerCase()
          .replace(/\s+/g, "-");

        return propertyFurnish === selectedFurnish;
      });
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
  }, [search, price, bedrooms, furnish, sort]);

  const CustomIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
    iconSize: [38, 38]
  })

  const createClusterCustomIcon = (cluster) => {
    return new DivIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      iconSize: [38, 38]
    });
  };

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

            <div className="select-grid">

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
                  value={furnish}
                  onChange={(e) => setFurnish(e.target.value)}
                >
                  <option value="All">Furnishing</option>
                  <option value="Furnished">Furnished</option>
                  <option value="Semi-furnished">Semi-furnished</option>
                  <option value="Unfurnished">Unfurnished</option>
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

          </div>
          <MapContainer center={[14.58, 121.00]} zoom={10} id="map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createClusterCustomIcon}
            >
            {marker.map((marker) => (
              <Marker position={marker.geocode} icon={CustomIcon}>
                <Popup>
                  <h3>{marker.Popup}</h3>
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
          </MapContainer>
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