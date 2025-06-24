const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const dest = path.resolve("Multer", "uploads")
app.use(express.json())

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, dest)
    },
    filename : function(req, file, cb){
        const uniqueFileName = Date.now() + path.extname(file.originalname)
        cb(null, uniqueFileName);
    }
})

const uploads = multer({storage : storage})

app.post("/images", uploads.single("image", 5), (req, res) => {
    console.log(req.file)
    console.log(req.body)
    const {username, password} = req.body
    // const {originalname} = req.file
    const file = req.file;
    // getAllusers().find()

    res.send({
        username : username,
        password : password,
        image : file.originalname
    })
})


app.listen(4000, () => {
    console.log("server is running");
})
