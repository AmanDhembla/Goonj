const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const volunteerSchema=new Schema({
    contact: String,
    profession: String,
    city: String,
    experience: String,
    gender: String,
    hobbies: String,
    donations:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"donation"
    }],
      
    events:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'event'
    }]
});

mongoose.model('volunteer',volunteerSchema);
