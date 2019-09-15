<template>
  <el-container style="height: 100%;" direction="vertical">
    <AsideBar></AsideBar>
    <el-container>
      <HeadBar></HeadBar>
      <el-main></el-main>
    </el-container>
  </el-container>
</template>

<script>
import AsideBar from "../components/AsideBar/index";
import HeadBar from "../components/HeadBar/index";
export default {
  name: "HelloWorld",
  data() {
    return {
      isCollapse: false
    };
  },
  components: {
    AsideBar,
    HeadBar
  },
  methods: {
    logout: function() {
      var _this = this;
      this.$confirm("确认退出吗?", "提示", {
        type: "warning"
      }).then(() => {
        // sessionStorage.removeItem("user");
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>
