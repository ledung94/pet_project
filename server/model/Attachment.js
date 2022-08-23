const mongoose = require("mongoose");

const Schema = mongoose.Schema

const AttachmentSchema = new Schema({
    thumbUrl: {
        type: String,
    },
    fileUrl: {
        type: String,
    },
    message: {
        type: Schema.Types.ObjectId,
        ref: 'messages' 
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

module.exports =  mongoose.model('attachments', AttachmentSchema)