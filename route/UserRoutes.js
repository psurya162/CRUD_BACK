const express = require("express")
const app = express()
const mongoose = require("mongoose")
const User = require('../models/userModel')

const router = express.Router()
router.post('/',async(req,res)=>{
    const {email,name,age} = req.body;

    try{
        const userData = await User.create({
            email:email,
            name:name,
            age:age
        })

        res.status(201).json(userData)
    }catch(err){
        res.status(400).json({
            message: " Failed To add "
        })
    }
})

///
router.get('/', async (req, res) => {
    try {
        const userData = await User.find(); // await the query execution
        res.status(200).json(userData); // send retrieved data in response
    } catch (err) {
        
        res.status(500).json({
            message: "Failed to retrieve data"
        });
    }
});

//get user Id
router.get('/:id', async (req, res) => {
    const {id}=req.params;
    try {
        const singleUser = await User.findById({_id : id}); // await the query execution
        res.status(200).json(singleUser); // send retrieved data in response
    } catch (err) {
        console.error("Failed to retrieve data:", err);
        res.status(500).json({
            message: "Failed to retrieve data"
        });
    }
});

//delete operation
router.delete('/:id', async (req, res) => {
    const id=req.params.id
    try {
        const singleUser = await User.findByIdAndDelete({_id : id}); // await the query execution
        res.status(200).json(singleUser); // send retrieved data in response
    } catch (err) {
        console.error("Failed to retrieve data:", err);
        res.status(500).json({
            message: "Failed to retrieve data"
        });
    }
});

router.patch('/:id', async (req, res) => {
    const id=req.params.id
    const {name,email,age}=req.body;
    try {
        const UpdateUser = await User.findByIdAndUpdate(id,req.body,{
                new:true,
        }); // await the query execution
        res.status(200).json(UpdateUser); // send retrieved data in response
    } catch (err) {
        console.error("Failed to retrieve data:", err);
        res.status(500).json({
            message: "Failed to retrieve data"
        });
    }
});

module.exports = router;