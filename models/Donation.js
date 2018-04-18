const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const DonationSchema=new Schema({
    type: String,
    description: String,
    collected: {
        type: Boolean,
        default: false
    },
    pick_up_address: String,
    ngoId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ngo'
    },
    volunteerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'volunteer'
    }
})

mongoose.model("donation",DonationSchema);