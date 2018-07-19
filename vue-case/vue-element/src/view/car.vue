<template>
<div>
  <el-table
    :data="tableData"
    style="width: 100%"
    border
    @selection-change="selected">
    <el-table-column
      type="selection"
      width="50"
      >
    </el-table-column>

    <el-table-column
      label="商品名称"
      width="680">
       <template slot-scope="scope">
          <div style="margin-left: 50px">
            <img :src="scope.row.imgsrc" style="height: 50px;width: 50px">
            <span style="font-size: 18px;">{{ scope.row.name  }} {{ scope.row.colors  }} {{ scope.row.network}}+{{ scope.row.capacity}}</span>
          </div>
        </template>
    </el-table-column>

    <el-table-column
      label="单价"
      width="80">
      <template slot-scope="scope">
          <span size="medium">{{ scope.row.price }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="数量"
      width="180">
      <template slot-scope="scope">
          <el-input
              v-model="scope.row.number" @change="handleInput(scope.row)">
              <el-button slot="prepend" @click="del(scope.row)"><i class="el-icon-minus"></i></el-button>
              <el-button slot="append" @click="add(scope.row)"><i class="el-icon-plus"></i></el-button>
            </el-input>
      </template>
    </el-table-column>

    <el-table-column
      label="金额（￥）"
      width="100">
      <template slot-scope="scope">
          <span size="medium">{{ scope.row.totleprice}}</span>
      </template>
    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- <div>
    <span>总计</span>
    <span>去结算</span>
  </div> -->
  <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#fff"
        text-color="#000"
        router>
    <el-menu-item>总计 <span>￥{{ totle }}</span> </el-menu-item>
    <el-menu-item index="/address/1" @click="buy">去结算</el-menu-item>
  </el-menu>
  {{buygood}}
</div>
</template>

<script>
  export default {
    data() {
      return {
        totle:0,
        multipleSelection:[],
        buygood:[]//打算给buygoods,有误
      }
    },
    methods: {
      handleDelete(index, row) {
         this.$confirm('确定删除该商品吗？', '提示', {
          confirmButtonText:'确定',
          concelButtonText:'取消',
          type:'warning'
         }).then(() => {
           // 删除某件商品
           this.tableData.splice(index,1);
           this.$message({
            type:'success',
            message:'删除成功'
           });
         }).catch(() => {
          this.$message({
            type:'info',
            message:'已取消删除'
          });
         });  
      },
      // 增加数量
      add(addgood){
        if(typeof addgood.number == 'string'){
          addgood.number = parseInt(addgood.number);
        }
        //判断商品购买超过上限的时候就不能继续加了
        if(addgood.number>addgood.limit-1){
          this.$message({
            message:"此商品购买已达上限",
            type:"warning"
          })
          return;
        }
        // 商品加1
        addgood.number+=1;
        // 改变数量引起金额totleprice变化，并保留两位小数
        addgood.totleprice = (addgood.price*addgood.number).toFixed(2);
        //改变数量之后的总金额的变化
        this.selected(this.multipleSelection);
        },
      //减少数量
      del(delgood){
        if(typeof delgood.number == 'string'){
          delgood.number = parseInt(delgood.number);
        }
        if(delgood.number>1){
          delgood.number-=1;
        }
        // 改变数量引起金额totleprice变化，并保留两位小数
        delgood.totleprice = (delgood.price*delgood.number).toFixed(2);
        //改变数量之后的总金额的变化
        this.selected(this.multipleSelection);
      },
      handleInput(value){
        // 改变输入框也要重新计算总价
        if (value.number == "" || null == value.number ) {
          value.number = 1;
        }
        value.totleprice=(value.number*value.price).toFixed(2);
        //改变数量之后的总金额的变化
        this.selected(this.multipleSelection);
      },
      selected(selection){
        this.multipleSelection = selection;
        var that = this;
        this.totle = 0;
        selection.forEach(function(item,index){
          if(typeof item.totleprice == 'string'){
          item.totleprice = parseFloat(item.totleprice);
        }
          that.totle += item.totleprice;
        });
        //绑定复选框数组到buygood里面
        // this.buygood=[].concat(selection);
        this.buygood=Object.assign(selection);
      },
      // 把选中的商品放入vuex中buygoods
      buy(){
        //购物车中选中的商品加入到购买页面
         this.$store.commit('buy',this.buygood);
      }
    },
    computed:{
      tableData(){
        return this.$store.state.count;
      }
    },
    mounted(){
      
    }
  }
</script>

<style scoped>
  .el-menu--horizontal{
    padding-left: 300px;
  }
  .el-menu--horizontal>.el-menu-item {
    width: 200px;
    text-align: center;
  }
  .el-menu--horizontal>.el-menu-item.is-active {
    border: none;
  }
</style>