const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public"))); //css,ejs passing
app.use(express.urlencoded({extended:true})); //new chat passing
app.use(methodOverride("_method"));
 
main()
.then(()=>{
    console.log("connection successful")
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/WhatsApp');
}
//Index/all chats Route
app.get("/chats",async(req,res)=>{
   let chats = await Chat.find() //to get all data & it async funt h to awiat use krna hoga
   res.render("index.ejs",{chats});
});
app.post("/chats",(req,res)=>{
    let {from,msg,to} = req.body; //data accesse or pas krne ka lia urlencode bhejna prta h line -11
    let newChat = new Chat({
        from:from,
        msg:msg,
        to:to,
        create_at: new Date(),
    });
    newChat
    .save()
    .then((res)=>{
        console.log("chat saved");
    })
    .catch((err)=>{
        console.log(err);
    })
    res.redirect("/chats")
}) 

//New chat Route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});
//Edit Route
app.get("/chats/:id/edit",async(req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
});
//Update Route
app.put("/chats/:id",async(req,res)=>{
    let {id} = req.params;
    let {msg: newMsg} = req.body;
    let updateChat = await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidators:true,new:true});
    res.redirect("/chats");
});
//DELETE Chats
app.delete("/chats/:id",async(req,res)=>{
    let {id} = req.params;
    let deleteChat = await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});

app.use("/",(req,res)=>{
    res.send("Server is Working");
});

app.listen(port,()=>{
   console.log(`Server is Listening on port ${port}`);
})