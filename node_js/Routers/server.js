const express = require('express')
const studentRouter = require('./routes/studentRoutes')
const staffRouter = require('./routes/staffRoutes')

const app = express()
const port = 3000

app.use("/students", studentRouter)
app.use("/staff", staffRouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))