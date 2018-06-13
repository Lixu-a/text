<template>
	<div class="shop">
		<div class="head">
			热门商品
		</div>

		<div class="item" v-for = "(item,index) in goodsdata">
			<img :src="item.imgsrc" :alt="item.nametitle" />
			<div class="name">{{item.name}}</div>
			<div class="title">{{item.nametitle}}</div>
			<div class="price">{{item.price}}</div>
		</div>
	</div>
</template>

<script>
	//接收数据
	import goodsdata from '../lib/newsgood.js'
	import slide from '../components/slide'
	export default {
		data(){
			return{
				goodsdata
			}
		}
	}
</script>

<style>
	*{
		font-family: 微软雅黑;
	}
	.shop{
		max-width: 1200px;
		margin: 20px auto;
		border-radius: 10px;
		border: 1px solid #DEDFDE;
		overflow: hidden;
	}
	.head{
		background-color: #FFFBFF;
		height: 60px;
		line-height: 60px;
		font-size: 18px;
		padding-left: 30px;
	}
	.item{
		float: left;
		width: 200px;
		border: 1px solid #EFEFEF;
		width: 298px;
		height: 430px;
		background-color: #fff;
		text-align: center;
	}
	.item>img{
		margin-top: 50px;
		width: 200px;
		height: 210px;
		border: none;
		outline: none;
	}
	.item>.name{
		font-size: 15px;
		font-weight: bold;
		margin-top: 20px;
	}
	.item>.title{
		color: #9C9A9C;
		margin-top: 10px;
	}
	.item>.price{
		margin-top: 10px;
		color: #D64D42;
	}
</style>
