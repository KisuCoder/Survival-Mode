const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});


app.post('/api/predict', async (req, res) => {
  try {
    const mlResponse = await fetch('http://localhost:8000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });

    const data = await mlResponse.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'ML server not reachable', details: err.message });
  }
});


app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});

