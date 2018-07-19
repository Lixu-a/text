// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/store'

Vue.prototype.$http = axios
Vue.use(VueAxios,axios)
Vue.use(ElementUI,{ size: 'small', zIndex: 3000 })
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el:'#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

//注册全局过滤器
Vue.filter('formatmoney', function(value){
  return '￥'+value;
})
