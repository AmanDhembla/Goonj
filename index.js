const express=require("express");

const app=express();

app.get("/",(req,res)=>{
    res.json({"msg":"the server is working"});
});

const PORT=5000;

app.listen(PORT);