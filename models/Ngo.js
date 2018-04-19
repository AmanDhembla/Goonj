const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const ngoSchema=new Schema({
    name_head: String,
    name_ngo: String,
    email: String,
    contact: String,
    house_no: String,
    street_name: String,
    city: String,
    state: String,
    pincode: String,
    acc_name: String,
    bank_name: String,
    branch_name: String,
    bank_acc_no: String,
    ifsc: String,
    registration_number: String,
    identity_proof: String,
    valid_form: String,
    valid_to: String,
    donations:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"donation"
    }],
    events: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"event"
    }]
    
});

mongoose.model("ngo",ngoSchema);