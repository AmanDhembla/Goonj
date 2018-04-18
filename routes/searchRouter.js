const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");
const Volunteer=mongoose.model("volunteer");
const Ngo=mongoose.model("ngo");
const Event=mongoose.model("event");
const User=mongoose.model("users");

router.route("/")
.post(function(req,res){
  console.log(req.body);
  if(req.body.type=="ngo"){
    Ngo.find({"name_ngo":req.body.name},function(err,docs){
      if(err) console.log(err);
        return res.json(docs);
    });
  }else if(req.body.type=="volunteer"){
    User.find({"firstname": req.body.name},function(err,docs){
      if(err) console.log(err);
        return res.json(docs);
    });
  }else if(req.body.type=="event"){
    Event.find({"name": req.body.name},function(err,docs){
      if(err) console.log(err);
        return res.json(docs);
    });
  }else{
    res.json({err:"invalid type"});
  }
});

module.exports=router;
