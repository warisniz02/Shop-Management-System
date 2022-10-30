const jwt = require('jsonwebtoken');

const User = require('../models/user')
require('dotenv').config()



const config = process.env;

module.exports = {

  verifyToken: (req, res, next) => {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];
    if (!token) {
      return res.status(403).json("A token is required for authentication");
    }

    const decoded = jwt.verify(token, config.JWT_TOKEN_KEY);
    req.user = decoded;
    // const { _id } = req.user;

    User.findOne({ email }).then(user => {
      if (!user.token) {
        return res.status(403).json("you are not logged in.");
      }
    return next();
    }).catch(e => {
       res.status(400).json(e)
      console.log(e)

    });


  },
  isAdmin: async (req, res, next) => {
    try {
      if (!req.user.role) return res.status(401).json('You are not authorized for this task!!');
      return next();
    } catch (e) {
      res.status(400).json(e)
      console.log(e)

    }
  }


}



// bari
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM1YmM0ZTMyOTgzOTgyZTY1ZDhmYjIxIiwiZW1haWwiOiJiYXJpQGdtYWlsLmNvbSIsImlhdCI6MTY2Njk1ODU2MywiZXhwIjoxNjY3MjE3NzYzfQ.XcJG_MEztw_WqCBDfcb1NqKok0-QU3YRJgDBCE8A53w