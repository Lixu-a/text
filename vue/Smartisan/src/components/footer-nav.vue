<template>
  <div id="footer">
    <router-link to='/Home'>Home</router-link>
    <router-link to='/Myphone'>Myphone</router-link>
    <router-link to='/Shop'>Shop</router-link>
    <router-link to='/Pageone'>Pageone</router-link>
    <router-link to='/Pagetwo'>Pagetwo</router-link>
    <router-link to='/Pagethree'>Pagethree</router-link>
    <router-link to='/Pagefour'>Pagefour</router-link>
    <router-link to='/Main'>Main</router-link>
  </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #footer{
    width: 100%;
    margin: 0 auto;
    background-color: sienna;
    text-align: center;
    height: 60px;
    position: fixed;
    bottom: 0;
  }
  #footer a{
    color: #000;
    font-size: 20px;
    text-decoration: none;
    display: inline-block;
    height: 60px;
    padding: 0 20px;
    line-height: 60px;
  }
  #footer a:hover{
    background-color: orange;

  }
</style>
