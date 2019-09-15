<template>
  <!-- <el-container style="height: 100%;"> -->
    <AsideBar></AsideBar>
    <!-- <el-container> -->
      <HeadBar></HeadBar>
      <!-- <el-main></el-main> -->
    <!-- </el-container> -->
  <!-- </el-container> -->
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
.el-header {
  background-color: rgb(243, 217, 217);
  color: #333;
  line-height: 60px;
}
</style>
