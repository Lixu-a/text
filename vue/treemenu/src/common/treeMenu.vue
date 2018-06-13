<template>
  <li>
    <span @click="toggle">
      <i v-if="isFolder" class="icon" :class="[open ? 'folder-open': 'folder']"></i>
      <i v-if="!isFolder" class="icon file-text"></i>
      {{ model.menuName }}
      <!-- 先这么解决吧，不知道原因 -->
      <div style="display:none">{{ Folder }}</div>
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
}
i.icon {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  vertical-align: middle;
}
.icon.folder {
  background-image: url(../assets/folder.png);
  background-size: 100% 100%;
}
.icon.folder-open {
  background-image: url(../assets/folder-open.png);
  background-size: 100% 100%;
}
.icon.file-text {
  /*background-image: url(../assets/folder-open.png);
   background-size: 100% 100%;*/
}
.tree-menu li {
  line-height: 1.5;
}
</style>