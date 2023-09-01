const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 10,
        max: 20
    },
    email: {
        type: String,
        required: true,
        min: 10,
        max: 40
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 30
    },
    confpassword: {
        type: String,
        required: true,
        min: 8,
        max: 30
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('user', UserSchema)