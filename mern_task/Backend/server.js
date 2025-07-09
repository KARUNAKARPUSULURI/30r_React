const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { userRouter } = require("./routers/userRouters");
const connectDB = require("./config/db");
const { loginRouter } = require("./routers/loginRouter");
dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());

connectDB();

app.use("/", userRouter);
app.use("/", loginRouter)

app.listen(port, ()=>{
    console.log(`server is running on port: http://localhost:${port}`)
})