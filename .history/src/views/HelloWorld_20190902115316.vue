<template>
  <el-container style="height: 100%;">
    <AsideBar></AsideBar>
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
import AsideBar from '../components/AsideBar/index';
export default {
  name: "HelloWorld",
  data() {
    return {
      isCollapse:false
    };
  },
    components:{
    AsideBar
  }
};
</script>

<style>

.el-header {
    background-color: rgb(243, 0, 0);
    color: #333;
    line-height: 60px;
  }
  
</style>
