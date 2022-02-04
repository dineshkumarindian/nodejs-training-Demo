const mongoose = require('mongoose');
const {Schema} = mongoose;
const userSchema = new Schema({
    name:String,
    age:Number,
    countey:String
})
const user = mongoose.model('User',userSchema);
const userData =new user({
name:'Dineshkumar',
age:22,
countey:'india'
})
userData.name ="logu";
userData.age=21;
userData.countey="china";
console.log(userData);