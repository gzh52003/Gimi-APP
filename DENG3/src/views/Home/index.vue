<template>
<div class="home">
  <van-search
  v-model="value"
  show-action
  label="地址"
  placeholder="请输入搜索关键词"
  @search="onSearch"
>
  <template #action>
    <div @click="onSearch">搜索</div>
  </template>
</van-search>
  <!-- 搜索框 -->
  <!-- <div class="search">
    <van-search v-model="value"
      show-action
      label="地址"
      placeholder="请输入搜索关键词"
      @search="onSearch">
      <template #action>
      <div @click="onSearch">搜索</div>
      </template>
      </van-search>
      </div> -->
    <div class="home-box">
          <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="http://img06.dengimg.com/Gallery/AutoLink/img_212756.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="http://img01.dengimg.com/Gallery/AutoLink/img_212758.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="http://img02.dengimg.com/Gallery/AutoLink/img_212759.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="http://img03.dengimg.com/Gallery/AutoLink/img_212760.jpg" alt=""></van-swipe-item>
      </van-swipe>
       <!-- 宫格 -->
      <van-grid :column-num="4">
        <van-grid-item   @click="handleSelect" v-for="value in 1" :key="value+1" icon="http://img06.dengimg.com/Gallery/AutoLink/img_176692.png" text="团购专区" />
        <van-grid-item v-for="value in 1" :key="value+2" icon="http://img02.dengimg.com/Gallery/AutoLink/img_176695.png" text="限时特卖" />
        <van-grid-item v-for="value in 1" :key="value+3" icon="http://img03.dengimg.com/Gallery/AutoLink/img_176696.png" text="现货专区" />
        <van-grid-item v-for="value in 1" :key="value+4" icon="http://img07.dengimg.com/Gallery/AutoLink/img_176693.png" text="新品上架" />
        <van-grid-item v-for="value in 1" :key="value+5" icon="http://img05.dengimg.com/Gallery/AutoLink/img_176691.png" text="体验馆" />
        <van-grid-item v-for="value in 1" :key="value+6" icon="http://img04.dengimg.com/Gallery/AutoLink/img_176690.png" text="品牌街" />
        <van-grid-item v-for="value in 1" :key="value+7" icon="http://img03.dengimg.com/Gallery/AutoLink/img_211115.png" text="配灯宝" />
        <van-grid-item v-for="value in 1" :key="value+8" icon="http://img01.dengimg.com/Gallery/AutoLink/img_176694.png" text="安全支付"/>
      </van-grid>

      <!-- 一张图片 -->
      <div class="one-photo">
        <img src="http://dengimg.deng.com/style/m/images/index/d_zhineng.png?2020050801" alt="">
      </div>
      <!-- 地址 -->
      <div class="place">
          <div class="place-photo">
            <img src="http://img03.dengimg.com/Gallery/Pavilion/img_203744.jpg" alt="">
          </div>
        <div class="place-content">
          <div class="place-content-first">附近体验馆：中山市古镇镇灯网旗舰</div>
          <div class="place-content-second">地址：广东省中山市古镇镇中兴大道121号</div>
        </div>
      </div>
      <!-- 计时器 -->
      <div class="time">
        <div class=red_zi>限时特卖丶SALE</div>
        
        <!-- <div><van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" /></div> -->
        <div class="time_all">全部></div>
      </div>
      <!-- 三张图片 -->
      
       




     
      <!-- 两张图片 -->
       <div class="two-box-king">
         <div class="two-box-one" v-for="(item) in list" :key="item.name">
           <div class="two-box-photo"><img :src="item.img" alt=""></div>
         <div class="two-box-concent">
             <p>  {{ item.name }}<br>{{ item.size }}<br>{{ item.money }}<br></p>
         </div>
         </div>
         
       </div>
       <!-- 热分类 -->
       <div class="hot-box">
          <div class="hot-box-one"  v-for="(item) in aist" :key="item.name">
            <div class="hot-box-one-photo"><img :src="item.img" alt=""></div>
            <div class="hot-box-one-content">{{ item.name }}</div>
         
            </div>
            </div>
            
            
           <!-- 纯图片盒子 -->
           <div class="only-photo">
             <div class="only-biggest"><img src="http://img02.dengimg.com/misc/public/Client/WapImg/Fg/imgmodern_1.png" alt=""></div>
               <div class="only-biggest-two">
                 <div class="two-top"><img src="http://img03.dengimg.com/misc/public/Client/WapImg/Fg/imgeuropean_2.png" alt=""></div>
                 <div class="two-left"><img src="http://img04.dengimg.com/misc/public/Client/WapImg/Fg/imgmeishi_3.png" alt=""></div>
                 <div class="two-right"><img src="http://img05.dengimg.com/misc/public/Client/WapImg/Fg/imgzhongshi_4.png" alt=""></div>
             </div>
        
       </div>
        <div class="oneone"><a href=""></a></div>
        <!-- 分类品牌 -->
          <div class="paizi">
            <div class="paizi-fenlei">
              <el-button-group>
  <el-button type="primary" >新入驻品牌</el-button>
  <el-button type="primary">下一页</el-button>
