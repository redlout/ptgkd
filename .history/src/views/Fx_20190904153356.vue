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
        <el-row>
          <el-col :xs="12" :sm="12" :lg="8">
            <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245); "> -->
            <el-form-item label="姓名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <!-- </el-card> -->
          </el-col>
          <el-col :xs="12" :sm="12" :lg="8">
            <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245); "> -->
            <el-form-item label="性别" prop="sex">
              <el-radio-group v-model="ruleForm.sex">
                <el-radio label="男" value="man"></el-radio>
                <el-radio label="女" value="woman"></el-radio>
                <el-radio label="不明" value="unkonw"></el-radio>
              </el-radio-group>
            </el-form-item>
            <!-- </el-card> -->
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="12" :sm="12" :lg="8">
            <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245); "> -->
            <el-form-item label="身高" prop="height">
              <el-input v-model="ruleForm.height"></el-input>
            </el-form-item>
            <!-- </el-card> -->
          </el-col>
          <el-col :xs="12" :sm="12" :lg="8">
            <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245); "> -->
            <el-form-item label="体重" prop="weight">
              <el-input v-model="ruleForm.weight"></el-input>
            </el-form-item>
            <!-- </el-card> -->
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="12" :sm="12" :lg="8">
            <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245); "> -->
            <el-form-item label="年龄" prop="age">
              <el-input v-model="ruleForm.age"></el-input>
            </el-form-item>
            <!-- </el-card> -->
          </el-col>

            <el-col :xs="12" :sm="12" :lg="8">
              <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245); "> -->
              <el-form-item label="种族/国籍" prop="raceAndnationality">
                <el-input v-model="ruleForm.raceAndnationality"></el-input>
              </el-form-item>
              <!-- </el-card> -->
            </el-col>
        </el-row>
        <el-row>
          <el-col :xs="12" :sm="12" :lg="8">
            <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245);"> -->
            <el-form-item label="性格" prop="character">
              <el-input v-model="ruleForm.character"></el-input>
            </el-form-item>
            <!-- </el-card> -->
          </el-col>
          <el-col :xs="12" sm="12" :lg="8">
            <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245);"> -->
            <el-form-item label="相貌" prop="looks">
              <el-input v-model="ruleForm.looks"></el-input>
            </el-form-item>
            <!-- </el-card> -->
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="12" :sm="12" :lg="8">
            <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245);"> -->
            <el-form-item label="美德" prop="virtue">
              <el-button @click="virtueDialog=true">选择</el-button>
            </el-form-item>
            <!-- </el-card> -->
          </el-col>
          <el-col :xs="12" :sm="12" :lg="8">
            <el-form-item label="基因锁" prop="gene">
              <el-select v-model="ruleForm.gene" placeholder="请选择">
                <el-option label="无" value="no" selected="selected"></el-option>
                <el-option label="一阶" value="one"></el-option>
                <el-option label="二阶" value="two"></el-option>
                <el-option label="三阶" value="three"></el-option>
                <el-option label="四阶" value="four"></el-option>
                <el-option label="五阶" value="five"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="精致武器等级" prop="delicate">
              <el-select v-model="ruleForm.delicate" placeholder="请选择">
                <el-option label="无" value="no" selected="selected"></el-option>
                <el-option label="大师" value="master"></el-option>
                <el-option label="工匠" value="craftsman"></el-option>
                <el-option label="传奇" value="legend"></el-option>
                <el-option label="神话" value="myth"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="XP数" prop="xp">
          <el-input v-model="ruleForm.xp"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="describe">
          <el-input type="textarea" v-model="ruleForm.describe"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
          <el-button type="info" @click="resetForm('ruleForm')">重置</el-button>
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
  name: "fx",
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
        virtue: "",
        gene: "",
        delicate: "",
        xp: "",
        describe: ""
      },
      rules: {
        name: [{ require: true, message: "请输入姓名", trigger: "blur" }],
        sex: [{ require: true, message: "请选择性别", trigger: "change" }],
        age: [{ require: true, message: "请输入年龄", trigger: "blur" }],
        height: [{ require: true, message: "请输入身高", trigger: "blur" }],
        weight: [{ require: true, message: "请输入体重", trigger: "blur" }],
        raceAndnationality: [
          { require: true, message: "请输入种族和国籍", trigger: "blur" }
        ],
        character: [
          { require: true, message: "请输入种族和国籍", trigger: "blur" }
        ],
        looks: [
          { require: true, message: "请输入种族和国籍", trigger: "blur" }
        ],
        describe: [{ require: true, message: "请描述人物", trigger: "blur" }]
      }
    };
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

  .panel-group {
    margin-top: 18px;
    .card-panel-col {
      margin-bottom: 32px;
    }

    .card-panel {
      height: 108px;
      cursor: pointer;
      font-size: 12px;
      position: relative;
      overflow: hidden;
      color: #666;
      background: #fff;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
      border-color: rgba(0, 0, 0, 0.05);
    }
  }
}
</style>