const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const regRoute = require('./routes/registerRouter');
dotenv.config();

mongoose.Promise = global.Promise;
let mongoDB = 'mongodb://localhost:27017/userDB';
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
let db = mongoose.connection;
db.on('connected', () => {
    console.log('Mongoose connected done...');
})
db.on('error', (err) => {
    console.log('Mongoose connected error...' + err);
});

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);
app.use('/reg', regRoute);
const port = process.env.PORT || 6000;

app.listen(port, () => {
    console.log("the port number is....", port);
})

module.exports =app;