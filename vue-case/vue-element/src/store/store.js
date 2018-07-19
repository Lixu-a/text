import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		count:[],//push到购物车里面的商品信息
		goods:[],//获取的商品信息
		buygoods:[]//提交到地址栏里面要购买的商品信息
	},
	mutations:{
		increment:(state,n) => {
			// 判断push进来的数组在购物车里面是否存在，存在就让数组里面的number+1，并重新开始计算totleprice
				var itemindex = state.count.findIndex(function(item){
      				return item.id == n.id;
	      		})
	      		if(itemindex<0){
	      			state.count.push(n);
	      			return;
	      		}
	      		var number = state.count[itemindex].number;
	      		number = state.count[itemindex].number+=1;
	      		state.count[itemindex].totleprice = (state.count[itemindex].price*state.count[itemindex].number).toFixed(2);
		},
		// 把获取到的json商品数据存到goods里面
		add:(state,n) =>{
			state.goods = Object.assign(n);
			// state.goods=[].concat(n);
		},
		buy:(state,n) =>{
			// state.buygoods.splice(0);
			state.buygoods=[].concat(n);
		},
		delbuy:(state) =>{
			state.buygoods.splice(0);
		}
		// store的其他几种方法继续了解，把加入购物车提示放到这边并加以判断
	},
	actions:{

	}
})
