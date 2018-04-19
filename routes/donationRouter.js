const express=require("express");
const router=express.Router();
var mongoose=require("mongoose");
const Donation=mongoose.model("donation");
const Ngo=mongoose.model("ngo");
const Volunteer=mongoose.model("volunteer");

router.post("/:ngoId",async (req,res)=>{
    console.log("here i am ");
    let donation=new Donation(req.body);
    donation.ngoId=req.params.ngoId;
    if(req.body.anonymous){

    }else{
        donation.volunteerId=req.user.volunteerId;
    } 
    donation=await donation.save();
    let ngo=await Ngo.findById(req.params.ngoId);
    ngo.donations.push(donation._id);
    ngo=await ngo.save();

    let volunteer=await Volunteer.findById(req.user.volunteerId);
    volunteer.donations.push(donation._id);
    volunteer=await volunteer.save();

    res.send(volunteer);
})

module.exports=router;