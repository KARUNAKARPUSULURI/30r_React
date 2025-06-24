const express = require('express');
const studentRouter = require('./Routes/studentRoutes');
const staffRouter = require('./Routes/staffRoutes');
const app = express()
app.use(express.json())
app.use(express.urlencoded({recursive : true}))
const port = process.env.PORT || 5000;

app.use("/students", studentRouter)
app.use("/staff", staffRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))