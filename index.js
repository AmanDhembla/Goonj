const express=require("express");
const passport=require("passport");
const keys=require("./config/keys");
const mongoose=require("mongoose");
const cookieSession=require('cookie-session');

const app=express();

mongoose.connect(keys.mongoURI);

//to load the schemas
require("./models/User");

require("./services/passport");
//routers
const authRouter=require("./routes/authRouter");
const userRouter=require("./routes/userRouter");

if(process.env.NODE_ENV==="production"){
    app.use(express.static('client/build'));
    const path=require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'clinet','build','index.html'));
    })
}

app.use(cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth/google",authRouter);
app.use("/api/user",userRouter);

const PORT=process.env.PORT || 5000;

app.listen(PORT);