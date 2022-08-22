const mongoose = require("mongoose");

const Schema = mongoose.Schema

const RoomSchema = new Schema({
    name: {
        type: String,
    },
    ispublic: {
        type: Boolean,
        default: false
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