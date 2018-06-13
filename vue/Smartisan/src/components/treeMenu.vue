<template>
  <li>
    <span @click="toggle">
      <i v-if="isFolder" class="icon"  :class="[open ? 'folder-open': 'folder']"></i>
      <!-- 如果没有分支了就隐藏上面的图标，展示下面的图标 -->
      <i v-if="!isFolder" class="icon file-text"></i>
      {{ model.menuName }} 
      <!-- 这句只为了修复某个未知bug，未知因为没理解到真谛 -->
      <span style="display:none;">{{Folder}} </span>
    </span>
    <!-- 理解：v-show优先级大于v-if -->
    <ul v-show="open" v-if="isFolder">
      <tree-menu v-for="item in model.children" :model="item"></tree-menu>
    </ul>
  </li>
</template>
 
<script>
export default {
  name: 'treeMenu',
  props: ['model'],
  data() {
    return {
      open: false,
      isFolder: true
    }
  },
  // 计算是否还有children
  computed: {
    Folder: function() {
      return this.isFolder = this.model.children && this.model.children.length
    }
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.open = !this.open
      }
    }
  }
}
</script>
 
<style>
ul {
  list-style: none;
   margin-left: 50px;

}
i.icon {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  vertical-align: middle;
}
.icon.folder {
  background-image: url(../assets/img/folder.png);
  background-size: 100% 100%;
}
.icon.folder-open {
  background-image: url(../../static/folder-open.png);
  background-size: 100% 100%;
}
.icon.file-text {
 /* background-image: url(../../static/folder-open.png);
  background-size: 100% 100%;*/
  border: 1px solid red;
  background-color: orange;
}
.tree-menu li {
  line-height: 1.6;

}
</style>