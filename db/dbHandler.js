const mongoose = require('mongoose');

try 
    {
        const client = mongoose.connect('mongodb+srv://book:book@cluster0.ilpl26a.mongodb.net/', {
            useNewUrlParser: true,  
            useUnifiedTopology: true
        })
        console.log("connected")
    } catch (e) {
        console.log(e)
    }







module.exports = mongoose;