</el-button-group>
            </div>
            <div class="paizi-photo"></div>
          </div>
          <!-- 新品推荐 -->
           <div class="tuijian"></div>
      <!-- 三张图片框 -->
          <div class="three-box-k">
            <div class="three-box-one" v-for="(item) in cist" :key="item.name">
              <div class="box-one-pic"><img :src="item.img" alt=""></div>
              <div class="box-one-content">
                {{ item.name }}<br>{{ item.size }}<br>
                {{ item.guige }}<br>
                {{ item.money }}
              </div>
            </div>
            
          </div>





    </div>
</div>
</template>
<script>
import Vue from 'vue';
// 轮播图

import { Swipe, SwipeItem,CountDown,Search, } from 'vant';

Vue.use(CountDown);
Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.use(Search);
// export default {
//   data() {
//     return {
//       value:''
//     };
//   },
  
//   components: {},

//   methods: {
    
//   },
//    created(){

//    }
// };
export default{
  
  data(){
    return{
      onSearch: '',
      value: '',
      list:[{
        name:'【星荡】铁艺 亚克力 木...',
        size:'规格:镂空/500*80/灰',
        money:'特卖价￥143',
        img:'http://img03.dengimg.com//ManufactorImage/Shop/img_1361754.jpg?x-oss-process=image/resize,w_300,h_300/format,jpg'
      },
      {
        name:'【灯庭】铁艺 铝材 硅胶...',
        size:'规格:1100*700*50',
        money:'特卖价￥603',
        img:'http://img02.dengimg.com//ManufactorImage/Shop/img_1195762.jpg?x-oss-process=image/resize,w_300,h_300/format,jpg'
      },
      ],
      aist:[{
         name:'吊灯',
         img:'http://img02.dengimg.com/misc/public/Client/WapImg/Lb/imgdiaodeng_1.png'
      },{
         name:'壁灯',
         img:'http://img03.dengimg.com/misc/public/Client/WapImg/Lb/imgbideng_2.png'
      },{
         name:'吸顶灯',
         img:'http://img04.dengimg.com/misc/public/Client/WapImg/Lb/imgxiding_3.png'
      },{
         name:'户外灯',
         img:'http://img02.dengimg.com/misc/public/Client/WapImg/Lb/imgdiaodeng_1.png'
      },{
         name:'筒灯/射灯',
         img:'http://img05.dengimg.com/misc/public/Client/WapImg/Lb/imgtongdeng_4.png'
      }
      ],
        cist:[{
        name:'【萤火光】铁艺...',
        size:'型号8280三房',
        guige:'规格：8280三房...',
        money:'￥1980',
        img:'http://img02.dengimg.com//ManufactorImage/Shop/img_1304913.jpg%40300w_300h.jpg'
      },
      {
        name:'【名创】 铝材 ',
        size:'名创套餐1',
         guige:'大三室两',
        money:'￥2288',
        img:'http://img02.dengimg.com//ManufactorImage/Shop/img_1365141.jpg%40300w_300h.jpg'
      },
       {
        name:'【兴凯灯饰】木...',
        size:'规格:A9127套餐',
         guige:'套餐-A912.。.',
        money:'￥1056',
        img:'http://img03.dengimg.com//ManufactorImage/Shop/img_586840.jpg%40300w_300h.jpg'
      },
       {
        name:'【灯火阑珊】铝',
        size:'型号：98100-8+4',
         guige:'规格：98100-8+...',
        money:'￥1650',
        img:'http://img03.dengimg.com//ManufactorImage/Shop/img_1361754.jpg%40300w_300h.jpg'
      },
       {
        name:'【有态度照明】铁艺 铝材 硅胶...',
        size:'3600—120',
         guige:'尺寸：1200*130...',
        money:'￥165',
        img:'http://img06.dengimg.com//goodsWaterMake/img_manufactor_48403.png%40300w_300h.png'
      },
       {
        name:'【哥丹尼】铁艺...',
        size:'型号：MD6272-8...',
         guige:'头数8+4头',
        money:'￥1276',
        img:'http://img05.dengimg.com//ManufactorImage/Shop/img_1322969.jpg%40300w_300h.jpg'
      }
      
      ],
      time: 30 * 60 * 60 * 1000
    }
  },
    methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                let pathIndex = '/Section1';
              
               
                this.$router.push({path:pathIndex})
                console.log(999999999)
            },
            goToHome(){
                this.$router.push({path:'/Section1'})
                
                
            }
    }
}


</script>

<style lang="scss" scoped>
.home{
   width: 100%;
   height: 100%;
   position: relative;
}
.home-box{
   width: 100%;
  //  height: calc(100% - 60px);
   background: pink;
   position: absolute;
   top: 40px;
   bottom: 60px;
   overflow: scroll;
   
}
.van-grid-item__icon {
    font-size: 74px;
}
.one-photo{
  width: 100%;
  height: 75px;
  background: yellow;
  
}
.one-photo img{
  width: 100%;
  height: 100%;
  
  
}

// 宫格图

