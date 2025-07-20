const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

const bookingRoutes = require('./routes/bookingroutes');
app.use('/api/bookings', bookingRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.log('❌ MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

const ownerVenueRoutes = require('./routes/ownervenuesroutes');
app.use('/api/ownervenues', ownerVenueRoutes);
