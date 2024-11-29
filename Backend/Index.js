const express=require('express');
const cors=require('cors');
const mongoose=require("mongoose");
const routes=require("./routes/todoRoutes");

const app=express();
require("dotenv").config();
const PORT=process.env.PORT||5000;

app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
res.json({
    message:"server and database connnect",
})
})

mongoose
.connect(process.env.MongoDB_URL)
.then(() => console.log("MongoDB connected..."))
.catch((err) => console.log(err));


app.use('/api',routes);
app.listen(PORT,()=>{
    console.log(`server on ${PORT}`)
})