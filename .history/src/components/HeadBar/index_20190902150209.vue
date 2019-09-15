<template>
  <el-header style="text-align: right; font-size: 12px">
    <span @click.prevent="collapse">
      <i class="el-icon-menu"></i>
    </span>
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
  color: #333;
  line-height: 60px;
  text-align: left;
  /* left: 200px; */
  right: 0px;
  height: 60px;
  line-height: 60px;
}
</style>