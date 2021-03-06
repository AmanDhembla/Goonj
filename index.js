const express=require("express");
const passport=require("passport");
const keys=require("./config/keys");
const mongoose=require("mongoose");
const cookieSession=require('cookie-session');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.json());
mongoose.connect(keys.mongoURI);

//to load the schemas
require("./models/User");
require("./models/Volunteer");
require("./models/Ngo");
require("./models/Event");
require("./models/Donation");

require("./services/passport");
//routers
const authRouter=require("./routes/authRouter");
const userRouter=require("./routes/userRouter");
const volunteerRouter=require("./routes/volunteerRouter");
const ngoRouter=require("./routes/ngoRouter");
const eventRouter=require("./routes/eventRouter");
const donationRouter=require("./routes/donationRouter");
const searchRouter=require("./routes/searchRouter");

app.use(cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth/google",authRouter);
app.use("/api/user",userRouter);
app.use("/api/volunteer",volunteerRouter);
app.use("/api/ngo",ngoRouter);
app.use("/api/event",eventRouter);
app.use("/api/donation",donationRouter);
app.use("/api/search",searchRouter);

if(process.env.NODE_ENV==='production'){
    //express will serve up production assets
    app.use(express.static('client/build'));
  
    //express will serve up index.html if no matching route is found
    const path=require('path');
    app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
  
}

const PORT=process.env.PORT || 5000;

app.listen(PORT);