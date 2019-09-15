<template>
  <div
    class="container"
    :class="$store.state.collapseState.collapse?'menu-bar-collapse-width':'menu-bar-width'"
  >
    <div class="main-container">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="ruleForm.sex">
            <el-radio label="男" value="man"></el-radio>
            <el-radio label="女" value="woman"></el-radio>
            <el-radio label="不明" value="unkonw"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="ruleForm.age"></el-input>
        </el-form-item>
        <el-form-item label="身高" prop="height">
          <el-input v-model="ruleForm.height"></el-input>
        </el-form-item>
        <el-form-item label="体重" prop="weight">
          <el-input v-model="ruleForm.weight"></el-input>
        </el-form-item>
        <el-form-item label="种族/国籍" prop="raceAndnationality">
          <el-input v-model="ruleForm.raceAndnationality"></el-input>
        </el-form-item>
        <el-form-item label="性格" prop="character">
          <el-input v-model="ruleForm.character"></el-input>
        </el-form-item>
        <el-form-item label="相貌" prop="looks">
          <el-input v-model="ruleForm.looks"><el-input>
        </el-form-item>
        <el-form-item label="美德" prop="virtue">
          <el-button @click="virtueDialog=true">选择</el-button> 
        </el-form-item>
      </el-form>
    </div>
    <el-dialog title="美德" :visible.sync="virtueDialog" width="30%" center>
      <span>这是一段信息</span>
    </el-dialog>
  </div>
</template>

<script>
import router from "@/router";
import Cookies from "js-cookie";
import mock from "@/mock/mock.js";
export default {
  name: "fx"
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