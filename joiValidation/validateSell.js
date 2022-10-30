const Joi = require('joi');

const createSell = Joi.object({
    itemName: Joi.string().required(),
    price: Joi.number().required(),
    quantity: Joi.string().required(),
    totalBill: Joi.number().required()
});

const updateSell = Joi.object({
    price: Joi.number(),
    quantity: Joi.string(),
    totalBill: Joi.number()
});

module.exports = { createSell, updateSell }