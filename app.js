const express = require('express')
const app = express()
const mongoose = require('./db/dbHandler')
const bodyParser = require('body-parser')
const book = require('./models/book');
session = require('express-session')
const path = require("path");
var hbs = require('hbs');
const dotenv = require('dotenv');

dotenv.config()
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
hbs.registerPartials(__dirname + '/views/partials/')
// hbs.registerHelper('dateFormat', require('handlebars-dateformat'))
app.use(express.static(__dirname + '/public'))

app.use('/uploads', express.static(path.join(__dirname ,'/uploads')));

app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 }
}));


app.get('/',  async (req,res)=>{
    var listBook = await book.find()
    res.render('index', {listBook: listBook})
})



//Connect to db
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to mongodb")
    } catch (err) {
        throw err;
    }
};

mongoose.connection.on("Disconnected", () => {
    console.log("mongoDB disconnected!")
})
mongoose.connection.on("connected", () => {
    console.log("mongoDB connected!")
})


const authRoute = require("./routes/auth")
app.use(authRoute)

const customerRoute = require('./routes/customer.js')
app.use('/', customerRoute)

const adminRoute = require('./routes/admin.js')
app.use('/', adminRoute)


const PORT = process.env.PORT || 5000
app.listen(PORT, connect())
console.log("Server is running! " + PORT)