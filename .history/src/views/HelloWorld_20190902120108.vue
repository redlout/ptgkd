<template>
  <el-container style="height: 100%;">
    <AsideBar></AsideBar>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-user" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>管理</el-dropdown-item>
            <el-dropdown-item divided @click="logout">登出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
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
  },
  methods:{
    
  }
};
</script>

<style>

.el-header {
    background-color: rgb(243, 217, 217);
    color: #333;
    line-height: 60px;
  }
  
</style>
