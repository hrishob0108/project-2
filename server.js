const express= require('express');
const cors = require('cors');
const port= 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hello world")
});

app.post('/',(req,res)=>{
    const{name, age, phnum}=req.body;

    if(!name || !phnum){
        return res.status(400).json({message:"missing name or phnum"});
    }
})

app.listen(port,()=>{
    console.log(`Server connected succesfully at port ${port}`);
});