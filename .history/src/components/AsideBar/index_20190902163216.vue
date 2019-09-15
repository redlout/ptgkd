<template>
  <el-aside width="initial" style="background-color: rgb(238, 241, 246) ">
    <el-menu
      :default-openeds="['1','2','3','4']"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      <!-- :collapse="isCollapse" -->
    >
      <el-radio-group v-model="isCollapse" style="margin-bottom:20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-flag"></i>
          <span slot="title">车卡</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">fx</el-menu-item>
          <el-menu-item index="1-2">星光</el-menu-item>
          <el-menu-item index="1-3">COC</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="1-1">口胡</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-video-play"></i>
          <span slot="title">跑团</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">跑团</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-thumb"></i>
          <span slot="title">开团</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">开团</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>


<script>
export default {
  name: "AsideBar",
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key,keyPath)
    }
  }
};
</script>

<style>
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 10px;
  position: absolute;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>