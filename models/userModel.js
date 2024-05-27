const mongoose = require("mongoose")

// create Schema
const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    name:{
        type:String,
        
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    
})
//Create Model
const  User = mongoose.model("User" ,UserSchema)

module.exports = User;