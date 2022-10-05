const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    Name : {type: String, required : true},
    price : {type : Number, required : true},
    expDate : {type :  String, required : true},
    Remain : {type : Number, required : true},
    
});

const Item =  mongoose.model('Item', itemSchema)