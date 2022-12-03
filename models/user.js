const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv').config();
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, unique: true, email: true, required: true, },
    password: { type: String, unique: true, min: 3, max: 8, required: true },
    isAdmin: { type: Boolean },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    date: { type: Date, default: Date.now }
})
userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_TOKEN_KEY, {
        expiresIn: '7 days'
    })
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}


userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        throw new Error('Unable to connect!! Please check your password')
    }
    return user 
}

userSchema.pre('save', async function (next) {
    const user = this
    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password , 10)
    }
})


const User = mongoose.model('User', userSchema);

module.exports = User;