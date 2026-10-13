const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  address: String,
  location: {
  type: {
    type: String,
    enum: ['Point'],
    default: 'Point'
  },
  coordinates: {
    type: [Number],
    default: [0, 0]           
  }
}, 
 
  area: { type: Number, required: true },       
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  stories: { type: Number, required: true },
  parking: { type: Number, default: 0 },
  mainroad: { type: String, enum: ['yes', 'no'], default: 'no' },
  guestroom: { type: String, enum: ['yes', 'no'], default: 'no' },
  basement: { type: String, enum: ['yes', 'no'], default: 'no' },
  hotwaterheating: { type: String, enum: ['yes', 'no'], default: 'no' },
  airconditioning: { type: String, enum: ['yes', 'no'], default: 'no' },
  prefarea: { type: String, enum: ['yes', 'no'], default: 'no' },
  furnishingstatus: {
    type: String,
    enum: ['furnished', 'semi-furnished', 'unfurnished'],
    default: 'unfurnished'
  },


  imageUrls: [String],
  price: Number,               
  predictedPrice: Number,       
  status: { type: String, enum: ['available', 'sold', 'pending'], default: 'available' },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

propertySchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Property', propertySchema);