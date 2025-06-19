// -> module -> framework -> node js -> express -> to build apis -> lightweight -> fast

// npm install express

// const express = require("express");

//step 1 -> after installing express -> you need to create an instance and need to initialize

//function()
//const app = express() -> {} -> router, get, post, put, 
// if(req.url == "" && req.method == "GET") -> app.get("/users")
// if(req.url == "" && req.method == "POST") -> app.post("/users")
// if(req.url.startsWith("/users/:id") && req.method == "PUT") -> app.put("/users/:id")
//MVC -> Routers - >
//server.js -> students api (6), staff api(6), subjects api(6) ->18

//->app.get("")
//->app.get("")
//->app.get("")

//server.js -> app.use("/", students) -> students.js -> router.get, router.post
//server.js -> app.use("/", staff) -> -> router.get, router.post
//server.js -> app.use("/", subjects) ->  -> router.get, router.post

const express = require("express")
const fs = require("fs");
const path = require("path")

const app = express(); //initialize an instance

// app.use(express.json())
app.use(express.json()) //undefined
app.use(express.urlencoded({recursive : true}))

app.get("/users", (req, res) => {
    res.send("Hello");
})

app.post("/users", (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.resolve("Express", "data.json"), "utf-8"));
    const body = req.body;
    const id = data.length ? data[data.length - 1].id + 1 : 1;
    data.push({id, ...body})
    fs.writeFileSync(path.resolve("Express", "data.json"), JSON.stringify(data))
    res.json(data)
})

app.delete("/users/:id", (req, res) => {
    const id = req.params.id; //"1"
    const data = JSON.parse(fs.readFileSync(path.resolve("Express", "data.json"), "utf-8"));
    const filteredItems = data.filter(obj => obj.id != id)
    fs.writeFileSync(path.resolve("Express", "data.json"), JSON.stringify(filteredItems))
    res.json(filteredItems)
})

app.listen(4000, () => {
    console.log("server is running")
})