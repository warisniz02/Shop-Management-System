const { Router } = require('express')


const router = Router()
const  jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const auth = require('../middleware/auth')
const User = require('../models/user')
const { valUser } = require('../validations/validateUser')



router.post('/register', async (req,  res) => {
   
   try{
       const {name, email, password} = req.body
       if(!(name || email || password)){
       return  res.status(400).json('All inputs are requried')
       }

      const  {value, error} =  valUser.validate(req.body)
      if(error) return res.status(400).json({message: error.details})


      //  Check if user already exist
      const oldUser  = await User.findOne({email})
      
      if(oldUser) {
         return res.status(409).json('User already exist.Please login!!')
      }

      // Encrypt user password

      const encryptPassword = await bcrypt.hash(password, 10)

      // Creat user in dataBase

      const user = await User.create({
         name, 
         email: email.toLowerCase(),
         password : encryptPassword
      })

      // Creat token

      const token = jwt.sign(
         {user_id : user._id, email},
         process.env.TOKEN_KEY,
         {
           expiresIn : "3days"
         }
      )

      user.token = token

    return  res.status(201).json(user)
   }catch(e){
         res.status(400).json(e)
         console.log(e)
        
   }
});

router.post('/login', async (req, res) => {
   //Our login logic start here!!!
   
   
   // Get User input
   const {email, password} = req.body
      
      // Validate user inputs

      if(!(email && password)){
        return res.status(400).json('All inputs are  required for login!!')

      }
      try{
      const user = await User.findOne({email});

      if(user && (await bcrypt.compare(password, user.password))) {
         // Creat token

         const token = jwt.sign(
            {user_id : user._id, email},
            process.env.TOKEN_KEY,
            {
               expiresIn : "3days"
            }
         );
         // Save user token

        user.token = token

         res.status(200).json(user)
        console.log(user) 
      }
     return res.status(400).json('your email or password is Invalid!!')
   }catch(e){
       res.json(e)
   }
})

router.get('/users', auth, async (req, res) => {
   try{
      const getUser = await User.find(req.body)
      res.status(200).json(getUser)
   }catch(e){
        res.status(400).json(e)
   }   
})


module.exports =
   router



   // This token is user's Abdul-Waris
   // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMzOTJiZGVkZDZhNjgyODhlNDQ1MmFhIiwiZW1haWwiOiJ3YXJpc0BleGFtcGxlLmNvbSIsImlhdCI6MTY2NDY5MTE2NiwiZXhwIjoxNjY0Njk4MzY2fQ.XqEV5Fd03gXcKz4AhVP5q1Dk403mCyuTYa6boazmiio 