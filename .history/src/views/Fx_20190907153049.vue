<template>
  <div
    class="container"
    :class="$store.state.collapseState.collapse?'menu-bar-collapse-width':'menu-bar-width'"
  >
    <div class="main-container">
      <fxtable></fxtable>
          <el-button type="primary" @click="submitForm('ruleForm')">创建完成</el-button>
          <el-button type="info" @click="resetForm('ruleForm')">重置</el-button>
    </div>

  </div>
</template>

<script>
import router from "@/router";
import Cookies from "js-cookie";
// import mock from "@/mock/mock.js";
import mock from "@/mock/index.js";
import fxtable from "../components/Fx/table";
export default {
  name: "Fx",
  data() {
    return {
    };
  },
  components: {
    fxtable
  },
  methods: {
    submitForm(ruleForm){
            console.log(fx_card_info);
      let fx_card_info = this.$store.state.refs
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
    resetForm(ruleForm){
      this.$refs[ruleForm].resetFields();
    }
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