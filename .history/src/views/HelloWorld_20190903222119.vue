<template>
  <div class="container">
    <!-- <el-container style="height: 100%;" direction="vertical"> -->
    <AsideBar></AsideBar>
    <!-- <el-container> -->
    <HeadBar></HeadBar>
    <Main></Main>
    <div class="main-content">
      <keep-alive>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </keep-alive>
    </div>
    <!-- </el-container> -->
    <!-- </el-container> -->
  </div>
</template>

<script>
import AsideBar from "../components/AsideBar/index";
import HeadBar from "../components/HeadBar/index";
import Main from "../components/Main/index";
import router from "@/router";
import Cookies from "js-cookie";
import mock from "@/mock/mock.js";
export default {
  name: "HelloWorld",
  data() {
    return {
      isCollapse: false
    };
  },
  components: {
    Main,
    AsideBar,
    HeadBar,
    Main
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
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  background: #4b5f6e;
}
.main-content {
  position: absolute;
  top: 45px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  padding: 5px;
  /* background: rgba(209, 212, 212, 0.5); */
}
</style>
