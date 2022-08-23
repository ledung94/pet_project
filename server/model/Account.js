const { default: mongoose, model } = require("mongoose");

const Schema = mongoose.Schema

const AccountSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    isMailVerified: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    password: {
        type: String,
        required: true,
    },
    birthdate: {
        type: Date,
        required: false
    },
    genre: {
        type: Number,
        required: false
    },
    lang: {
        type: String,
        enum: ['en', 'ja'],
        default: 'en'
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

module.exports = mongoose.model('accounts', AccountSchema)