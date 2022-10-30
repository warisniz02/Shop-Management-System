const express = require('express');
const dotenv = require('dotenv')
require('./db/mongoose.js')
const app = express()
const userRoute = require('./routes/users');
const stockRoute = require('./routes/stocks');
const productRoute = require('./routes/products');
const sellRoute = require('./routes/sells')
const bodyParser = require('body-parser')

dotenv.config()

process.env.Port


app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

// Routers

app.use(userRoute)
app.use(productRoute)
app.use(stockRoute)
app.use(sellRoute)



app.listen(process.env.Port, () => {
    console.log(`Port listning up on port ${process.env.Port}`)
})