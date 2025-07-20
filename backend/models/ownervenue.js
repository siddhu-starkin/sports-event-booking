const mongoose = require('mongoose');

const ownerVenueSchema = new mongoose.Schema({
  name: { type: String, required: true },        // ✅ name not venueName
  sportName: { type: String, required: true },   // ✅ sportName as sent from frontend
  place: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('OwnerVenue', ownerVenueSchema);
