const express=require("express");
const router=express.Router();
var mongoose=require("mongoose");
const Donation=mongoose.model("donation");

router.post("/:ngoId",async (req,res)=>{
    const donation=new Donation(req.body);
    donation.ngoId=req.params.ngoId;
    donation.volunteerId=req.user.volunteerId;
    donation=await donation.save();
    res.send(donation);
})

module.exports=router;