
const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
app.use(express.json());
const cors = require("cors")
const userRoute = require("./route/UserRoutes")

app.use(cors())




app.listen(process.env.PORT || 4000 ,()=>{
    console.log("Server is Running on ",process.env.PORT)
})

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Connected To DataBase")
})
.catch(err=>"Failed")

//
app.use(userRoute)

