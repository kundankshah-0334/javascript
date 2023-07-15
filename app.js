const express =require("express")
const mongoose =require("mongoose")
const app=express();

app.get("/",(req,res)=>{
    res.send("welcome from home page")
})
app.get("/about",(req,res)=>{
    res.send("welcome from about page")
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

mongoose.connect("mongodb+srv://kundanlal96580:Wer6SjeCyBT1U415@cluster0.nm6eucg.mongodb.net/")
.then(() => {
    console.log('Connected to MongoDB');
    // Continue with your code here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    // Handle the error appropriately
  });