const express = require("express");
const studentRouter = require("./Routers/studentRouter");
const jwt = require("jsonwebtoken");

const app = express();

console.log(jwt.sign({id : 1, name : "karunakar", password : "123123"}, "auth"));

app.use("/edu_student", studentRouter) // student data -> /students -> /edu_student/students
// app.use("/edu_student", staffRouter)  // staff data -> /staff -> /edu_student/staff
app.listen(3000, () => {
    console.log("server is running")
})