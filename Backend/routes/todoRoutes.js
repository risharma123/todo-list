const {Router}=require("express")
const router =Router();
const {getToDos,saveToDo,updateToDo,deleteToDo} =require("../controller/ToDoControllers");


router.get("/", getToDos);
router.post("/save", saveToDo);
router.put("/update/:id", updateToDo);
router.delete("/delete/:id", deleteToDo);


module.exports=router
