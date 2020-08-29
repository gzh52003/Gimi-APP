const express = require("express");
const router=express.Router();
const{formatData}=require('./tools')
const mongo=require('./mongo');






// 获取

router.get('/', async (req, res) => {
  const { username } = req.query
  const result = await mongo.find('user', { username })
  res.send(result)
  if (result.length > 0) {
      res.send(formatData())
     
  } else {
    res.send(formatData({ code: 0 }))
  }
})


router.post('/',async(req,res)=>{
  const {username,password}=req.body;
console.log(username,password);
  let result
  try{
      result=await mongo.insert('user',{username,password});
  
  }catch(err){
      result=err
  }
  res.send(result)
})



module.exports=router;
