<template>
  <div
    class="container"
    :class="$store.state.collapseState.collapse?'menu-bar-collapse-width':'menu-bar-width'"
  >
    <div class="main-container">
      <el-tabs v-model="activeName"  @tab-click="handleClick">
        <el-tab-pane label="基本信息" name="first"><fxtable1></fxtable1></el-tab-pane>
        <el-tab-pane label="属性" name="second"><fxtable2></fxtable2></el-tab-pane>
        <el-tab-pane label="专业与技能" name="third"><fxtable3></fxtable3></el-tab-pane>
        <el-tab-pane label="专长" name="fourth"></el-tab-pane>
        <el-tab-pane label="物品" name="fifth"><fxtable5></fxtable5></el-tab-pane>
      </el-tabs>
      <!-- <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="基本信息" name="1">
          <fxtable1></fxtable1>
        </el-collapse-item>
        <el-collapse-item title="属性" name="2">
          <fxtable2></fxtable2>
        </el-collapse-item>
        <el-collapse-item title="专业与技能" name="3">
          <fxtable3></fxtable3>
        </el-collapse-item>
        <el-collapse-item title="专长" name="4">
          <fxtable4></fxtable4>
        </el-collapse-item>
      <el-divider></el-divider>
      <fxtable5></fxtable5>
      </el-collapse> -->
      <fxtable4></fxtable4>
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
import fxtable4 from "../components/Fx/table4";
import fxtable5 from "../components/Fx/table5";
export default {
  name: "Fx",
  data() {
    return {};
  },
  components: {
    fxtable1,
    fxtable2,
    fxtable3,
    fxtable4,
    fxtable5
  },
  methods: {
    submitForm(ruleForm) {
      let fx_card_info = {
        fx1 : this.$store.state.fx1.form,
        fx2 : this.$store.state.fx2.tableData,
        fx3 : this.$store.state.fx3.tableData
      };
      console.log(fx_card_info);
      this.$api
        .fx(JSON.stringify(fx_card_info))
        .then(res => {
          this.$router.push("/");
        })
        .catch(res => {
          alert(res);
        });
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