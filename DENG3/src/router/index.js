import Vue from 'vue'
import VueRouter from 'vue-router'
// 子组件
import Home from '../views/Home/index.vue'
import Mine from '../views/Mine/index.vue'
import Fenlei from '../views/Fenlei/index.vue'
import Car from '../views/Car/index.vue'
import Section1 from '../views/Home/Section1.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '/Fenlei',
    name: 'Fenlei',
    component: Fenlei
  },
  
   
  {
    path: '/Car',
    name: 'Car',
    component: Car
  }
   ,
  {
    path: '/Section1',
    name: '/Section1',
    component: Section1
  }
  // {
 
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
