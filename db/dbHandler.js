const mongoose = require('mongoose');

try 
    {
        const client = mongoose.connect('mongodb+srv://final:final@cluster0.oowcbcq.mongodb.net/FootBallPitch', {
            useNewUrlParser: true,  
            useUnifiedTopology: true
        })
        console.log("connected")
    } catch (e) {
        console.log(e)
    }







module.exports = mongoose;