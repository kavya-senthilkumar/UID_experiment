const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create User
router.post('/', async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        const newUser = new User({ name, email, phone });
        await newUser.save();
        res.json(newUser);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Get All Users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Update User
router.put('/:id', async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { name, email, phone }, { new: true });
        res.json(updatedUser);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Delete User
router.delete('/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
