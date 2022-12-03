const Joi = require('joi');


const creatUser = Joi.object({
    name : Joi.string().required(),
    email : Joi.string().required(), 
    password : Joi.string().required(),
    isAdmin : Joi.boolean(),
    token : Joi.string()
    
});

const loginUser = Joi.object({
    email : Joi.string(),
    password : Joi.string()
})

module.exports = {
    creatUser, loginUser
}