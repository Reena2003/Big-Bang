const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');
const jwt = require('jsonwebtoken');

// POST - Create new enquiry
router.post('/', async (req, res) => {
    try {
        const { name, phone, city, message } = req.body;

        const enquiry = new Enquiry({
            name,
            phone,
            city,
            message
        });

        await enquiry.save();

        res.status(201).json({
            success: true,
            message: 'Enquiry submitted successfully!',
            data: enquiry
        });
    } catch (error) {
        console.error('Error saving enquiry:', error);
        res.status(500).json({
            success: false,
            message: 'Error submitting enquiry',
            error: error.message
        });
    }
});

// GET - Get all enquiries
router.get('/', async (req, res) => {
    try {
        const enquiries = await Enquiry.find().sort({ createdAt: -1 });
        res.json({
            success: true,
            count: enquiries.length,
            data: enquiries
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching enquiries',
            error: error.message
        });
    }
});

// DELETE - Delete an enquiry by ID
router.delete('/:id', async (req, res) => {
    try {
        const enquiry = await Enquiry.findByIdAndDelete(req.params.id);
        if (!enquiry) {
            return res.status(404).json({
                success: false,
                message: 'Enquiry not found'
            });
        }
        res.json({
            success: true,
            message: 'Enquiry deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting enquiry',
            error: error.message
        });
    }
});
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const ADMIN_EMAIL = "admin@bigbang.com";
  const ADMIN_PASSWORD = "123456";

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = jwt.sign(
      { role: "admin", email },
      "MY_SECRET_KEY",
      { expiresIn: "1h" }
    );

    return res.json({
      success: true,
      token: token
    });
  } else {
    return res.status(401).json({
      success: false,
      message: "Invalid admin credentials"
    });
  }
});
module.exports = router;
