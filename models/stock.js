const mongoose = require('mongoose')

const stockSchema = new mongoose.Schema({
    name : {type : String, required: true, trim : true},
    dearlerName : {type : String,  required : true,},
    buyingDate : {type: String, required : true, trim : true},
    buyingPrice : {type  : Number, required : true, min: 2, max : 6},
    sellingPrice : {type : Number, required : true, min : 2, max : 6},
})

const Stock = mongoose.model('Stock', stockSchema)

module.exports = Stock