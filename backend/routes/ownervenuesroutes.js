const express = require('express');
const router = express.Router();
const OwnerVenue = require('../models/ownervenue');

// @desc Add new owner venue
router.post('/', async (req, res) => {
  try {
    const venue = new OwnerVenue(req.body);
    await venue.save();
    res.status(201).json(venue);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @desc Get all owner venues
router.get('/', async (req, res) => {
  try {
    const venues = await OwnerVenue.find();
    res.json(venues);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
