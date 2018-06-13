//第一步，引入vue和vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//第二步，创建一个store
export default new Vuex.Store({
	state:{
		count:0
	},
	actions:{

	},
	mutations:{
		increment:state =>state.count ++,
		decrement:state =>state.count --
	},
	getters:{
		
	}
})

//第三步,将store暴露
// export defalt store

