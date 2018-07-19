<template>
	<el-carousel :interval="4000" type="card" height="600px" trigger="click" 
     :autoplay="true" indicator-position="none">
      <el-carousel-item v-for="(item,index) in imgurl" :key="index">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
</template>


<script>
	export default{
      data (){
        return {
          active:true,
          imgurl:[
            '../static/1.jpg',
            '../static/2.jpg',
            '../static/1.jpg'
          ]
        }
      }
    }
</script>

<style scoped>
	 /*轮播图样式*/
    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
</style>