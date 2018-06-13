<template>
	<div id="pageone">
		<h2>动态挂载组件</h2>
	   <button @click="changeView('A')">切换到A</button>
	   <button @click="changeView('B')">切换到B</button>
	   <button @click="changeView('C')">切换到C</button>
	   <div class="content">
	   		<component :is="currentView"></component>
	   	</div>
	</div>
</template>

<script>
	export default({
	 name: '#pageone',
	 data(){
	  return {
	  	currentView: 'comA'
	  }
	 },
	 methods: {
	  changeView: function(data){
	   this.currentView = 'com'+ data　　//动态地改变currentView的值就可以动态挂载组件了。
	  }
	 },
	 components: {
	  comA: {
	   template: '<p>你已切换到组件AAAAAAAAAA</p>'
	  },
	  comB: {
	   template: '<p>你已切换到组件BBBBBBBBBBBBB</p>'
	  },
	  comC: {
	   template: '<p>你已切换到组件CCCCCCCCCCCC</p>'
	  }
	 }

	});
</script>

<style>
	#pageone{
		max-width: 1200px;
		margin: 0 auto;
		text-align: center;
	}
	#pageone>h2{
		color: deepskyblue;
		margin: 20px 0;
	}
	#pageone>button{
		width: 80px;
		height: 30px;
		margin: 0 10px;
		border: none;
		outline: none;
		background-color: deepskyblue;
		font-size: 16px;
		line-height: 30px;
		color: #333;
		font-weight: bold;
	}
	#pageone>.content{
		margin: 20px;
	}
</style>
