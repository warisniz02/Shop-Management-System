const mongoose = require('mongoose');

const dotenv = require('dotenv')

dotenv.config()

// const MONGO_URI =  process.env


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    
}).then(() => {
    console.log('Db sucessfully connected!!')
}).catch((e) => {
    console.log(e)
})