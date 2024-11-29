// const {ObjectId}=require("mongoose")

const ToDoModel=require("../model/ToDoModel");

const getToDos=async(req,res)=>{
    try{
        const todos= await ToDoModel.find();
    res.json({
        todos
    })
    }catch(err){
        res.json({
            message:"database is empty"
        })
    }    
}

const saveToDo= async(req,res)=>{
    try{
        const {text}=req.body;
        const todocreate= await ToDoModel.create({text});
        res.json({
            message:"todo create successfuly",
            todocreate

        })
    }catch(err){
        res.status(401).json({
            message:err
        })

    }
   
}

const updateToDo=async(req,res)=>{
    const id=req.params.id;
    const {text}=req.body;
    const result = await ToDoModel.updateOne(
        { _id: id }, // Filter by unique ID
        { $set:{ text} } // Update the specified fields
    );
    if (result.matchedCount === 0) {
        res.json({
            message:"No to-do found with the given ID"
        })
    
    } else {
        res.json({
            message:"Successfully updated"
        })  
        console.log(`Successfully updated ${result.modifiedCount} to-do(s)`);
    }
}

const deleteToDo=async(req,res)=>{
    const id=req.params.id;
    const result = await ToDoModel.deleteOne({ _id: id });
    if (result.deletedCount> 0) {
        res.json({
            message:"Successfully deleted"
        })  
        console.log(`Successfully deleted ${result.modifiedCount} to-do(s)`);
       
    } else {
        res.json({
            message:"No to-do found with the given ID"
        })
        console.log('No to-do found with the given ID');
    }
}

module.exports={
    getToDos,
    saveToDo,
    updateToDo,
    deleteToDo

}
