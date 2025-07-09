const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try{
        const {name, email, password} = req.body; //{}
        const isExist = await User.findOne({email})
        if(isExist){
            res.send("user already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({name, email, password : hashedPassword});
        await newUser.save();
        res.send("user created");
    }catch(err){
        console.log("register controllers error");
        return err.message;
    }
}

const login = async (req, res) => {
    const {email, password} = req.body;
    const matchedObj = await User.findOne({email})
    const comparedPassword = await bcrypt.compare(password, matchedObj.password)
    if(comparedPassword){
        const {email, password} = matchedObj
        const token = await jwt.sign({email, password}, "karuna123")
        res.json({matchedObj, token})
    }else{
        res.send("invalid credentials")
    }
}

module.exports = {register, login}