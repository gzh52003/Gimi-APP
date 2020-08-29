const {Router,urlencoded,json}=require('express');
const router =Router();

// 数据格式化中间件
router.use(urlencoded(),json())

const goodsRouter=require('./goods',goodsRouter)
const loginRouter=require('./login',loginRouter)

module.exports=router;