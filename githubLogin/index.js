const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router/regRouter');
dotenv.config();

mongoose.Promise = global.Promise;
let mongoDB = 'mongodb://localhost:27017/productDB';
mongoose.connect(mongoDB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
let db = mongoose.connection;
db.on('connected',()=>{
    console.log('Mongoose connected done...');
})
db.on('error',(err) => {
    console.log('Mongoose connected error...'+err);
})
const port = process.env.PORT || 6000;
const app = express();
app.use(helmet());
app.use(cors());
app.use(helmet());
app.use(express.json());
app.listen(port,()=>{
    console.log("the Listening port ....",port);
})
app.use('/',router);


