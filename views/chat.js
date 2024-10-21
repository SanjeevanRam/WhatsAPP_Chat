const { kMaxLength } = require("buffer");
const mongoose = require("mongoose");

//create schema
const chatSchema = new mongoose.Schema({
    from:{
        type:String,
        required:true,
    },
    to:{
        type:String,
        required:true,
    },
    msg:{
        type:String,
        kMaxLength:50,
    },
    create_at:{
        type:Date,
        required:true,
    },
});

//create Model
const Chat = mongoose.model("Chat",chatSchema);

module.exports = Chat;