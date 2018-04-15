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
        
    },
    ngoId:{

    }
});

mongoose.model('users',userSchema);
