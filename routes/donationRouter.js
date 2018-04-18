const express=require("express");
const router=express.Router();
var mongoose=require("mongoose");
const Donation=mongoose.model("donation");

router.post("/:ngoId",async (req,res)=>{
    console.log("here i am ");
    let donation=new Donation(req.body);
    donation.ngoId=req.params.ngoId;
    if(req.body.anonymous){

    }else{
        donation.volunteerId=req.user.volunteerId;
    } 
    donation=await donation.save();
    res.send(req.user);
})

module.exports=router;