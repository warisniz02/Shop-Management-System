const Joi = require('joi')
require('../models/stock')


const creatStock = Joi.object({
    name : Joi.string().required(),
    quantity : Joi.string().required(),
    seller : Joi.string().required(),
    buyPrice : Joi.string().required(),
    sellPrice : Joi.string().required()
})

const updateStock = Joi.object({
    name : Joi.string(),
    buyPrice : Joi.string(),
    sellPrice : Joi.string()
})

module.exports = {
    creatStock,
    updateStock
}

