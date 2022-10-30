const User = require('../models/user');
const dotenv = require('dotenv');

dotenv.config()


const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');



const creatUser = async (req, res) => {

    try {
        const { name, email, password } = req.body;
        //  Check if user already exist
        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.status(409).json('User already exist.Please login!!');
        }
        // Encrypt user password
        const encryptPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email: email.toLowerCase(),
            password: encryptPassword,
            role

        })

        // Creat token

        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.JWT_TOKEN_KEY,
            {
                expiresIn: process.env.JWT_EXPIRE
            }
        );
        user.token = token;
        return res.status(201).json(user)
    } catch (e) {
        res.status(400).json(e)


    }
};


const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'user not found.' });

        if (!(await bcrypt.compare(password, user.password))) return res.status(404).json({ message: 'Invalid password' });

        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.JWT_TOKEN_KEY,
            {
                expiresIn: process.env.JWT_EXPIRE
            }
        );


        user.token = token
        return res.status(200).json(user)
    } catch (e) {
        res.json(e)

    }
}

// Read user profile
const userProfile = async (req, res) => {
    try {
        const user = await User.find(req.body)
        return res.status(200).json(user)
    } catch (e) {
        res.status(400).json(e)
    }
}

const logoutUser = async (req, res) => {
    try {
        req.user.token = req.user.token
        token != req.token

        await req.user.save()

        return res.status(200).json()
    } catch (e) {
        res.status(400).json(e)
        console.log(e)
    }
}

module.exports = {
    creatUser,
    loginUser,
    userProfile,
    logoutUser
}