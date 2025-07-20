const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  email: String,
  rewardPoints: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('User', userSchema);
