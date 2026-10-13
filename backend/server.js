require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/properties', require('./routes/properties'));
app.use('/api/favorites', require('./routes/favorites'));
app.use('/api/predict', require('./routes/predict'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Central error handler (must be last)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message });
});

// Connect DB, then start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Backend on http://localhost:${process.env.PORT || 5000}`);
    });
  })
  .catch(err => {
    console.error('DB connection failed:', err.message);
    process.exit(1);
  });