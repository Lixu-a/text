<template>
	<div id="app">
	<!-- 手机详细信息 -->
		<div class="details">
			<div class="head">
				热门商品
			</div>

			<div class="item" >
				<div class="images">
					<img v-for = "(srcitem,index) in item.imgsrc" :key="index" :src="srcitem.src" alt="" v-if="color == index" >
				</div>
				
				<div class="text">
					<h2>{{ item.name }}</h2>
					<p>{{ item.nametitle }}</p>
					<div class="line"></div>
					<div>促销活动：{{ item.activity }}</div>
					<div class="line"></div>
					<div>颜色选择：
							<el-radio v-for="(coloritem,index) in item.colors" :key="index" v-model="color" :label="index" >{{ coloritem.color}} </el-radio>
					</div>
					<div class="line"></div>
					<div>容量选择：
						<el-radio v-for="(capacityitem,index) in item.capacity" :key="index" v-model="capacity" :label="capacityitem" border>{{ capacityitem}}</el-radio>
					</div>
					<div class="line"></div>
					<div>网络选择：
						<el-radio v-for="(networkitem,index) in item.network" :key="index" v-model="network" :label="networkitem" border>{{ networkitem}}</el-radio>
					</div>
				</div>
			</div>

			<div class="foot">
				<div>您选择了:{{ item.name }}</div>
				<button class="buy" @click="buy(item)"><router-link v-bind = "{to:'/address/'+item.id}" >现在购买</router-link></button>
				<button class="shopping" @click="shopping(item)">加入购物车</button>
			</div>
		</div>
	<!-- 手机评价页面 -->
		<div class="details" style="margin-bottom:160px;">
			<div class="head">
				热门评价
			</div>

			<textarea v-model = "text" @keyup.enter = "showlist" placeholder="请输入您的评价,回车提交您的评价">
				
			</textarea>

			<div class="evaluate" v-for="(item,index) in list" :key="index">
				<div>用户***<span style="float:right;margin-right:50px;" >{{ time }}</span></div>
				<div>评价内容：{{ item }}</div>
			</div>
		</div>

	</div>
</template>

<script>
import goodsdata from '../lib/newsgoods.js'
	export default{
		name:'app',
		data(){
			return{
				text:'',//评价内容
				list:[],//评价数组
				goodsdata,//商品数据
				color:0,//颜色选择
				capacity:'',//容量选择
				network:''//网络选择
			}
		},
		computed:{
			// 研究下为什么这里取不到vuex里面的goods
			// goodsdata(){
	  //     		return this.$store.state.goods;
	  //     	},
			id(){
				return this.$route.params.id;
			},
			//因为id从1开始，数组从0开始的
			item(){
				return goodsdata[this.id-1];
			},
			//返回时间
			time(){
				return new Date().toLocaleString()+' 星期'+'日一二三四五六'.charAt(new Date().getDay());
			},
			//取得购物车中的数组
			tableData(){
		        return this.$store.state.count;
		     }
		},
		methods:{
			// goodsdata(){
	  //     		 this.goodsdata = this.$store.state.goods;
	  //     	},
			//容量，网络
			colors(){
				this.capacity = this.item.capacity.one;
				this.network = this.item.network.one;
			},
			//评论数组
			showlist(){
				this.list.unshift(this.text);
				this.text = '';
			},
			shopping(item){
				// 获取加入购物车在数组goodsdata中的索引
	      		var value = this.goodsdata.findIndex(function(item1){
	      			return item1 == item;
	      		});
	      		// 把获取到的索引从数组里面获取对应的值push到vuex状态数组count里面
	      		// 获取要加入购物车的数据并赋值给cargoods
	      		var a = this.goodsdata[value];
	      		var cargoods ={"id":a.id,
					      	"name":a.name,
					      	"imgsrc":a.imgsrc[this.color].src,
							"price":a.price,
							"number":a.number,
							"totleprice":a.totleprice,
							"activity":a.activity,
							"limit":a.limit,
							"colors":a.colors[this.color].color,
							"capacity":this.capacity,
							"network":this.network
							};
					// 加入购物车前判断商品是否超过限制数量或者说是库存
					var b = this.tableData.findIndex(function(item){
						return item.id == cargoods.id;
					});
					if (b>-1&&this.tableData[b].number > a.limit-1) {
						this.$message({
				          message: '此商品购买超过上限',
				          type: 'warning'
				        });
				        return;
					}
					//加入购物车，把数据赋值给vuex的 count
	  				this.$store.commit('increment',cargoods);
	      			this.$message({
			          message: '恭喜,加入购物车成功',
			          type: 'success'
			        });
			},
			buy(item){
				// 获取加入购物车在数组goodsdata中的索引
	      		var value = this.goodsdata.findIndex(function(item1){
	      			return item1 == item;
	      		});
	      		// 把获取到的索引从数组里面获取对应的值push到vuex状态数组count里面
	      		// 获取要加入购物车的数据并赋值给vuex的cargoods
	      		var a = this.goodsdata[value];
	      		var cargoods = [{"id":a.id,
					      	"name":a.name,
					      	"imgsrc":a.imgsrc[this.color].src,
							"price":a.price,
							"number":a.number,
							"totleprice":a.totleprice,
							"activity":a.activity,
							"limit":a.limit,
							"colors":a.colors[this.color].color,
							"capacity":this.capacity,
							"network":this.network
							}];

					this.$store.commit('delbuy');//先清空buygoods里面的数据
					//再把数据赋值给buygoods
	  				this.$store.commit('buy',cargoods);
			}
		},
		mounted(){
			//设置默认选中的颜色
			this.colors();
			// this.goodsdata();
		}
	}
