<template>
  <el-header >
    <el-radio-group v-model="isCollapse"  style="margin-bottom:20px;">
      <el-radio-button :label="$store.state.collapse">
        <i class="el-icon-menu"></i>
      </el-radio-button>
    </el-radio-group>
    <el-dropdown>
      <i class="el-icon-user" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item>管理</el-dropdown-item>
        <el-dropdown-item divided @click="logout">登出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
  <!-- <el-main></el-main> -->
</template>


<style>
.el-header {
  position: absolute;
  background-color: rgb(243, 217, 217);
  left: 200px;
  right: 0px;
  height: 60px;
  line-height: 60px;
}
  .menu-bar-width{
    left: 200px;
  }
    .menu-bar-collapse-width{
    left: 65px;
  }
</style>