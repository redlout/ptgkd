<template>
  <el-container style="height: 100%;">
    <AsideBar></AsideBar>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
              <el-radio-group v-model="isCollapse" style="margin-bottom:20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
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
  methods:{
    handleOpen(key, keyPath){
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath){
      // console.log(key,keyPath)
    }
  },
    components:{
    AsideBar
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

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  
</style>
