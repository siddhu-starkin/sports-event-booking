const express = require('express');
const router = express.Router();
const User = require('../models/user');

// @desc Get reward points for a user
// @route GET /api/rewards?userName=vivek
router.get('/rewards', async (req, res) => {
  const { userName } = req.query;

  try {
    const user = await User.findOne({ userName });
    const points = user?.rewardPoints || 0;
    res.json({ points });
  } catch (err) {
    console.error('Reward fetch error:', err);
    res.status(500).json({ message: 'Failed to fetch rewards.' });
  }
});

module.exports = router;
