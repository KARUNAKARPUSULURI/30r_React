const express = require("express");

const studentRouter = express.Router();


studentRouter.get("/", (req, res) => {
    res.send("this is students route")
})
studentRouter.post("/", (req, res) => {
    res.send("this is students route")
})
studentRouter.put("/:id", (req, res) => { //student/:id -> student/
    res.send("this is students route")
})
studentRouter.patch("/:id", (req, res) => { //student/:id -> student/
    res.send("this is students route")
})
studentRouter.delete("/:id", (req, res) => { //student/:id -> student/
    res.send("this is students route")
})

module.exports = studentRouter;