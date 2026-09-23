const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  address: String,
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number]        
  },
  specs: {
    squareMeters: Number,
    bedrooms: Number,
    bathrooms: Number,
    floorNumber: Number,
    yearBuilt: Number,
    locationZone: String
  },
  imageUrls: [String],
  price: Number,
  predictedPrice: Number,
  status: {
    type: String,
    enum: ['available', 'sold', 'pending'],
    default: 'available'
  },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });


propertySchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Property', propertySchema);