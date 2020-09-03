<template>
<div>
    
    <div class="mony-content">
   <div>区间价(元)</div>
   <div>起始价</div>
   <div>终止价</div>
    </div>
    <el-button @click="drawer = true" type="primary" >
        <div>类型</div> 
<div>></div>
</el-button>
<el-button @click="drawer = true" type="primary" style="margin-left: 0;">
        <div>品牌</div>
<div>></div>
</el-button>
<el-button @click="drawer = true" type="primary" style="margin-left: 0;">
        <div>适用空间</div>
<div>></div>
</el-button>
<el-button @click="drawer = true" type="primary" style="margin-left: 0;">
        <div>风格</div>
<div>></div>
</el-button>
<el-button @click="drawer = true" type="primary" style="margin-left: 0;">
        <div>价格</div>
<div>></div>
</el-button>
<el-drawer
  title="我是标题"
  :visible.sync="drawer"
  :with-header="false" 
   size="70%">
  <span>我来啦!</span>
</el-drawer>
</div>
</template>

<script>
 export default {
    data() {
      return {
        drawer: false,
      };
    }
  };
</script>

<style lang="scss" scoped>
.el-button{
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 0px;
    border-color: #d9d9d9;
    
}
.el-button ::v-deep span{
    display: block;
    float: left;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 20px;
    
   
    
}
.el-button ::v-deep span div{
    height: 100%;
    line-height:28px;
    font-size: 14px;
    color: black;
}
.mony-content{
    width: 100%;
    height: 44px;
    line-height: 44px;
    
    margin-top: 9px;
    text-align: left;
    margin-left: 6px;
}
.mony-content div{
        height: 100%;
        width: 80px;
        margin-right: 17px;
        float: left;
        margin-left: 6px;
}
.el-drawer ::v-deep {
  width: 70%;
}
</style>