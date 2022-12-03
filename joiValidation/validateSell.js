const Joi = require('joi');

const createSell = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    quantity: Joi.string().required(),
    totalBill: Joi.number().required()
});

const updateSell = Joi.object({
    name : Joi.string(),
    price: Joi.number(),
    quantity: Joi.string(),
    totalBill: Joi.number()
});

module.exports = { createSell, updateSell }