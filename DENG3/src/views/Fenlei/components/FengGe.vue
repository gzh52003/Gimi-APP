<template>
<div class="BBOX">
   <h2>第2页显示了</h2>
   <div class="Box " >
    <div v-for="(item, index) in list" :key="index">
       <div class="box-photo"><a href=""></a></div>
       <div class="box-chinese">{{ item.name }}</div>
    </div>
      <div>
       <div class="box-photo"><a href=""></a></div>
       <div class="box-chinese">iphone 111</div>
    </div>
      <div>
       <div class="box-photo"><a href=""></a></div>
       <div class="box-chinese">iphone 111</div>
    </div>
      <div>
       <div class="box-photo"><a href=""></a></div>
        <div class="box-chinese">iphone 111</div>
    </div>
      <div>
     <div class="box-photo"><a href=""></a></div>
        <div class="box-chinese">iphone 111</div>
    </div>
      <div>
       <div class="box-photo"><a href=""></a></div>
        <div class="box-chinese">iphone 111</div>
    </div>
      <div>
       <div class="box-photo"><a href=""></a></div>
        <div class="box-chinese">iphone 111</div>
    </div>
     <div>
      <div class="box-photo"><a href=""></a></div>
        <div class="box-chinese">iphone 111</div>
    </div>
      <div>
       <div class="box-photo"><a href=""></a></div>
       <div class="box-chinese">iphone 111</div>
    </div>
      <div>
       <div class="box-photo"><a href=""></a></div>
        <div class="box-chinese">iphone 111</div>
    </div>
      <div>
      <div class="box-photo"><a href=""></a></div>
        <div class="box-chinese">iphone 111</div>
    </div>
      <div>
       <div class="box-photo"><a href=""></a></div>
       <div class="box-chinese">iphone 111</div>
    </div>
      <div>
      <div class="box-photo"><a href=""></a></div>
        <div class="box-chinese">iphone 111</div>
    </div>
      <div>
      <div class="box-photo"><a href=""></a></div>
       <div class="box-chinese">iphone 111</div>
    </div>
     <div>
       <div class="box-photo"><a href=""></a></div>
        <div class="box-chinese">iphone 111</div>
    </div>
      <div>
       <div class="box-photo"><a href=""></a></div>
        <div class="box-chinese">iphone 111</div>
    </div>
      <div>
      <div class="box-photo"><a href=""></a></div>
        <div class="box-chinese">iphone 111</div>
    </div>
      <div>
       <div class="box-photo"><a href=""></a></div>
       <div class="box-chinese">iphone 111</div>
    </div>
      <div>
      <div class="box-photo"><a href=""></a></div>
        <div class="box-chinese">iphone 111</div>
    </div>
      <div>
      <div class="box-photo"><a href=""></a></div>
        <div class="box-chinese">iphone 111</div>
    </div>
      <div>
       <div class="box-photo"><a href=""></a></div>
        <div class="box-chinese">iphone 111</div>
    </div>
    <div>
       <div class="box-photo"><a href=""></a></div>
        <div class="box-chinese">iphone 111</div>
    </div>
   </div>









</div>
</template>

<script>

</script>


<script>
export default{
  data(){
    name:
    return{    
    list:[{
      
      name: 'A'
      },
      {
        name:'B'
      },
      {

        name:'C'
        
      },
      {
        
        name:'D'
        
      },
      {
        
        name:'E'
        
      },
      {
        
        name:'F'
        
      },
      {
        
        name:'G'
        
      },
      {
        
        name:'H'
        
      },
      {
        
        name:'I'
        
      },
      {
        
        name:'J'
        
      },
      {
        
        name:'K'
        
      },
      {
        
        name:'L'
        
      },
      {
        
        name:'M'
        
      },
      {
        
        name:'N'
        
      },
      {
        
        name:'O'
        
      },
      {
        
        name:'B'
        
      },
      {
        
        name:'P'
        
      },
      {
        
        name:'Z'
        
      },
      {
        
        name:'X'
        
      },
      {
        
        name:'V'
        
      },
      {
        
        name:'aa'
        
      },
    ]
  }
}
}


</script>
<style lang="scss" scoped>
@function vw($px) {
    @return ($px / 750) * 100vw
}
*{
    margin: 0;
    padding: 0;
}
.A{
   width: 100%;
   height: 200px;
   display: flex;
}
.Box{
   width: 100%;
   height: 566px;
   background: yellowgreen;
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
   overflow-y:scroll
}
.Box div{
   background: yellow;
   width: 84px;
   height: 84px;
   margin: 2px;
   display: flex;
   flex-direction: column;
   justify-content: space-around
}
.Box div .box-photo{
   width: 67px;
   height:52px;
   background: powderblue;
   display: flex;
   align-self: center;
   
}
.Box div .box-photo a{
   width: 100%;
   height: 100%;
  background:url(CCC.jpg) no-repeat center;
  display: block;
  background-size: 100% 100%;

}
.Box div .box-chinese{
  width: 67px;
  height: 19px;
  background: tomato;
  display: flex;
   align-self: center;
   margin-top: -7px;

}
.BBOX{
  overflow: scroll;
}
</style>