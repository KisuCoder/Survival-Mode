const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  propertyTitle: { type: String, required: true },
  propertyLocation: { type: String },
  propertyPrice: { type: String, required: true },
  cardNumberMasked: { type: String, required: true },
  cardholderName: { type: String, required: true },
  status: { type: String, enum: ['reserved', 'cancelled'], default: 'reserved' }
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);