const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

require('dotenv');
const userSchema = new mongoose.Schema({
    name : {type : String, required : true , trim : true},
    email : {type : String, unique : true , email : true,  required : true, },
    password : {type : String,unique : true , min: 3, max : 8, required : true},
    role: {type : String, required : true},
    token : {type : String},
    date : {type : Date, default : Date.now}
})

const User = mongoose.model('User', userSchema);

module.exports = User;