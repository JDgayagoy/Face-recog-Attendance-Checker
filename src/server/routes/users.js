const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  const { uid, email, password, role } = req.body;

  try {
    console.log(req.body);
    const user = new User({ uid, email, password, role: role || 'user' });
    await user.save();
    res.status(201).json(user);

  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 
