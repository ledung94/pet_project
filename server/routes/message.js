const express = require('express')
const auth = require('../common/auth')
const Message = require('../model/Message')
const message = require('../enum/message')
const router = express.Router()

// @route POST api/message/send
// @decs send message
// @access public
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

// @route PUT api/message/update
// @decs update or fix message
// @access public
router.put('/update?:id', auth, async (req, res) => {
    try {
        const { id } = req.query
        const { isRead, content } = req.body
        let updateMessage = {
            isRead,
            content
        }
        updateMessage = await Message.findOneAndUpdate({_id: id, sender: req._id}, updateMessage, {new: true})
        if(!updateMessage) res.status(400).json({  success: false, message: 'not found' })
        res.json({success: true, message: 'updated successful'})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ success: false, message: message.SERVER_ERROR });
    }
})

// @route DELETE api/message/delete
// @decs delete message
// @access public
router.delete('/delete?:id', auth, async (req, res) => {
    try {
        const { id } = req.query
        const message = await Message.findOneAndRemove({_id: id, sender: req._id})
        if(!message) return res.status(401).json({success: false, message:'Not found'})
        res.json({
            success: true,
            message: 'deleted successful'
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ success: false, message: message.SERVER_ERROR });
    }
})

module.exports = router