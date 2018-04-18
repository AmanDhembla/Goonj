const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");
const Volunteer=mongoose.model("volunteer");
const User=mongoose.model("users");

router.post("/",async (req,res)=>{
    console.log("here",req.body);
    const volunteer=await new Volunteer(req.body).save();
    let user=await User.findById(req.user.id);
    user.volunteerId=volunteer.id;
    user=await user.save();
    res.send(user);
})

router.get("/",async (req,res)=>{
    const volunteer=await Volunteer.findById(req.user.volunteerId);
    res.send(volunteer);
})

module.exports=router;