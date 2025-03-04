const express=require("express");
const app=express();

app.use(express.json());

const port=3000;

app.listen(port,()=>{
    console.log(`App listening on http://localhost:${port}`);

})

const users=[
    {email:"gagan2006@example.com",password:"gash233"},
    {email:"rishie@ample.com",password:"yeiurie3874"},
    {email:"sdhhsd@example.com",password:"mnjdas13"},
];


app.put("/users",async(req,res)=>{
try{
    const updatedUser=await findbyId & update(req.params.id,req.body,{new:true},
        {new:runValidators}
    );
    res.status(200).json({message:"user created successfully"},updatedUser);
}
catch(err){
    res.status(400).json({message:"Email not found",err});
}
});


app.delete("/users",async(req,res)=>{
    try{
        await findbyId&delete(req.params.id);
        res.status(200).json({message:"user deleted successfully"});
    }
    catch(err){
        res.status(400).json({message:"Email not found",err});
    }
})

