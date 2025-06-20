const express = require("express");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

//http://localhost:54321/index.html?name=karunakar&password=123456&age=30

const app = express();
app.use(express.json()); //requests
app.use(express.urlencoded({recursive : true})); //urls
const folder = path.resolve("Express_2", "uploads")

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, folder)
    },
    filename : function(req, file, cb){
        const uniqueSuffix = Date.now()+"."+file.mimetype.split("/")[1] //"image/png"
        cb(null, uniqueSuffix)
    }
})

const uploads = multer({storage : storage})

app.post("/files", uploads.single("image"), (req, res) => {
    const file = req.file;
    res.send(file)
})


app.post("/users", (req, res) => {
    const body = req.body;
    const data = JSON.parse(fs.readFileSync(path.resolve("Express_2", "data.json"), "utf-8"));
    const id = data.length ? data[data.length - 1].id + 1 : 1;
    data.push({id, ...body})
    fs.writeFileSync(path.resolve("Express_2", "data.json"), JSON.stringify(data));
    res.json(data);
})

app.get("/users", (req, res) => {
    res.send(` <html>
        <head></head>
        <body>
          <form action = "http://localhost:3000/users" method="POST" enctype="multipart/form-data">
            <input type="password" name="name"><br />
            <input type="text" name="password"><br />
            <input type="submit">
          </form>
        </body>
      </html>`);
})


app.listen(3000, () => {
    console.log("server is running")
})