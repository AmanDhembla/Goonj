const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");
const Event=mongoose.model("event");

router.post("/",async (req,res)=>{
    let event=await new Event(req.body);
    event.ngoId=req.user.ngoId;
    event=await event.save();
    console.log(event);
    res.send(req.user);
})

module.exports=router;