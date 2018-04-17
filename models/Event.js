const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const EventSchema=new Schema({
    name: String,
    venue: String,
    date: String,
    type: String,
    ngoId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ngo'
    }
})

mongoose.model("event",EventSchema);