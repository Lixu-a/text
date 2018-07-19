<template>
	<div id="app">
		<broadcast></broadcast>

		<!-- 热门商品 -->
		<div class="shop">
			<div class="head">
				热门商品
			</div>

			<div class="item" v-for = "(item,index) in goodsdata" :key="index">
				<img v-for="(img,index1) in item.imgsrc" :key="index1" :src="img.src" v-if="circle === index1" :alt="item.nametitle" />
				<div>
					<input type="radio" v-model="circle" v-for="(img,index2) in item.imgsrc" :key="index2" :name="item.id" :value="index2">
				</div>
				<div class="name">{{item.name}}</div>
				<div class="title">{{item.nametitle}}</div>
				<div class="price">{{item.price | formatmoney}}</div>
				<button class="detail"><router-link  v-bind = "{to:'/viewdetails/'+item.id}" >查看详情</router-link></button>
			</div>
		</div>
	</div>
</template>

<script>
  import broadcast from '../components/broadcast'
   export default {
       name: 'app',
      //渲染
      components: {
        broadcast
      },
      data(){
        return{
          active:false,
          show:true,
          circle:0
        }
      },
      methods:{
      	// 获取商品数据并放入vuex的goods
      	carview(){
      		this.$http.get("../../static/newsgoods.json").then(res =>{
	      		 this.$store.commit('add',res.data.result.list);
	      	});
      	}
      },
      created(){
      	this.carview();
      },
      computed:{
      	goodsdata(){
      		return this.$store.state.goods;
      	}
      }
  }
</script>

<style scoped>
	   
    /* 主内容区 */
      main{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        min-height: 800px;
        border: solid 40px #E9ECF1;
        background-color: #FCFCFC;
      }
      main .main-left{
        text-align: center;
        width: 200px;
        float: left;
      }
      main .main-right{
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        background-color: #fff;
        padding: 50px 70px;
      }
      main .el-menu{
        background-color: transparent!important;
      }
      /*热门商品*/
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
	.item>button{
		margin-top: 15px;
		padding: 3px 15px;
		outline: none;
		border: none;
		border-radius: 5px;
		border: 1px solid rgba(0,0,0,0.2);
		display: none;
	}
	.item>button>a{
		text-decoration: none;
		color: #000;
		padding: 0 8px;
	}
	.item>.detail{
		background-color: #fff;
	}
	.item:hover .price{
		display: none;
	}
	.item:hover button{
		display: inline-block;
	}
</style>