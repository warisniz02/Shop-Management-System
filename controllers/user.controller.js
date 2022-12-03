const User = require('../models/user');
const dotenv = require('dotenv').config();

const creatUser = async (req, res) => {
    logger(req);
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).json({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
}

// Login user

const loginUser = async (req, res) => {
    try {
        const user = await User.findByCredentials(
            req.body.email,
            req.body.password
        )

        const token = await user.generateAuthToken()
        res.json({ user, token })

    } catch (e) {
        res.status(400).send(e)
    }
}

// Logout user request 

const logoutUser = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
         await req.user.save()
         res.status(200).send()
    } catch (e) {
        res.status(500).json(e)
        
    }
}

// Read user profile
const usersAll = async (req, res) => {
    try {
        const user = await User.find()
        return res.status(200).json(user)
    } catch (e) {
        res.status(400).json(e)
        
    }
}

// login user profile

const loginUserProfile = async (req, res) => {
    try{
         res.json(req.user)
    }catch(e){
         res.status(400).json(e)
    }
}

module.exports = {
    creatUser,
    loginUser,
    logoutUser,
    loginUserProfile,
    usersAll,
}