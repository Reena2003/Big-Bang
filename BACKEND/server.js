const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected Successfully!'))
    .catch(err => console.log('❌ MongoDB Connection Error:', err));

// Routes
app.use('/api/enquiry', require('./routes/enquiry.routes'));
app.use('/api/admin', require('./routes/enquiry.routes'));

// Test Route
app.get('/', (req, res) => {
    res.json({ message: 'Big Bang Backend Server Running!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
