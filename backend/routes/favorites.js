const router = require('express').Router();
const User = require('../models/User');
const Property = require('../models/Property');
const auth = require('../middleware/auth');

// GET /api/favorites — list current user's favorites
router.get('/', auth, async (req, res, next) => {
  try {
    const user = await User.findById(req.userId).populate('favorites');
    res.json(user.favorites);
  } catch (err) {
    next(err);
  }
});

// POST /api/favorites/:propertyId — add to favorites
router.post('/:propertyId', auth, async (req, res, next) => {
  try {
    const { propertyId } = req.params;

    // Verify property exists
    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }

    // Add to favorites if not already there
    const user = await User.findById(req.userId);
    if (!user.favorites.includes(propertyId)) {
      user.favorites.push(propertyId);
      await user.save();
    }

    res.json({ success: true, favorites: user.favorites });
  } catch (err) {
    next(err);
  }
});

// DELETE /api/favorites/:propertyId — remove from favorites
router.delete('/:propertyId', auth, async (req, res, next) => {
  try {
    const { propertyId } = req.params;

    const user = await User.findById(req.userId);
    user.favorites = user.favorites.filter(
      (fav) => fav.toString() !== propertyId
    );
    await user.save();

    res.json({ success: true, favorites: user.favorites });
  } catch (err) {
    next(err);
  }
});

module.exports = router;