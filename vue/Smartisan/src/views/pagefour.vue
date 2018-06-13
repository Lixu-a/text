<template>
	<div id="pagetwo">
		<h2>vuex状态管理-另一页</h2>
		<div>
               {{ count }}
               <p>
                <button @click="increment">+</button>
                <button @click="decrement">-</button>
              </p>
               
       </div>
	</div>
</template>

<script>
</script>

<style>
	#pagetwo{
		max-width: 1200px;
		margin: 0 auto;
		text-align: center;
	}
	#pagetwo>h2{
		color: deepskyblue;
		padding: 20px 0;
	}
</style>
<script type="text/javascript">
    export default{
        name: 'pagetwo',
        data(){
            return{
            	
            }
        },
        methods:{
            increment(){
              this.$store.commit('increment')
            },
            decrement(){
              this.$store.commit('decrement')
            }
        },
        computed:{
            count(){
                return this.$store.state.count
            }
        }


    }

</script>