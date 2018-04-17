const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const EventSchema=new Schema({
    name: String,
    venue: String,
    date: String,
    type: String
})

mongoose.model("event",EventSchema);