const express = require('express');
const router = express.Router();

const Booking = require('../models/booking');
const User = require('../models/user');

// @desc Create a new booking
// @route POST /api/bookings
router.post('/', async (req, res) => {
  const { userName, venue, bookingDate, bookingTime } = req.body;

  try {
    const booking = new Booking({ userName, venue, bookingDate, bookingTime });
    await booking.save();

    // 🔁 Reward logic: auto-create user if missing, then add +10 points
    let user = await User.findOne({ userName });

    if (user) {
      user.rewardPoints = (user.rewardPoints || 0) + 10;
      await user.save();
    } else {
      user = new User({
        userName,
        email: '',
        rewardPoints: 10
      });
      await user.save();
      console.log(`✅ Created new user "${userName}" with 10 reward points`);
    }

    res.status(201).json(booking);
  } catch (error) {
    console.error('Booking Error:', error);
    res.status(400).json({ message: error.message });
  }
});

// @desc Get all bookings
// @route GET /api/bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    console.error('Fetch Error:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
