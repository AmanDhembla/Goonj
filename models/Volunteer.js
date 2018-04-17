const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const volunteerSchema=new Schema({
    contact: String,
    profession: String,
    city: String,
    experience: String,
    gender: String,
    hobbies: String
});

mongoose.model('volunteer',volunteerSchema);
