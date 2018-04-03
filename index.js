const express=require("express");
const passport=require("passport");
require("./services/passport");

const app=express();

//routers
const authRouter=require("./routes/authRouter");

app.get("/",(req,res)=>{
    res.json({"msg":"the server is working fine"});
});

app.use("/auth/google",authRouter);

const PORT=process.env.PORT || 5000;

app.listen(PORT);