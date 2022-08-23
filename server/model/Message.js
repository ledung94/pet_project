const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema

const MessageSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'accounts'
    },
    room: {
        type: Schema.Types.ObjectId,
        ref: 'rooms'
    },
    content: {
        type: String,
        required: true
    },
    isRead: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        enum: ['TEXT', 'FILE'],
        default: 'TEXT'
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
    deletedAt: {
        type: Date,
        default: Date.now(),
    },
})

module.exports = mongoose.model('messages', MessageSchema)