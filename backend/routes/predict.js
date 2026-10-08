const router = require('express').Router();

// POST /api/predict — forward to ML microservice
router.post('/', async (req, res, next) => {
  try {
    const mlResponse = await fetch('http://localhost:8000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });

    if (!mlResponse.ok) {
      return res.status(mlResponse.status).json({
        error: 'ML service returned an error'
      });
    }

    const data = await mlResponse.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({
      error: 'ML server not reachable',
      details: err.message
    });
  }
});

module.exports = router;