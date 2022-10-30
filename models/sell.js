
const mongoose = require('mongoose');

const sellSchema = new mongoose.Schema({
    itemName : {
        type : String,
        required : true,
    
    },
    price : {
        type : Number,
        required : true
    },
    quantity : {
        type : String,
        required : true,
    
    },
    totalBill : {
        type : Number,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
});

const Sell =  mongoose.model('Sell', sellSchema);

  module.exports = Sell