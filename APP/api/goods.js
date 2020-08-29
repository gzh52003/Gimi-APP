const express = require("express");
const router=express.Router();

const mongo=require('./mongo');


router.get('/',(req,res)=>{
      
mongo.find('goods',{name:'xxx',price:998})



    res.send
})











module.exports=router;











