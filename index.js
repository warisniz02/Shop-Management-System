const express = require('express');
const dotenv = require('dotenv')
require('./db/mongoose.js')
const app = express()
const userRoute = require('./routes/users')
const bodyParser = require('body-parser')

process.env.Port

// routers
dotenv.config()

app.use(bodyParser.urlencoded({extended : false}))

app.use(bodyParser.json())

app.use(userRoute)



app.listen(process.env.Port, ()=> {
    console.log(`Port listning up on port ${process.env.Port}`)
})