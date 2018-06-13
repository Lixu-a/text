import Vue from 'vue'
import Router from 'vue-router'
//引入样式，这里是全部一下子引入所有的css样式
import '../assets/css/reset.css'
import '../assets/css/common.css'
import '../assets/css/index.css'

Vue.use(Router)

import Home from '../views/home'
import Myphone from '../views/myphone'
import Pageone from '../views/pageone'
import Shop from '../views/shop'
import Pagetwo from '../views/pagetwo'
import Pagethree from '../views/pagethree'
import Pagefour from '../views/pagefour'
import Main from '../views/main'



export default new Router({
  routes: [
 		{path:'/',component:Home},
 		{path:'/Home',component:Home},
 		{path:'/Myphone',component:Myphone},
 		{path:'/Shop',component:Shop},
 		{path:'/Pageone',component:Pageone},
 		{path:'/Pagetwo',component:Pagetwo},
 		{path:'/Pagethree',component:Pagethree},
 		{path:'/Pagefour',component:Pagefour},
 		{path:'/Main',component:Main}
  ]
})
