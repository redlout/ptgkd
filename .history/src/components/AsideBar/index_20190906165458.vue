<template>
  <div class="menu-bar-container">
    <!-- <el-aside width="initial" style="background-color: rgb(238, 241, 246) "> -->
    <div
      class="logo"
      :class="$store.state.collapseState.collapse?'menu-bar-collapse-width':'menu-bar-width'"
      @click="$router.push('/')"
    >
      <img v-if="$store.state.collapseState.collapse" :src="this.logo" />
      <div>{{$store.state.collapseState.collapse?'':'appName'}}</div>
    </div>
    <el-menu
      :default-openeds="['1','2','3','4']"
      class="el-menu-vertical-demo"
      :collapse="$store.state.collapseState.collapse"
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
          <el-menu-item index="1-1" @click="$router.push('fx')">fx</el-menu-item>
          <el-menu-item index="1-2" @click="$router.push('star')">星光</el-menu-item>
          <el-menu-item index="1-3" @click="$router.push('COC')">COC</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="1-4" @click="$router.push('speak')">口胡</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-video-play"></i>
          <span slot="title">跑团</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" @click="$router.push('game')">跑团</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-thumb"></i>
          <span slot="title">开团</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1" @click="$router.push('start')">开团</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1" @click="$router.push('mng')">管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    <!-- </el-aside> -->
  </div>
</template>


<script>
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
  },
  mounted(){
    this.logo = require("@/assets/logo.png");
  }
};
</script>

<style scoped lang="scss">
/* .el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 10px;
  position: absolute;
  top: 60px;
} */
.menu-bar-container {
  .el-menu {
    position: absolute;
    top: 60px;
    bottom: 0px;
    text-align: left;
  }
  .logo {
    position: absolute;
    top: 0px;
    height: 60px;
    line-height: 60px;
    background: #4b5f6e;
    img {
      width: 40px;
      height: 40px;
      border-radius: 0px;
      margin: 10px 10px 10px 10px;
      float: left;
    }
    div {
      font-size: 25px;
      color: white;
      text-align: left;
      padding-left: 20px;
    }
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.menu-bar-width {
  width: 200px;
}
.menu-bar-collapse-width {
  width: 65px;
}
</style>