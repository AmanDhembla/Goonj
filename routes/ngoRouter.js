const express=require("express");
const router=express.Router();
var mongoose=require("mongoose");
const User=mongoose.model("users");
const Ngo=mongoose.model("ngo");

router.post("/",async (req,res)=>{
    console.log(req.body);
    if(req.user.ngoId){
        let user=await User.findById(req.user.id);
        if(req.body.registration_number){
            Ngo.findByIdAndUpdate(req.user.ngoId,{$set:req.body},{new:true},function(err,ngo){
               if(err) throw err;
            });
            user.ngoForm=true;
            user=await user.save();
            res.send(user);
        }else{
            Ngo.findByIdAndUpdate(req.user.ngoId,{$set:req.body},{new:true},function(err,ngo){
                if(err) throw err;
                res.send(req.user);
            });
        }
    }else{
        const ngo=await new Ngo(req.body).save();
        let user=await User.findById(req.user.id);
        user.ngoId=ngo.id;
        user=await user.save();
        res.send(user);
    }
})

module.exports=router;