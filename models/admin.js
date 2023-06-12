const mongoose = require('../db/dbHandler')

const adminSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },

    email: {
        type: 'string',
        required: true,
        unique: true
    },

    img: {
        type: String,
        default: "user.png"
    },

    password: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Admin', adminSchema)