const router = require('express').Router();
const { creatUser, loginUser, usersAll, logoutUser, loginUserProfile } = require('../controllers/user.controller');
const { validate} = require('../joiValidation');
const {authToken , Admin} = require('../middleware/auth')


router.post('/users', validate('creatUser'), creatUser);
router.post('/users/login', validate('loginUser'), loginUser);
router.post('/user/logout',authToken, Admin, logoutUser)
router.get('/users/me', authToken, Admin, loginUserProfile)
router.get('/usersAll', authToken, Admin, usersAll);


module.exports = 
   router



   //This is user admin Abdul Waris
   //  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM2YTc5YTNkODAyMDg4YjY3ODNkZmFkIiwiZW1haWwiOiJ3YXJpc0BnbWFpbC5jb20iLCJpYXQiOjE2Njc5MjIzMzksImV4cCI6MTY2ODE4MTUzOX0.V14MLIsfyWrl7a0PKPE0Mxb7_eVHM7Hg42prJ7irNXU"
   