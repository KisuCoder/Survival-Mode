const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

//create a token for a user
const signToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// safe user info (no password!)
const publicUser = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  role: user.role,
});

// POST /api/auth/register
router.post('/register', async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ error: 'Email already in use' });
    }

    // Role is never taken from the request body, so nobody can self-promote.
    const user = await User.create({ name, email, password });

    const token = signToken(user._id);

    res.status(201).json({ token, user: publicUser(user) });
  } catch (err) {
    next(err);
  }
});

// POST /api/auth/login
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = signToken(user._id);

    res.json({ token, user: publicUser(user) });
  } catch (err) {
    next(err);
  }
});

module.exports = router;