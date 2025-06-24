const express = require("express")


const staffRouter = express.Router();

staffRouter.get("/:id", (req, res) => {
    res.send("this is staff routes")
})

module.exports = staffRouter