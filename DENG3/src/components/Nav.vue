<template>
    <div class="Nav">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"> 首页</el-menu-item>
            <el-menu-item index="2">分类</el-menu-item>
            <el-menu-item index="3">购物车</el-menu-item>
            <el-menu-item index="4">我的</el-menu-item>
    </el-menu>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                 activeIndex: '2',
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                let pathIndex = '/Home';
                if(key==1){
                    pathIndex = '/Home'
                }
                if(key==2){
                    pathIndex = '/Fenlei'
                }
                if(key==3){
                    pathIndex = '/Car'
                }
                 if(key==4){
                    pathIndex = '/Mine'
                }
               
                this.$router.push({path:pathIndex})
                console.log(999999999)
            },
            goToHome(){
                this.$router.push({path:'/Home'})
                
                
            }
    }
  }
    
</script>
<style lang="scss" scoped>
    .Nav .el-menu-demo{
        flex-direction: row;
        align-content: space-around;
        display: flex;
        width: 100%;
    }
   .Nav .el-menu-demo li{
        flex: 1;
   }
  
</style>