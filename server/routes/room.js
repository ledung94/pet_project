const express = require('express')
const auth = require('../common/auth')
const message = require('../enum/message')
const Member = require('../model/Member')
const Message = require('../model/Message')
const Room = require('../model/Room')
const router = express.Router()

// @route GET api/room/open
// @decs get messages of room
// @access public
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

// @route POST api/room/create
// @decs create a new room
// @access public
router.post('/create', auth, async (req, res) => {
    try {
        const { title, accounts } = req.body

        const member  = await Member.findOne({accounts: [...accounts, req._id]})

        if(member) {
            const messages = await Message.find({room : member.room})
                            .populate({path: 'sender', select: {}})
                            .populate({path: 'room', select: 'title'})

            return res.json({ success: false, messages})
        }
    
        const newRoom = new Room({
            title: title,
            creator: req._id
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

// @route GET api/room/list
// @decs get list of room and messages in each room
// @access public
router.get('/list', auth, async (req, res) => {
    try {
        let rooms = await Member.find({accounts: req._id})
        rooms = rooms.map(item => item.room);
        const messageRooms = await Message.aggregate([
            {
                $match: { room: {$in: rooms}}
            },
            {
                $lookup: {
                    from: "accounts",
                    localField: 'sender',
                    foreignField: '_id',
                    as: 'sender_info'
                }
            },
            {
                $unwind: "$sender_info"
            },
            {
                $lookup: {
                    from: "rooms",
                    localField: 'room',
                    foreignField: '_id',
                    as: 'room_info'
                }
            },
            {
                $unwind: "$room_info"
            },
            {
                $group: { 
                    _id: "$room",
                    messages: { $push: "$$ROOT"}
                }
            }
        ])

        res.json({ 
            success: true, 
            rooms: messageRooms
        });
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ success: false, message: message.SERVER_ERROR });
    }
})

// @route DELETE api/room/delete
// @decs delete room
// @access public
router.delete('/delete?:id', auth, async (req, res) => {
    try {
        const { id } = req.query
        const room = await Room.findOneAndRemove({_id: id, creator: req._id})
        if(!room) return res.status(401).json({success: false, message:'Not found'})
        res.json({
            success: true,
            message: 'deleted successful'
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ success: false, message: message.SERVER_ERROR });
    }
})

// @route PUT api/room/update
// @decs update room info
// @access public
router.put('/update?:id', auth, async (req, res) => {
    try {
        const { id } = req.query
        const { title, accounts, isPublic } = req.body
        let updateRoom = {
            title: title,
            isPublic: isPublic
        }

        let member = await Member.findOne({room: id})
        if(!member) return res.status(401).json({success: false, message:'Not found'})
        updateMember = await Member.findOneAndUpdate({room: updateRoom._id}, { accounts: [...member.accounts, accounts]}, {new: true})
        if(!updateMember) return res.status(401).json({success: false, message:'Not found'})

        updateRoom = await Room.findOneAndUpdate({_id: id, creator: req._id}, updateRoom, {new: true})
        if(!updateRoom) return res.status(401).json({success: false, message:'Not found'})
        
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