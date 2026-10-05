import { Sparkles, ChevronDown } from "lucide-react";
import { useState } from "react";

import "../css/PredictorForm.css";

function PredictorForm({ onSubmit, loading }) {

  const [formData, setFormData] = useState({
    location: "",
    propertyType: "",
    floorArea: "",
    yearBuilt: "",
    bedrooms: "",
    bathrooms: ""
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

  return (
    <form
      className="predictor-form"
      onSubmit={handleSubmit}
    >

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
            <option value="Marikina City">Marikina City</option>
            <option value="Cavite">Cavite</option>
          </select>

          <ChevronDown size={14} />

        </div>

      </div>

      <div className="form-group full">

        <label>
          Property Type<span>*</span>
        </label>

        <div className="form-select">

          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="Apartment">Apartment</option>
            <option value="Condominium">Condominium</option>
            <option value="House">House</option>
            <option value="Townhouse">Townhouse</option>
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
            placeholder="e.g. 65"
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
            max="2026"
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
            placeholder="e.g. 2"
            value={formData.bedrooms}
            onChange={handleChange}
            required
            min="0"
          />

        </div>

        <div className="form-group">

          <label>
            Bathrooms<span>*</span>
          </label>

          <input
            type="number"
            name="bathrooms"
            placeholder="e.g. 2"
            value={formData.bathrooms}
            onChange={handleChange}
            required
            min="0"
          />

        </div>

      </div>

      <button
        type="submit"
        className="predict-button"
        disabled={loading}
      >

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