const express=require("express");
const router=express.Router();

//Index-users

router.get("/",(req,res)=>{
    res.send("GET for users");

});

//show users
router.get("/:id",(req,res)=>{
    res.send("GET for show users");

});

//get users
router.get("/",(req,res)=>{
    res.send("Post for users");

});

//delete
router.delete("/:id",(req,res)=>{
    res.send("delete for user id");

});
module.exports=router;


