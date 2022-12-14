const mongoose = require("mongoose");

const Schema = mongoose.Schema

const RoomSchema = new Schema({
    title: {
        type: String,
    },
    isPublic: {
        type: Boolean,
        default: false
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'accounts' 
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

module.exports =  mongoose.model('rooms', RoomSchema)