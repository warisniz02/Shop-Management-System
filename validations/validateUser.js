const Joi = require('joi');


const valUser = Joi.object({
    name : Joi.string().min(3).required(),
    email : Joi.string().lowercase().required(), 
    password : Joi.string().min(8).max(114).required(7),
    token : Joi.string()
    
})

module.exports = {
    valUser
}