<template>
<div class="container">
    <AsideBar></AsideBar>
    <HeadBar></HeadBar>
    <el-main></el-main>
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
    position:absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    background: #4b5f6e;
  }
</style>
