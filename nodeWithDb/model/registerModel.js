const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// const { MongoGridFSChunkError } = require('mongoose/node_modules/mongodb');
// const bcryptjs = require('bcryptjs');

const { Schema } = mongoose;
const schema = new Schema({
    id: mongoose.Types.ObjectId,
    firstName: String,
    lastName: String,
    dob: Date,
    email: String,
    password: String,
})

module.exports = modelSchema = mongoose.model('RegisterUser', schema);