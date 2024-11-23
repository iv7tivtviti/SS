const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/chat-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Определите модели
const User = require('./models/User');
const Message = require('./models/Message');

// Ваши маршруты (auth.js, chat.js)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/chat', require('./routes/chat'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
