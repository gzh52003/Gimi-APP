<template>
          <div class="Fenlei">
            <!-- 按钮键 -->
          <el-button-group class="Fenlei-top"> 
                <el-button type="primary" @click="handleShow(1)">分类</el-button>
                <el-button type="primary" @click="handleShow(2)">组合筛选</el-button>
          </el-button-group>
  <div class="Fenlei-content">
            <div class="Fenlei-content-one" v-if="isShow">
              <app-one></app-one>
              
            </div>
            <div class="Fenlei-content-two" v-else>
              <app-two></app-two>
            </div>
          </div>
    </div>
</template>

<script>
import appOne from './components/one.vue'
import appTwo from './components/two.vue'





export default {
  data() {
    
    return {
         isShow:true,
    };
  },

  components: {appOne,appTwo},

  methods: {
      handleShow(key){
        console.log(111111)
        if(key){
          if(key==1){
            this.isShow = true
          }else if(key==2){
            this.isShow = false
          }
        }
      }
  },
   created(){

  }
};
</script>

<style lang='scss' scoped>  

div {
  text-align: center;
}
.el-button{
  width: 93px;
}
.app{
 position: relative;
}
.Fenlei{
    position: absolute;
    top: 0px;
    bottom: 61px;
    width: 100%;
}


.Fenlei .Fenlei-content{
        position: absolute;
        top: 40px;
        bottom: 0px;
        left: 0;
        right: 0;
}
.Fenlei-content-one{
  height: 100%
  ;
  width: 100%;
}

.el-button{
      background: #e8580d;
    border: solid 1px #e8580d;
    border-right: none;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
}
</style>
