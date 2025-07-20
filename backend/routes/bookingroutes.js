const express = require('express');
const router = express.Router();

// ✅ Import the Booking model (all lowercase, matching your file)
const Booking = require('../models/booking');

// @desc Create a new booking
// @route POST /api/bookings
router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
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
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
