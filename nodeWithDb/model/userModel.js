const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    id: mongoose.Types.ObjectId,
    firstName: String,
    lastName: String,
    age: Number,
    role: String,
    place: String,
    salary: Number
})

const user = mongoose.model('userdata', userSchema);
module.exports = user;    