</script>

<style scoped>
	.details{
		max-width: 1200px;
		margin: 20px auto;
		border-radius: 10px;
		border: 1px solid #DEDFDE;
		overflow: hidden;
	}
	.head,.foot{
		background-color: #FFFBFF;
		height: 60px;
		width: 100%;
		line-height: 60px;
		font-size: 18px;
		padding-left: 30px;
	}
	.item{
		width: 100%;
		border: 1px solid #EFEFEF;
		height: 700px;
		background-color: #fff;
		text-align: center;
	}
	.item .images{
		float: left;
		width: 460px;
		height: 500px;
		padding: 50px;
	}
	.item .images img{
		width: 100%;
		height: 100%;
	}
	.item .text{
		float: left;
		width: 560px;
		height: 700px;
		text-align: left;
	}
	.item .text h2{
		margin-top: 60px;
		font-size: 26px;
	}
	.item .text p{
		font-size: 15px;
		margin-top: 30px;
		color: rgba(0,0,0,0.5);
		font-weight: bold;
	}
	.item .text .line{
		border: 1px solid rgba(239, 235, 239,0.5);
		margin: 36px 0 20px;
	}
	.details .foot div{
		float: left;
	}
	.details .foot>button{
		float: right;
		margin-top: 15px;
		padding: 10px 30px;
		outline: none;
		border: none;
		border-radius: 5px;
		border: 1px solid rgba(0,0,0,0.2);
		font-size: 13px;
	}
	.details .foot>button>a{
		text-decoration: none;
		color: #fff;
		padding: 0 8px;
	}
	.details .foot>.buy{
		background-color: #5A8ADE;
		margin-right: 100px;
	}
	.details .foot>.shopping{
		background-color: #FFFBFF;
		margin-right: 30px;
	}
	/*评价*/
	.evaluate{
		width: 100%;
		padding-bottom: 36px; 
		border: 1px solid rgba(239, 235, 239,0.5);
	}
	.evaluate div{
		font-size: 15px;
		margin-top: 20px;
		color: rgba(0,0,0,0.5);
		font-weight: bold;
	}
	textarea{
		width: 99.5%;
		height: 100px;
		font-size: 20px;
		border: none;
		outline: none;
	}
</style>