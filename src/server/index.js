const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/users');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://gayagoyjohndavid:VHkQMxAYMoppvDhW@face-recog.5rmleju.mongodb.net/face-recog?retryWrites=true&w=majority')
    .then(() => console.log('MongoDB connected'))

app.use('/api/users', userRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});