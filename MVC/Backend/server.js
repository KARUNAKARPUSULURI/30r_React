const express = require('express')
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const { router } = require('./Routers/registerRouter');
const { loginRouter } = require('./Routers/loginRouter');


dotenv.config();

const app = express()
app.use(cors());
const port = process.env.PORT || 5000;
const connectionString = process.env.URI

mongoose.connect(connectionString)
.then(()=> console.log("connected"))
.catch(err => console.log("connecttion failed"));

app.use("/", router)
app.use("/", loginRouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))