import { Sparkles, ChevronDown } from "lucide-react";
import { useState } from "react";

import "../css/PredictorForm.css";

function PredictorForm({ onSubmit, loading }) {
  const [formData, setFormData] = useState({
    location: "Marikina City",
    floorArea: "",
    yearBuilt: "",
    bedrooms: "",
    bathrooms: "",
    stories: "",
    parkingSpaces: "",
    mainroad: "yes",
    guestroom: "no",
    basement: "no",
    hotwaterheating: "yes",
    airconditioning: "yes",
    prefarea: "yes",
    furnishedStatus: "furnished"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const renderSelect = (name, label, options) => (
    <div className="form-group">
      <label>
        {label}<span>*</span>
      </label>
      <div className="form-select">
        <select
          name={name}
          value={formData[name]}
          onChange={handleChange}
          required
        >
          <option value="">Select an option</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown size={14} />
      </div>
    </div>
  );

  const yesNo = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" }
  ];

  return (
    <form className="predictor-form" onSubmit={handleSubmit}>
      <div className="form-group full">
        <label>
          Location<span>*</span>
        </label>
        <div className="form-select">
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="Quezon City">Quezon City</option>
            <option value="Makati City">Makati City</option>
            <option value="Taguig City">Taguig City</option>
            <option value="Pasig City">Pasig City</option>
            <option value="Manila">Manila</option>
            <option value="Rizal">Rizal</option>
            <option value="Marikina City">Marikina City</option>
          </select>
          <ChevronDown size={14} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>
            Floor Area (m²)<span>*</span>
          </label>
          <input
            type="number"
            name="floorArea"
            placeholder="e.g. 30"
            value={formData.floorArea}
            onChange={handleChange}
            required
            min="1"
          />
        </div>

        <div className="form-group">
          <label>
            Year Built<span>*</span>
          </label>
          <input
            type="number"
            name="yearBuilt"
            placeholder="e.g. 2020"
            value={formData.yearBuilt}
            onChange={handleChange}
            required
            min="1900"
            max="2030"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>
            Bedrooms<span>*</span>
          </label>
          <input
            type="number"
            name="bedrooms"
            placeholder="e.g. 1"
            value={formData.bedrooms}
            onChange={handleChange}
            required
            min="1"
          />
        </div>

        <div className="form-group">
          <label>
            Bathrooms<span>*</span>
          </label>
          <input
            type="number"
            name="bathrooms"
            placeholder="e.g. 1"
            value={formData.bathrooms}
            onChange={handleChange}
            required
            min="1"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>
            Number of Stories<span>*</span>
          </label>
          <input
            type="number"
            name="stories"
            placeholder="e.g. 1"
            value={formData.stories}
            onChange={handleChange}
            required
            min="1"
            max="10"
          />
        </div>

        <div className="form-group">
          <label>
            Parking Spaces<span>*</span>
          </label>
          <input
            type="number"
            name="parkingSpaces"
            placeholder="e.g. 1"
            value={formData.parkingSpaces}
            onChange={handleChange}
            required
            min="0"
            max="10"
          />
        </div>
      </div>

      <div className="form-row">
        {renderSelect("mainroad", "Connected to Main Road?", yesNo)}
        {renderSelect("guestroom", "Has Guest Room?", yesNo)}
      </div>

      <div className="form-row">
        {renderSelect("basement", "Has Basement?", yesNo)}
        {renderSelect("hotwaterheating", "Hot Water Heating?", yesNo)}
      </div>

      <div className="form-row">
        {renderSelect("airconditioning", "Air Conditioning?", yesNo)}
        {renderSelect("prefarea", "Preferred Area?", yesNo)}
      </div>

      <div className="form-group full" style={{ marginBottom: "13px" }}>
        {renderSelect("furnishedStatus", "Furnishing Status", [
          { value: "furnished", label: "Furnished" },
          { value: "semi-furnished", label: "Semi-furnished" },
          { value: "unfurnished", label: "Unfurnished" }
        ])}
      </div>

      <button type="submit" className="predict-button" disabled={loading}>
        {loading ? (
          "Analyzing Property..."
        ) : (
          <>
            <Sparkles size={14} />
            Predict Property Price
          </>
        )}
      </button>
    </form>
  );
}

export default PredictorForm;