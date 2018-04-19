const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");
const Event=mongoose.model("event");
const Ngo=mongoose.model("ngo");

router.post("/",async (req,res)=>{
    let event=await new Event(req.body);
    event.ngoId=req.user.ngoId;
    event=await event.save();
    let ngo=await Ngo.findById(req.user.ngoId);
    ngo.events.push(event._id);
    ngo=await ngo.save();
    res.send(ngo);
})


//route to update an event
router.route("/:id")
.put(async (req, res)=>{
  const event=await event.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true});
  res.send(event);
});

module.exports=router;