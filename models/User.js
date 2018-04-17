const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const userSchema=new Schema({
    googleId: String,
    firstname: {
        type: String,
        default: ""
    },
    lastname: String,
    email: String,
    volunteer:{
        type:Boolean,
        default: false
    },
    ngo:{
        type:Boolean,
        default: false
    },
    volunteerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'volunteer'
    },
    ngoId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ngo'
    },
    ngoForm:{
        type:Boolean,
        default: false
    }
});

mongoose.model('users',userSchema);
