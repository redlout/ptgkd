<template>
  <div class="container" :class="$store.state.collapseState.collapse?'menu-bar-collapse-width':'menu-bar-width'">
        <div class="main-container">
    <h3>fxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h3>
        </div>
  </div>
</template>

<script>
import router from "@/router";
import Cookies from "js-cookie";
import mock from "@/mock/mock.js";
export default {
  name: "Run",
}
</script>

<style scoped lang="scss">
.container {
  position: absolute;
  top: 60px;
    .menu-bar-width {
    left: 200px;
  }
  .menu-bar-collapse-width {
    left: 65px;
  }
    .main-container {
    padding: 32px;
    background-color: rgb(240, 242, 245);
    position: relative;

    .chart-wrapper {
      background: #fff;
      padding: 16px 16px 0;
      margin-bottom: 32px;
    }
  }
}
</style>