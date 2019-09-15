<template>
  <div class="container" :class="$store.state.collapseState.collapse?'menu-bar-collapse-width':'menu-bar-width'">
    <h3>fxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h3>
  </div>
</template>

<script>
import router from "@/router";
import Cookies from "js-cookie";
import mock from "@/mock/mock.js";
export default {
  name: "fx",
}
</script>

<style scoped lang="scss">
.container {
  position: absolute;
  top: 60px;
}
</style>