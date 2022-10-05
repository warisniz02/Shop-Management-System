const Joi = require('joi')

valStock = Joi.object({
    name : Joi.string().required().trim(),
    dealerName : Joi.string().required(),
    buyingDate : Joi.string().required().trim(),
    buyingPrice : Joi.number().required().min(2).max(6),
    sellingPrice : Joi.number().required().min(2).max(6)
})

module.exports = valStock

