const { default: mongoose, model } = require("mongoose");

const Schema = mongoose.Schema

const MemberSchema = new Schema({
    accounts: {
        type: [Schema.Types.ObjectId],
        ref: 'accounts'
    },
    room: {
        type: Schema.Types.ObjectId,
        ref: 'rooms'
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

module.exports =  mongoose.model('members', MemberSchema)