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

app.get("/",(req,res)=>{
    res.json({"msg":"the server is working fine"});
});

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