const mongoose=require("mongoose");

const ToDoSchema=new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
})

const todomodel=mongoose.model("textdata",ToDoSchema);
module.exports=todomodel