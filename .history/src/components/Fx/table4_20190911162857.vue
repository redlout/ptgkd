<template>
  <div>
    <el-form
      :model="myData"
      ref="myData"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-row>
        <el-col :lg="16">
          <el-row>
            <el-col :xs="12" :sm="12" :lg="12">
              <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245); "> -->
              <el-form-item label="姓名" prop="name">
                <span>速度： 力量【{{myData.attributeData[0].base}}】+ 敏捷【】+体积【】+敏捷附加【】*5 = {{}}</span>
              </el-form-item>
              <!-- </el-card> -->
            </el-col>
            <el-col :xs="12" :sm="12" :lg="12">
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
            <el-col :xs="12" :sm="12" :lg="12">
              <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245); "> -->
              <el-form-item label="身高" prop="height">
                <el-input v-model="ruleForm.height"></el-input>
              </el-form-item>
              <!-- </el-card> -->
            </el-col>
            <el-col :xs="12" :sm="12" :lg="12">
              <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245); "> -->
              <el-form-item label="体重" prop="weight">
                <el-input v-model="ruleForm.weight"></el-input>
              </el-form-item>
              <!-- </el-card> -->
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="12" :sm="12" :lg="12">
              <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245); "> -->
              <el-form-item label="年龄" prop="age">
                <el-input v-model="ruleForm.age"></el-input>
              </el-form-item>
              <!-- </el-card> -->
            </el-col>
            <el-col :xs="12" :sm="12" :lg="12">
              <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245); "> -->
              <el-form-item label="种族/国籍" prop="raceAndnationality">
                <el-input v-model="ruleForm.raceAndnationality"></el-input>
              </el-form-item>
              <!-- </el-card> -->
            </el-col>
          </el-row>
        </el-col>
        <el-col :lg="8" :xs="12" :sm="12">

        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="12" :sm="12" :lg="8">
          <el-form-item label="性格" prop="character">
            <el-input v-model="ruleForm.character"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="8">
          <el-form-item label="相貌" prop="looks">
            <el-input v-model="ruleForm.looks"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="8">
          <el-form-item label="美德" prop="virtue_id">
            <el-button v-model="ruleForm.virtue_id" @click="virtueDialog=true">选择</el-button>
            <el-input
              class="virtue_input"
              :disabled="true"
              v-model="ruleForm.virtue_name"
              style="width: 65%;"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
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
        </el-col>
        <el-col :xs="12" :sm="12" :lg="8">
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
        <el-col :xs="12" :sm="12" :lg="8">
          <el-form-item label="XP数" prop="xp">
            <el-input v-model="ruleForm.xp"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="描述" prop="describe">
            <el-input
              type="textarea"
              v-model="ruleForm.describe"
              :autosize="{ minRows: 2, maxRows: 6}"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
 <br />
    <el-dialog class="dialogcss" :visible.sync="virtueDialog" center top="5vh">
      <el-row>
        <el-col :xs="12" :sm="12" :lg="8" v-for="(virtue) of virtue_good_List" :key="virtue.id">
          <el-card shadow="hover" style="background-color: rgb(240, 242, 245);">
            <img
              class="dialog_img"
              :src="virtue.imgsrc"
              v-on:click="clickVirtue(virtue.id, virtue.name)"
            />
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="12" :sm="12" :lg="8" v-for="(virtue) of virtue_neutral_List" :key="virtue.id">
          <el-card shadow="hover" style="background-color: rgb(240, 242, 245);">
            <img
              class="dialog_img"
              :src="virtue.imgsrc"
              v-on:click="clickVirtue(virtue.id, virtue.name)"
            />
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="12" :sm="12" :lg="8" v-for="(virtue) of virtue_evil_List" :key="virtue.id">
          <el-card shadow="hover" style="background-color: rgb(240, 242, 245);">
            <img
              class="dialog_img"
              :src="virtue.imgsrc"
              v-on:click="clickVirtue(virtue.id, virtue.name)"
            />
          </el-card>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import router from "@/router";
import Cookies from "js-cookie";
// import mock from "@/mock/mock.js";
import mock from "@/mock/index.js";
import _ from "lodash";
export default {
  name: "Fxtable4",
  data() {
    return {
        myData:{
        attributeData: _.cloneDeep(this.$store.state.fx2.tableData),
        spData: _.cloneDeep(this.$store.state.fx3.tableData),
        }
    };
  },
};
</script>

<style lang="scss">

</style>