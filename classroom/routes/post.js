//post
const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("GET for posts");

});

//show users
router.get("/:id",(req,res)=>{
    res.send("GET for show posts id");

});

//post users
router.post("/",(req,res)=>{
    res.send("Post for posts");

});

//delete
router.delete("/:id",(req,res)=>{
    res.send("delete for posts");

});

module.exports=router;




