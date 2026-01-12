const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'https://6964af04efd1410e93894489--incandescent-shortbread-d61594.netlify.app', // frontend URL
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true
}));


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
