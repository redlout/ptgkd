<template>
  <el-container style="height: 100%;">
    <el-aside >
      <el-radio-group v-model="isCollapse" style="margin-bottom:20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu :default-openeds="['1','2','3','4']" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
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
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>user</span>
      </el-header>
      <el-main>
        
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      isCollapse:false
    };
  },
  methods:{
    handleOpen(key, keyPath){
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath){
      // console.log(key,keyPath)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  /* .el-aside {
    color: #333;
  } */
    .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 10px;
  }
  
</style>
