const mongoose = require('../db/dbHandler')

const customerSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    education:{
        type: String,
        required: true
    },
    img: {
        type: String,
        default: "user.png"
    },
    orderDetail: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "orderDetail"
    }]
})

module.exports = mongoose.model('Customers', customerSchema)