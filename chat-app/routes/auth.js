const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcrypt');

// Регистрация пользователя
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.sendStatus(201);
});

// Логин пользователя
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
        // Создайте JWT или сессионный токен
        res.json({ success: true });
    } else {
        res.sendStatus(403);
    }
});

module.exports = router;
