<template>
  <div
    class="container"
    :class="$store.state.collapseState.collapse?'menu-bar-collapse-width':'menu-bar-width'"
  >
    <div class="main-container">
      <fxtable></fxtable>


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
      ruleForm: {
        name: "",
        sex: "",
        age: "",
        height: "",
        weight: "",
        raceAndnationality: "",
        character: "",
        looks: "",
        virtue_id: "",
        virtue_name: "",
        gene: "",
        delicate: "",
        xp: "",
        describe: ""
      },
    };
  },
  components: {
    fxtable
  },
  methods: {
    submitForm(ruleForm){
      let fx_card_info = {
        name: this.ruleForm.name,
        sex: this.ruleForm.sex,
        age: this.ruleForm.age,
        height: this.ruleForm.height,
        weight: this.ruleForm.weight,
        raceAndnationality: this.ruleForm.raceAndnationality,
        character: this.ruleForm.character,
        looks: this.ruleForm.looks,
        virtue_id: this.ruleForm.virtue_id,
        virtue_name: this.ruleForm.virtue_name,
        gene: this.ruleForm.gene,
        delicate: this.ruleForm.delicate,
        xp: this.ruleForm.xp,
        describe: this.ruleForm.describe
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