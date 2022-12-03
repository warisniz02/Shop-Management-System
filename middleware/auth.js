const jwt = require('jsonwebtoken');

const User = require('../models/user')
require('dotenv').config()



const authToken = async function (req, res, next) {
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const decoded = jwt.verify(token, process.env.JWT_TOKEN_KEY)
    const user = await User.findOne({_id : decoded._id, token})
     if(!user) {
        throw new Error()
     }
     req.token = token 
     req.user = user
      next()

  } catch (e) {
     res.status(500).send(e)
     
  }

}

const Admin = async function (req, res, next) {
  try { 
   if(!req.user.isAdmin === true) {
     return res.json({message : 'Sorry sir your not allowed only admin access it!'})
   }
   next()
}catch(e) {
   res.status(400).send(e)

}
}




module.exports = {authToken , Admin} 


