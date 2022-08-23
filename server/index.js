// env
require('dotenv').config()

// import libs
const express = require('express')
const connectDB = require('./common/connectDB')
const cors = require('cors')

// Connect databse
connectDB()

// run
const app = express()
app.use(express.json())
app.use(cors())

// socket.io
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('user connected!')
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
      });
})

// Route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.use('/api/account', require('./routes/account'))
app.use('/api/room', require('./routes/room'))
app.use('/api/message', require('./routes/message'))

http.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`))
