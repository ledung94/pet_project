const express = require('express')
const auth = require('../common/auth')
const Message = require('../model/Message')
const message = require('../enum/message')
const router = express.Router()

router.post('/send', auth, async (req, res) => {
    try {
        const { room, content }  = req.body
        const newMessage = new Message({
            sender: req._id,
            room,
            content
        })
        await newMessage.save();

        res.json({
            success: true,
            message: message.SEND_MESSAGE_SUCCESSFUL
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ success: false, message: message.SERVER_ERROR });
    }
})

router.put('/event?:id', auth, async (req, res) => {
    try {
        const { isread } = req.body
        const updateMessage = {
            isread: isread
        }
        updateMessage = await Message.findByIdAndUpdate(req.params.id, updateMessage, {new: true})
        if(!message) res.status(400).json({  success: false })
        res.json({success: true})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ success: false, message: message.SERVER_ERROR });
    }
})

module.exports = router