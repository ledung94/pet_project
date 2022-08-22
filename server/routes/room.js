const express = require('express')
const auth = require('../common/auth')
const message = require('../enum/message')
const Member = require('../model/Member')
const Message = require('../model/Message')
const Room = require('../model/Room')
const router = express.Router()

router.get('/open?:id', auth, async (req, res) => {
    try {
        const { id } = req.query

        const messages = await Message.find({room: id})
                        .populate({path: 'sender', select: {}})
                        .populate({path: 'room', select: 'name'})

        res.json({ success: true, messages})
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ success: false, message: message.SERVER_ERROR });
    }
})

router.post('/create', auth, async (req, res) => {
    try {
        const { name, accounts } = req.body

        const member  = await Member.findOne({accounts: [...accounts, req._id]})

        if(member) {
            const messages = await Message.find({room : member.room})
                            .populate({path: 'sender', select: {}})
                            .populate({path: 'room', select: 'name'})

            return res.json({ success: false, messages})
        }
    
        const newRoom = new Room({
            name: name
        })

        await newRoom.save()
    
        const newMember = new Member({
            accounts: [...accounts, req._id],
            room: newRoom._id
        })
    
        await newMember.save()

        res.json({ 
            success: true, 
            message: message.CREATE_SUCCESSFUL });
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ success: false, message: message.SERVER_ERROR });
    }
})

router.get('/list', auth, async (req, res) => {
    const rooms = await Member.find({accounts: req._id})
    const roomIds = rooms.map(item => item.room);
    const messages = await Message.find({room: { $in: roomIds}})
                .populate({path: 'room', select: {}})

    res.json({ 
        success: true, 
        rooms: rooms,
        messages: messages 
    });
})

module.exports = router