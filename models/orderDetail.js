const mongoose = require('../db/dbHandler')

const orderDetailSchema = new mongoose.Schema({
    books: [],
    customer: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "customer"
    }]
})

module.exports = mongoose.model('orderDetail', orderDetailSchema)