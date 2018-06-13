// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
import Vue from 'vue'

 //开启错误提醒 
Vue.config.debug = true

import main from './components/main'
new Vue({
  el: '#app',
  render: h => h(main)

	// render: function(createElement) {
	//     return createElement(main);
	// }

})
