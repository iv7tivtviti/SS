const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    username: { type: String, required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: '20m' } // Удаляется через 20 минут
});

module.exports = mongoose.model('Message', MessageSchema);
