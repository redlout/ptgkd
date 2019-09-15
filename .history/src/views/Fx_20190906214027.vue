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
      // ruleForm: {
      //   name: "",
      //   sex: "",
      //   age: "",
      //   height: "",
      //   weight: "",
      //   raceAndnationality: "",
      //   character: "",
      //   looks: "",
      //   virtue_id: "",
      //   virtue_name: "",
      //   gene: "",
      //   delicate: "",
      //   xp: "",
      //   describe: ""
      // },
    };
  },
  components: {
    fxtable
  },
  methods: {
    submitForm(ruleForm){
      let fx_card_info = {
        name: $store.state.fx1.form.name,
        sex: $store.state.fx1.form.sex,
        age: $store.state.fx1.form.age,
        height: $store.state.fx1.form.height,
        weight: $store.state.fx1.form.weight,
        raceAndnationality: $store.state.fx1.form.raceAndnationality,
        character: $store.state.fx1.form.character,
        looks: $store.state.fx1.form.looks,
        virtue_id: $store.state.fx1.form.virtue_id,
        virtue_name: $store.state.fx1.form.virtue_name,
        gene: $store.state.fx1.form.gene,
        delicate: $store.state.fx1.form.delicate,
        xp: $store.state.fx1.form.xp,
        describe: $store.state.fx1.form.describe
      };
      // console.log(fx_card_info);
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