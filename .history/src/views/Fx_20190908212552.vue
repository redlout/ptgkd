<template>
  <div
    class="container"
    :class="$store.state.collapseState.collapse?'menu-bar-collapse-width':'menu-bar-width'"
  >
    <div class="main-container">
      <fxtable1></fxtable1>
      <fxtable2></fxtable2>
          <el-button type="primary" @click="submitForm()">创建完成</el-button>
    </div>

  </div>
</template>

<script>
import router from "@/router";
import Cookies from "js-cookie";
// import mock from "@/mock/mock.js";
import mock from "@/mock/index.js";
import fxtable1 from "../components/Fx/table1";
import fxtable2 from "../components/Fx/table2";
import fxtable3 from "../components/Fx/table3";
export default {
  name: "Fx",
  data() {
    return {
    };
  },
  components: {
    fxtable1,
    fxtable2,
    fxtable3
  },
  methods: {
    submitForm(ruleForm){
      let fx_card_info = this.$store.state.fx1.form
      console.log(fx_card_info);
      this.$api
        .fx(JSON.stringify(fx_card_info))
        .then(res => {
          alert(fx_card_info.name)
          this.$router.push("/");
        })
      .catch(res=>{
        alert(res);
      })
    },
  }
};
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
  }
}

</style>
<style lang="scss">
</style>