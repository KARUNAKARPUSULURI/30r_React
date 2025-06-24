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

//https://med-records-prod.s3.ap-south-1.amazonaws.com/
// medical_documents/1704691297006-File%20No%202627_2011%202192_2011_20240103_0001.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUPZZOPYZKKPJ445Z%2F20250620%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250620T080147Z&X-Amz-Expires=900&X-Amz-Signature=e8de2d88d7f63b48efc04bb46d6e78d7949ea8c5870553ab0fcc6ef4ed41c72c&X-Amz-SignedHeaders=host&x-id=GetObject

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