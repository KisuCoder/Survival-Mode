const router = require('express').Router();

// POST /api/predict — forward to the ML microservice
router.post('/', async (req, res) => {
try {
const form = req.body;

// Convert the existing frontend fields into the ML model's inputs.
// Some values use defaults because the current form does not collect them.
const mlInput = {
  area: Number(form.floorArea),
  bedrooms: Number(form.bedrooms),
  bathrooms: Number(form.bathrooms),
  stories: 1,
  parking: 0,

  mainroad: 'no',
  guestroom: 'no',
  basement: 'no',
  hotwaterheating: 'no',
  airconditioning: 'no',
  prefarea: 'no',

  furnishingstatus: 'unfurnished'
};

if (
  !Number.isFinite(mlInput.area) || mlInput.area <= 0 ||
  !Number.isFinite(mlInput.bedrooms) || mlInput.bedrooms < 0 ||
  !Number.isFinite(mlInput.bathrooms) || mlInput.bathrooms < 0
) {
  return res.status(400).json({
    error: 'Please enter valid floor area, bedrooms, and bathrooms.'
  });
}

const mlResponse = await fetch('http://127.0.0.1:5001/predict', {
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
error: 'ML server not reachable. Make sure the ML service is running on port 5001.',
details: err.message
});
}
});

module.exports = router;