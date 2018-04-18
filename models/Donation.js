const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const DonationSchema=new Schema({
    type: String,
    amount: String,
    collected: {
        type: Boolean,
        default: false
    },
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