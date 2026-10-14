const router = require('express').Router();
const User = require('../models/User');
const Property = require('../models/Property');
const auth = require('../middleware/auth');
const adminOnly = require('../middleware/adminOnly');

// Every route in this file requires a valid token AND the admin role
router.use(auth, adminOnly);

// GET /api/admin/stats
router.get('/stats', async (req, res, next) => {
  try {
    const [users, admins, properties, available, pending, sold, recentUsers] =
      await Promise.all([
        User.countDocuments(),
        User.countDocuments({ role: 'admin' }),
        Property.countDocuments(),
        Property.countDocuments({ status: 'available' }),
        Property.countDocuments({ status: 'pending' }),
        Property.countDocuments({ status: 'sold' }),
        User.find().select('-password').sort({ createdAt: -1 }).limit(5),
      ]);

    res.json({
      users,
      admins,
      properties,
      byStatus: { available, pending, sold },
      recentUsers,
    });
  } catch (err) {
    next(err);
  }
});

// GET /api/admin/users
router.get('/users', async (req, res, next) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// PATCH /api/admin/users/:id/role  { role: 'user' | 'admin' }
router.patch('/users/:id/role', async (req, res, next) => {
  try {
    const { role } = req.body;

    if (!['user', 'admin'].includes(role)) {
      return res.status(400).json({ error: 'Role must be user or admin' });
    }
    if (req.params.id === req.userId) {
      return res.status(400).json({ error: "You can't change your own role" });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true }
    ).select('-password');

    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/admin/users/:id
router.delete('/users/:id', async (req, res, next) => {
  try {
    if (req.params.id === req.userId) {
      return res.status(400).json({ error: "You can't delete your own account" });
    }

    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

// PATCH /api/admin/properties/:id/status  { status }
router.patch('/properties/:id/status', async (req, res, next) => {
  try {
    const { status } = req.body;

    if (!['available', 'pending', 'sold'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const property = await Property.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!property) return res.status(404).json({ error: 'Property not found' });
    res.json(property);
  } catch (err) {
    next(err);
  }
});

module.exports = router;