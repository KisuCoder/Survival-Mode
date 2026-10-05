const router = require('express').Router();
const Property = require('../models/Property');
const auth = require('../middleware/auth');
const adminOnly = require('../middleware/adminOnly');

// GET /api/properties — public, list all
router.get('/', async (req, res, next) => {
  try {
    const properties = await Property.find()
      .populate('postedBy', 'name email')
      .sort({ createdAt: -1 });
    res.json(properties);
  } catch (err) {
    next(err);
  }
});

// GET /api/properties/:id — public, single property
router.get('/:id', async (req, res, next) => {
  try {
    const property = await Property.findById(req.params.id)
      .populate('postedBy', 'name email');
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.json(property);
  } catch (err) {
    next(err);
  }
});

// POST /api/properties — auth required, create
router.post('/', auth, async (req, res, next) => {
  try {
    const property = await Property.create({
      ...req.body,
      postedBy: req.userId
    });
    res.status(201).json(property);
  } catch (err) {
    next(err);
  }
});

// PUT /api/properties/:id — auth + owner, update
router.put('/:id', auth, async (req, res, next) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    if (property.postedBy.toString() !== req.userId) {
      return res.status(403).json({ error: 'Not your property' });
    }
    Object.assign(property, req.body);
    await property.save();
    res.json(property);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/properties/:id — auth + owner, delete
router.delete('/:id', auth, async (req, res, next) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    if (property.postedBy.toString() !== req.userId) {
      return res.status(403).json({ error: 'Not your property' });
    }
    await property.deleteOne();
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

// DELETE /api/properties/admin/:id — admin only
router.delete('/admin/:id', auth, adminOnly, async (req, res, next) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) return res.status(404).json({ error: 'Not found' });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;