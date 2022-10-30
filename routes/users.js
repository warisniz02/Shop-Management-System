const router = require('express').Router();
const { creatUser, loginUser, userProfile, logoutUser } = require('../controllers/user.controller');
const { validate } = require('../joiValidation');
const { verifyToken, isAdmin } = require('../middleware/auth')

router.post('/users', validate('creatUser'), creatUser);
router.post('/users/login', validate('loginUser'), loginUser);
router.post('/user/logout', verifyToken, logoutUser)
router.get('/users/profile',[ verifyToken, ], userProfile);


module.exports =
   router



   //This is user admin Abdul Waris token
   // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM1YTJiNjVlYTVjZmVhMjU1Mzg5OTU0IiwiZW1haWwiOiJ3YXJpc0BnbWFpbC5jb20iLCJpYXQiOjE2NjY4NTM5MjEsImV4cCI6MTY2NzExMzEyMX0.saAzkLt4ZD7h4tJPl4vGDziE_TGjP_WPV7l4Hhg_7LI
