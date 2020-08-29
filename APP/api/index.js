const {Router,urlencoded,json}=require('express');
const router =Router();

const loginRouter=require('./login');
const goodsRouter=require('./goods')
const regRouter=require('./reg')

// 数据格式化中间件
router.use(urlencoded(),json());
router.use('/login',loginRouter);
router.use('/goods',goodsRouter)
router.use('/reg',regRouter)
module.exports=router;

router.use(urlencoded({ extended: false }), json())