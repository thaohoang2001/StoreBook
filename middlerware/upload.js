var multer = require('multer');
const path = require("path");

var storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, './uploads');
    },
    filename: function (req, file, callback) {
            callback(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname));
    }

})


var upload = multer ({
    storage:storage,
    limits:{
    fileSize:1024*1024*5
    },
    
});

module.exports = upload