import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import shop from '../view/shop'
import car from '../view/car'
import viewdetails from '../view/viewdetails'
import address from '../view/address'

export default new Router({
  routes: [
    {path: '/',component: shop},
    {path: '/shop',component: shop},
    {path: '/car',component: car},
    {path: '/viewdetails/:id',component: viewdetails},
    {path: '/address/:id',component: address}
  ]
})
