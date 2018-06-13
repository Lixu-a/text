<template>
  <div id="app">
    <headerNav></headerNav>
    <slide-show :slides="slides"></slide-show>
    <router-view/></route-view>
    <footerNav></footerNav>
  </div>
</template>

<script>
	//引入组件
import headerNav from './components/header-nav'
  import footerNav from './components/footer-nav'
  import slideShow from './components/slideShow'
export default {
  name: 'App',
  //渲染
  components: {
    headerNav,
    footerNav,
    slideShow
  },
  data() {
    return {
      slides: [  
        {
          src: require('./assets/lx.jpg'),
          title: 'author:LX',
        },
        {
          src: require('./assets/1.jpg'),
          title: 'xxx1',
        },
        {
          src: require('./assets/2.jpg'),
          title: 'xxx2',
        },
        {
          src: require('./assets/3.jpg'),
          title: 'xxx3',
        },
        {
          src: require('./assets/4.jpg'),
          title: 'xxx4',
        },
        {
          src: require('./assets/5.jpg'),
          title: 'xxx5',
        }
      ]
    }
  }
}
</script>

<style>
  #app {
    padding-bottom: 80px;
    background-color: #EFEFEF;
  }
</style>
