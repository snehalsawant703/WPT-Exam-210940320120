const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const {select}= require("./user");
const {add}= require("./user");

app.get("/view",async(req, res)=>{
    const msglist=await select();
    res.json(msglist);
});

app.post("/send", async(req,res)=>{
    const sendmsg=(req.body);
    await add(sendmsg);
    res.json({message : " message send"});
});

app.listen(4000, () => console.log("server started"));