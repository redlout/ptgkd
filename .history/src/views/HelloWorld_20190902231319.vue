<template>
<div class="container" >
  <el-container style="height: 100%;" direction="vertical">
    <AsideBar></AsideBar>
    <el-container :class="$store.state.collapseState.collapse?'menu-bar-collapse-width':'menu-bar-width'">
      <HeadBar></HeadBar>
      <el-main></el-main>
    </el-container>
  </el-container>
</div>
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

<style scoped>
  .container {
    position:fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    background: #4b5f6e;
  }
  .menu-bar-width {
  left: 200px;
}
.menu-bar-collapse-width {
  left: 65px;
}
</style>
