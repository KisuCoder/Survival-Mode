const router = require('express').Router();

const parseYesNo = (val) => {
  const s = String(val || '').trim().toLowerCase();
  return (s === 'yes' || s === 'true' || s === '1') ? 'yes' : 'no';
};

// POST /api/predict — forward to the ML microservice
router.post('/', async (req, res) => {
  try {
    const form = req.body;

    // Build the complete 12-feature payload for the Flask ML service
    const mlInput = {
      area: Number(form.floorArea || form.area || 0),
      bedrooms: Number(form.bedrooms || 0),
      bathrooms: Number(form.bathrooms || 0),
      stories: Number(form.stories || 1),
      parking: Number(form.parkingSpaces || form.parking || 0),
      mainroad: parseYesNo(form.mainroad),
      guestroom: parseYesNo(form.guestroom),
      basement: parseYesNo(form.basement),
      hotwaterheating: parseYesNo(form.hotwaterheating),
      airconditioning: parseYesNo(form.airconditioning),
      prefarea: parseYesNo(form.prefarea),
      furnishingstatus: String(form.furnishedStatus || form.furnishingstatus || 'unfurnished').trim().toLowerCase()
    };

    // Validate numeric constraints
    if (
      !Number.isFinite(mlInput.area) || mlInput.area <= 0 ||
      !Number.isFinite(mlInput.bedrooms) || mlInput.bedrooms < 0 ||
      !Number.isFinite(mlInput.bathrooms) || mlInput.bathrooms < 0
    ) {
      return res.status(400).json({
        error: 'Please enter valid numeric values for area, bedrooms, and bathrooms.'
      });
    }

    // Forward to Flask ML microservice on port 8000
    const mlResponse = await fetch('http://127.0.0.1:8000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mlInput)
    });

    const data = await mlResponse.json();

    if (!mlResponse.ok) {
      return res.status(mlResponse.status).json(data);
    }

    res.json(data);

  } catch (err) {
    res.status(500).json({
      error: 'ML server not reachable. Make sure the ML service is running on port 8000.',
      details: err.message
    });
  }
});

module.exports = router;