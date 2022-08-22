// env
require('dotenv').config()

// import libs
const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./common/connectDB')

// Connect databse
connectDB()

// run
const app = express()
app.use(express.json())

// Route
app.use('/api/account', require('./routes/account'))
app.use('/api/room', require('./routes/room'))
app.use('/api/message', require('./routes/message'))

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`))
