const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/users');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/face-recog')
    .then(() => console.log('MongoDB connected'))

app.use('/api/users', userRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});