// ::v-deep 、>>> 、 /deep/ 这三个都可以用来加重父子元素权重，::v-deep专门用在vue中，优先使用
.van-grid-item::v-deep i{
  
  width: 44px;
  height: 44px;
  display: block;
}
.van-grid-item::v-deep i img{
  width: 100%;
  height: 100%;
}
.place{
  width: 100%;
  height: 55px;
  background: wheat;
  padding: 4px;
}
.place-photo{
  width: 68px;
  height: 100%;
  float: left;
  background: violet;
  margin-left: 7px;
}
.place-photo img{
  width: 100%;
  height: 100%;
  float: left;
  
}
.place-content{
  width: 282px;
  height: 100%;
  background: yellow;
  float: right;
  position: relative;
  margin-right: 11px;
}
.place-content-first{
  width: 277px;
  height: 50%;
  background: thistle;
}
.place-content-second{
  width: 277px;
  height: 50%;
  background: honeydew;
  line-height: 50px;
  font-size: small;
  
}
// 计时器
.time{
  width: 100%;
  height: 44px;
  
}
.red_zi{
  height:100%;
  width: 112px;
  line-height: 44px;
  margin-left: 10px;
  
  float: left;
}
.van-count-down{
  width: 148px;
  height: 100%;
  float: left;
  margin-top: 13px;
}
.time_all{
  width: 37px;
  float: right;
  font-size:10px;
  ;
  line-height: 44px;
  margin-right: 10px;
}
.three-box-king{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: yellow;
  height: 215px;
}
.three-box-one{
  display: flex;
  flex-direction: column;
  width: 119px;
}
.three-box-photo{
  height: 50%;
  background: coral;
}
.three-box-photo img{
  width: 100%;
  height: 100%;
}
.three-box-concent{
  height: 50%;
  background: cornflowerblue;
}
.three-box-concent p{
  display: block;
  margin-top: 0;
  
}
.hurrrysale{
  height: 44px;
  width: 100%;
  background: lightseagreen;
}
.two-box-king{
   height: 272px;
   background: gold;
   display: flex;
   justify-content: space-around;
}
.two-box-one{
 width: 179px;
 height: 100%;
 background: white;
}


.two-box-concent p{
  display: block;
  margin-top: 0;
  
}
.two-box-photo{
  height: 66%;
  background: red;
}
.two-box-photo img{
  width: 100%;
  height: 100%;
}
// 热分类
.hot-box{
  width: 100%;
  height: 134px;
  background: #58bc58;
  display: flex;
  justify-content: space-around;
}
.hot-box-one{
  width: 60px;
  height: 82px;
  background: yellow;
  display: flex;
  align-self: center;
  display: flex;
  flex-direction: column;
}
.hot-box-one-photo{
  height:72%;
  width: 100%;
  background: whitesmoke;
}
.hot-box-one-photo img{
  width:100%;
  height: 100%;
}
.hot-box-one-content{
    height: 50%;
    width: 100%;
    background: violet;
    font-size: 14px;
  }
  // 轮播图
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
// .van-swipe-item{
//   background: url(http://img06.dengimg.com/Gallery/AutoLink/img_212756.jpg);
// }
.van-swipe-item img{
    // width: 1600px;
    width: 100%;
    height: 150px;
    display: block;
}
// <!-- 纯图片盒子 -->
.only-photo{
  width: 100%;
  height: 278px;
  float: left;

}
.only-biggest{
  height: 100%;
  width: 50%;
  float: left;
}
.only-biggest img{
  width: 100%;
  height: 100%;
}
.only-biggest-two{
  width: 50%;
  height: 100%;
  float: right;

}
.two-top{
  width: 100%;
  height: 50%;
  float: left;
}
.two-top img{
  width: 100%;
  height: 100%;
}
.two-left{
  width: 50%;
  height: 50%;
  float: left;
}
.two-left img{
  width: 100%;
  height: 100%;
}
.two-right img{
  width: 100%;
  height: 100%;
}
.two-right{
  width: 50%;
  height: 50%;
  float: right;
}
.oneone{
  width: 100%;
  height:79px;
  float: left;
}
.oneone a{
  width: 100%;
  display: block;
  height: 100%;
  background: url(http://img02.dengimg.com/misc/public/Client/WapImg/Xgg/imgxiaoguang_1.png) no-repeat center;
  background-size: 100% 100%;
}
// .van-grid-item::v-deep .van-icon{
//   background: red;
// }
// 分类品跑
.paizi{
  height: 184px;
  width: 100%;
  background: pink;
  float: left;
}
.paizi-fenlei{
    height: 39px;
    width: 100%;
    background: burlywood;
}
.tuijian{
  width: 100%;
  height: 44px;
  float: left;
  background: powderblue;
}
.three-box-k{
  width: 100%;
  height: 400px;
  background: pink;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.three-box-one{
  width: 115px;
  height: 194px;
  background: palegreen;
}
.box-one-pic{
  width: 100%;
  height: 50%;
  background: palevioletred;
}
.box-one-pic img{
  width: 100%;
  height: 100%;
  
}
.box-one-content{
  width: 100%;
  height: 50%;
  background: lightgreen;
  font-size: 14px;
}

</style>
