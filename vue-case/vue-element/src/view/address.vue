<template>
	<div id="app">
		<div class="head">
			配送地址
		</div>
		<!-- 卡片地址 -->
		<div class="item">
			<div class="cart" v-for = "(item,index) in count" :class="{active:item.default}" @mouseover="currentindex = index"
			@mouseout = "currentindex = -1">
				<div style="margin-top:30px;">{{item.name}}</div>
				<div>{{item.address}}</div>
				<div>{{item.number}}</div>
				<div class="delete" @click = "handledelete(item)"><img src="../../static/del.png" alt=""></div>
				<div style="color:orange;" v-if="item.default">默认地址</div>
				<div v-if="currentindex == index && !item.default" @click="handledefault(item,index)" style="color:orange;">Setting the default address</div>
			</div>

			<div class="cart" @click="dialogVisible = true">
				<div style="margin-top:30px;font-size:80px;">+</div>
				<div>add address</div>
			</div>

		</div>
		<!-- 弹窗添加地址 -->
		<el-dialog
		  title="请输入收货信息"
		  :visible.sync="dialogVisible"
		  width="20%"
		  :before-close="handleClose">
		  <div><el-input v-model="name" placeholder="请输入姓名"></el-input></div>
		  <div style="margin-top:10px;"><el-input v-model="address" placeholder="请输入地址"></el-input></div>
		  <div style="margin-top:10px;"><el-input v-model="number" placeholder="请输入电话号码"></el-input></div>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="handleaddress" >确 定</el-button>
		  </span>
		</el-dialog>

		<!-- 查看更多地址 -->
		<div class="more" @click = "arraylength = location.length">Look at more addresses</div>

		<!-- 选择购买的商品信息 -->
		<!-- <div style="text-align:center;margin:20px;" v-for="(item,index) in buygoods" :key="index">{{ item.name}}------数量：{{item.number}}------颜色：{{item.colors}}------容量：{{item.capacity}}------网络类型：{{item.network}}------赠品：{{item.activity}}
		</div> -->
		<h3 style="text-align:center;color:rgba(0,0,0,0.5);">请确认商品信息</h3>
		<el-table
      :data="buygoods"
      border
      style="width: 93%;margin:10px auto; font-size:20px;">
      <el-table-column
        prop="name"
        label="商品名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="number"
        label="数量"
        width="180">
      </el-table-column>
      <el-table-column
        prop="colors"
        label="颜色">
      </el-table-column>
      <el-table-column
        prop="capacity"
        label="容量">
      </el-table-column>
      <el-table-column
        prop="network"
        label="网络类型">
      </el-table-column>
      <el-table-column
        prop="activity"
        label="赠品">
      </el-table-column>
    </el-table>

		<div class="foot">
			<div>收货信息: <span style="color:#F75121;font-size:22px;font-weight: bold;">{{ selectaddress.address}} {{ selectaddress.name }} {{ selectaddress.number }} </span> </div>

			<button style="float:right;">结算</button>

			<div style="float:right;">总额：{{ totle }}</div>
		</div>
	</div>
</template>

<script>
import location from '../lib/address.js'
	export default{
		name:'app',
		data(){
			return{
				show:false,
				currentindex:-1,
				location,
				arraylength:3,
				dialogVisible:false,
				name:'',
				address:'',
				number:''
			}
		},
		computed:{
			id(){
				return this.$route.params.id;
			},
			count(){
				return this.location.slice(0,this.arraylength);
			},
			selectaddress(){
				return this.location[0];
			},
			buygoods(){
				return this.$store.state.buygoods;
			},
			totle(){
				//计算总金额
				var totle = 0;
				this.buygoods.forEach(function(item,index){
					if(typeof item.totleprice == 'string'){
			          item.totleprice = parseFloat(item.totleprice);
			        }
			          totle += item.totleprice;
				});
				return totle;
			}
		},
		methods:{
			handledefault(item){
				// 设置默认地址
				let value = this.location.findIndex(function(item1){
					return item1 == item;
				});
				this.location.forEach(function(item){
					item.default = false;
				})
				this.location[value].default=true;
				// 选择的地址
				this.selectaddress=this.location[value];
				// 把点击的默认数组放到数组首位
				this.location.splice(value,1);
				this.location.unshift(item);
				
			},
			// 删除地址
			handledelete(item){
				let value = this.location.findIndex(function(item1){
					return item1 == item;
				});
				this.location.splice(value,1);
			},
			handleaddress(){
				var addaddress = {"name":this.name,"address":this.address,"number":this.number,"default":false};
			    this.location.unshift(addaddress);
				this.name = '';this.address = '';this.number = '';
				this.$message({
		          message: '添加成功',
		          type: 'success'
		        });
		        this.dialogVisible = false;
			},
			// 添加地址
			 handleClose(done) {
			this.$confirm('确认关闭？')
			  .then(()=> {
			    this.$message({
		          message: '已取消添加',
		          type: 'success'
		        });
		        done();
			  })
			  .catch(() => {
			  	this.$message({
		          message: '请重新添加',
		          type: 'warning'
		        });
			  });
			}
		}
	}
</script>

<style scoped>
	#app{
		width: 1200px;
		margin-top: 50px;
		border-radius: 10px;
		border: 1px solid #DEDFDE;
		overflow: hidden;
	}
	.item{
		width: 100%;
		height: auto;
		overflow: hidden;
	}
	.cart{
		float: left;
		margin: 20px;
		border: 2px solid rgba(100,100,0,0.2);
		width: 250px;
		height: 220px;
		background-color: #fff;
		text-align: center;
		overflow: hidden;
		position: relative;
	}
	.cart>div{
		font-size: 18px;
		margin: 12px;
		color: rgba(0,0,0,0.7);
	}
	.active{
		border: 2px solid rgba(200,100,0,0.6);
	}
	.item .delete{
		position: absolute;
		top: 150px;
		right: 10px;
		display: none;
	}
	.more{
		padding:20px;
		text-align: center;
		color: rgba(0,0,0,0.6);
	}
	.cart:hover{
		border: 2px solid rgba(200,100,0,0.6);
	}
	.cart:hover .delete{
		display: block;
	}
	.foot{
		
	}
	.foot>*{
		display: inline-block;
	}
	.foot button{
		margin: 15px 50px;
		padding: 6px 25px;
		color: #fff;
		font-size: 16px;
		outline: none;
		border: none;
		border-radius: 5px;
		border: 1px solid rgba(0,0,0,0.2);
		background-color: #5A8ADE;
	}
</style>