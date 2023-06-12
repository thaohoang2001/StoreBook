const mongoose = require('../db/dbHandler');

const categorySchema = new mongoose.Schema({
    categoryName: { 
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('book categories', categorySchema);