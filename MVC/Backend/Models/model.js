const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    username : String,
    age : Number,
    email  : String,
    password : String
})

const userModel = mongoose.model("User", userSchema);
module.exports = {userModel};