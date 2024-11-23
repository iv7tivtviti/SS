const express = require('express');
const Message = require('../models/Message');
const router = express.Router();

// Отправка сообщения
router.post('/send', async (req, res) => {
    const { username, text } = req.body;
    const message = new Message({ username, text });
    await message.save();
    res.sendStatus(201);
});

// Получение сообщений
router.get('/messages', async (req, res) => {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
});

// Дополнительные маршруты для администраторов...
// Например, удаление сообщений или пользователей

module.exports = router;
