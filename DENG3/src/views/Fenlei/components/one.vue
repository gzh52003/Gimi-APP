<template>
    <div class="BBB">
    <div class="one-content">
        <el-col :span="12">
            <el-menu
            default-active="1"
            class="el-menu-vertical-demo">
            
            <el-menu-item index="1"  @click="handleShow(1)">
                <span slot="title">类型</span>
            </el-menu-item>
            <el-menu-item index="2"  @click="handleShow(2)">
                <span slot="title">风格</span>
            </el-menu-item>
            <el-menu-item index="3"  @click="handleShow(3)">
                <span slot="title">空间</span>
            </el-menu-item>
            <el-menu-item index="4"  @click="handleShow(4)">
                <span slot="title">品牌</span>
            </el-menu-item>
            <el-menu-item index="5"  @click="handleShow(5)">
                <span slot="title">价格</span>
            </el-menu-item>
            <el-menu-item index="6"  @click="handleShow(6)">
                <span slot="title">材质</span>
            </el-menu-item>
            </el-menu>
        </el-col>
    </div>
        <div class="AAA">
         <div class="b1" v-if="isShow"><h1>第1页显示了</h1></div>
          <FengGe v-if="isShow2"></FengGe>
           <div class="b3" v-if="isShow3" >第3页显示了</div>
            <div class="b4" v-if="isShow4"  >第4页显示了</div>
             <div class="b5" v-if="isShow5" >第5页显示了</div>
              <div class="b6" v-if="isShow6" >第6页显示了</div>
         
        </div>
        </div>
        
</template>

<script>
import FengGe from './FengGe.vue'
export default {
    data(){
        return{
            isShow:true,
            isShow2:true,
             isShow3:true,
              isShow4:true,
               isShow5:true,
                isShow6:true,          
        }
    },
       
      components: {FengGe},
    methods: {
      
      handleShow(key){
        console.log(111111)
        if(key){
          if(key==1){
            this.isShow = true
            this.isShow2=false
            this.isShow3=false
            this.isShow4=false
            this.isShow5=false
            this.isShow6=false
          }if(key==2){
           this.isShow = false
            this.isShow2=true
            this.isShow3=false
            this.isShow4=false
            this.isShow5=false
            this.isShow6=false
          }
          if(key==3){
           this.isShow = false
            this.isShow2=false
            this.isShow3=true
            this.isShow4=false
            this.isShow5=false
            this.isShow6=false
          }
          if(key==4){
           this.isShow = false
            this.isShow2=false
            this.isShow3=false
            this.isShow4=true
            this.isShow5=false
            this.isShow6=false
          }
          if(key==5){
           this.isShow = false
            this.isShow2=false
            this.isShow3=false
            this.isShow4=false
            this.isShow5=true
            this.isShow6=false
          }
          if(key==6){
           this.isShow = false
            this.isShow2=false
            this.isShow3=false
            this.isShow4=false
            this.isShow5=false
            this.isShow6=true
          }
        }
      }
  },
  
  
  
   created(){

  }
 
  
};
    

  
</script>

<style lang="scss" scoped>
.one-content{
     float: left;
}
.el-menu-vertical-demo{
    width: 80px;
    height: 100%;
}
// .box{
//     width: 100px;
//     height: 100px;
//     background: red;
// }
.Fenlei{
    position: relative;
}


.Fenlei .Fenlei-concent{
        position: absolute;
        top: 40px;
        bottom: 61px;
        left: 0;
        right: 0;
        position: relative;
}

.AAA{
  width: calc(100% - 82px);
  height: 100%;
  background:pink;
  float: right;
}
.one-content{
  width: 82px;
  float: left;
  position: absolute;
  bottom: 0;    
  top: 0;
}
.el-col.el-col-12{
      width: 80px;
      height: 100%;
      float: left;
}
.BBB{
    width: 100%;
    height: 100%;
}
.AAA div{width: 100%;
         height:100% ;
         float: right;
}        
.AAA .b2{
    background: yellow;
}
</style>