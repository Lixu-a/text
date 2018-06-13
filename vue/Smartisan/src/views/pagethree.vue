<template>
	<div id="pagethree">
		<h2>axios请求数据</h2>
		<!-- mounted下的this.axios.post成功请求数据了 -->
		<div class="news" v-for = "(item,index) in content" :key="item.id">
			<div class="title">{{ item.title }}</div>
			<div class="img" v-if="item.image">{{ item.image}}</div>
			<div class="content">{{ item.content }}</div>
			<a class="link" :href="item.link">查看更多+</a>
			<div class="pubdate">发布时间：{{ item.pubdate }}</div>
		</div>
		<!-- $http请求失败了 -->
		<div class="news" v-for = "(item,index) in imgList" :key="item.id" v-if="show">
			<div class="title">{{ item.title }}</div>
			<div class="img" v-if="item.image">{{ item.image}}</div>
			<div class="content">{{ item.content }}</div>
			<a class="link" :href="item.link" >查看更多+</a>
			<div class="pubdate" >发布时间：{{ item.pubdate }}</div>
		</div>
		<div @click = "getImg()" v-if="!show">
			<button class="btn" >点击按钮展开更多数据</button>
			<span>数据等待展开</span>
		</div>
		<div @click = "getImg()" v-if="show">
			<button class="btn" >点击按钮关闭更多数据</button>
			<span>数据等待关闭</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'pagethree',
		data(){
			return {
				content:'this.axios.post请求成功',
				imgList:'$http请求失败',
                getImgUrl: 'http://api.komavideo.com/news/list',    //存数据接口 
                show:false
			}
		},
		// created: function(){
  //           this.getImg()              //定义方法,函数会成为自执行函数
  //       },
		methods: {
                getImg:function(){
                    var that = this; 
                    this.show = !this.show;  
                    that.$http({           //调用接口
                        method:'post',
                        url:that.getImgUrl  //this指data
                    }).then(function(response){  //接口返回数据
                        that.imgList=response.data;                        
                    },function(error){
                    	that.imgList = '请求失败';
                    })
                }
            },
		mounted() {
			// 这里的axios也可以改成$http
			this.axios.post("http://api.komavideo.com/news/list").then(response => {
				this.content = response.data;
			});//这个方法请求数据成功了
		}
	}
</script>
	
<style >
	#pagethree{
		max-width: 1200px;
		margin: 0 auto;
		font-family: "微软雅黑";
	}
	#pagethree>h2{
		color: deepskyblue;
		margin: 20px 0;
	}
	.news{
		margin-top: 30px;
		padding-bottom: 20px;
		border-bottom: 1px solid rgba(0,0,0,0.5);
	}
	.news .title{
		font-size: 20px;
		line-height: 30px;
	}
	.news .img{
		
	}
	.news .content{
		font-size: 16px;
		line-height: 30px;
		text-indent: 30px;
		font-family: "方正";
	}
	.news .link{
		text-decoration: none;
		font-size: 17px;
		height: 45px;
		text-align: right;
		display: block;
	}
	.news .pubdate{
		text-align: right;
	}
	.btn{
		width: 200px;
		height: 39px;
		border:none;
		outline: none;
		background-color: deepskyblue;
		font-size: 16px;
		color: #fff;
		font-family: "微软雅黑";
	}
</style>