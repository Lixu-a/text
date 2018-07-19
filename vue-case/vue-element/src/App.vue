<template>
  <div id="app">
    <!-- 头部导航 -->
        <headerNav></headerNav>
        <router-view></router-view>
  </div>
</template>

<script>
  import headerNav from './components/headernav'
   export default {
       name: 'app',
      //渲染
      components: {
        headerNav
      }
    }

</script>

<style>
    body{
      margin: 0;
      font-family: Arial,Helvetica,微软雅黑,;
    }
    #app {
      min-width: 1200px;
      margin: 0 auto;
      font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
    }
    .head,.foot{
    background-color: #FFFBFF;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    padding-left: 30px;
  }
  .item{
    width: 100%;
    border: 1px solid #EFEFEF;
    background-color: #fff;
    text-align: center;
  }
</style>
