<template>
  <el-aside width="initial" style="background-color: rgb(238, 241, 246) ">
    <div
      :class="collapse?'menu-bar-collapse-width':'menu-bar-width'"
    >
      <i class="el-icon-menu" v-if="collapse"></i>
      <div>{{collapse?'':appName}}</div>
    </div>
    <el-menu
      :default-openeds="['1','2','3','4']"
      :class="collapse?'el-menu-vertical-demo':'menu-bar-width'"
      :collapse="collapse"
      @open="handleopen"
      @close="handleclose"
      @select="handleselect"
    >
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
import { mapState } from "vuex";
export default {
  name: "AsideBar",
  data() {
    return {
      isCollapse: false,
      logo: ""
    };
  },
  methods: {
    handleopen() {
      console.log("handleopen");
    },
    handleclose() {
      console.log("handleclose");
    },
    handleselect(a, b) {
      console.log("handleselect");
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