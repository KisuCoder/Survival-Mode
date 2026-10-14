const router = require('express').Router();
const Transaction = require('../models/Transaction');
const auth = require('../middleware/auth');

// POST /api/transactions - Create / Save Reservation
router.post('/', auth, async (req, res) => {
  try {
    const { propertyTitle, propertyLocation, propertyPrice, cardNumber, cardholderName } = req.body;

    const cleanCard = cardNumber ? cardNumber.replace(/\D/g, '') : '';
    const masked = `****-****-****-${cleanCard.slice(-4) || '0000'}`;

    const newTransaction = new Transaction({
      user: req.userId,
      propertyTitle,
      propertyLocation,
      propertyPrice,
      cardNumberMasked: masked,
      cardholderName
    });

    await newTransaction.save();
    res.status(201).json({ message: "Transaction saved successfully", transaction: newTransaction });
  } catch (err) {
    console.error("Error saving transaction:", err);
    res.status(500).json({ error: "Error while saving transaction." });
  }
});

// DELETE /api/transactions/:identifier - Cancel and Remove Reservation
router.delete('/:identifier', auth, async (req, res) => {
  try {
    const identifier = decodeURIComponent(req.params.identifier);

    // Try deleting by MongoDB _id (if valid) or by propertyTitle
    const query = {
      $or: [
        ...(identifier.match(/^[0-9a-fA-F]{24}$/) ? [{ _id: identifier }] : []),
        { propertyTitle: identifier }
      ]
    };

    const deleted = await Transaction.findOneAndDelete(query);

    if (!deleted) {
      // Fallback: delete any transaction matching the title loosely if exact match fails
      await Transaction.findOneAndDelete({ 
        propertyTitle: { $regex: new RegExp(identifier, 'i') } 
      });
    }

    res.status(200).json({ message: "Reservation cancelled and deleted successfully" });
  } catch (err) {
    console.error("Error deleting transaction:", err);
    res.status(500).json({ error: "Error while cancelling reservation." });
  }
});

module.exports = router;