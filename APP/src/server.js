const express=require('express')
const app=express();

app.listen(2003,()=>{
    console.log('server is gogogo');
    
})    

const rootRouter=require('./api/index')

app.use('/api',rootRouter)