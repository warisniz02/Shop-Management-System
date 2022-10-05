const Joi = require('joi');

const valItems = Joi.object({
    name: Joi.string().required(),
    price : Joi.number().reequired(),
    expDate : Joi.string().required(),
    remain : Joi.string().required()
})

module.exports = {
    valItems
}