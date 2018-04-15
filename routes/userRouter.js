const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");
const User=mongoose.model("users");

router.get("/current_user",(req,res)=>{
    res.json(req.user);
});

router.get("/logout",(req,res)=>{
    req.logout();
    res.redirect("/");
})

router.post("/profile",async (req,res)=>{
    const {firstname,lastname,email,category}=req.body;
    let user=await User.findById(req.user.id);
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    if(category==="volunteer"){
        user.volunteer=true;
    }else{
        user.ngo=true;
    }
    console.log(user);
    user=await user.save();
    res.send(user);
})

module.exports=router;