const Joi = require('joi');

const createProduct = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    expDate: Joi.string().required(),
    remain: Joi.string().required()
});


const updateProduct = Joi.object({
    name : Joi.string(),
    price: Joi.number(),
    expDate: Joi.string(),
   
});

module.exports = {
    createProduct, updateProduct
}