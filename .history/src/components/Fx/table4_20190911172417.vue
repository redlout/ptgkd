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
            <el-col :xs="12" :sm="12" :lg="24">

              <el-form-item label="速度" prop="name">
                <span> :力量【{{attributeData[0].base}}】+ 敏捷【】+体积【】+敏捷附加【】*5 = {{}}</span>
              </el-form-item>

            </el-col>
            <el-col :xs="12" :sm="12" :lg="12">
              <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245); "> -->
              <el-form-item label="性别" prop="sex">

              </el-form-item>
              <!-- </el-card> -->
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="12" :sm="12" :lg="12">
              <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245); "> -->
              <el-form-item label="身高" prop="height">

              </el-form-item>
              <!-- </el-card> -->
            </el-col>
            <el-col :xs="12" :sm="12" :lg="12">
              <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245); "> -->
              <el-form-item label="体重" prop="weight">

              </el-form-item>
              <!-- </el-card> -->
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="12" :sm="12" :lg="12">
              <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245); "> -->
              <el-form-item label="年龄" prop="age">

              </el-form-item>
              <!-- </el-card> -->
            </el-col>
            <el-col :xs="12" :sm="12" :lg="12">
              <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245); "> -->
              <el-form-item label="种族/国籍" prop="raceAndnationality">

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

          </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="8">
          <el-form-item label="相貌" prop="looks">

          </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="8">
          <el-form-item label="美德" prop="virtue_id">

            <el-input
              class="virtue_input"
              :disabled="true"
              style="width: 65%;"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="12" :sm="12" :lg="8">
          <el-form-item label="基因锁" prop="gene">

          </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="8">
          <el-form-item label="精致武器等级" prop="delicate">

          </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="8">
          <el-form-item label="XP数" prop="xp">

          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="描述" prop="describe">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 6}"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
 <br />
 
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
        // myData:{
        attributeData: _.cloneDeep(this.$store.state.fx2.tableData),
        spData: _.cloneDeep(this.$store.state.fx3.tableData),
        derivative: _.cloneDeep(this.$store.state.fx4.tableData),
        // }
    };
  },
};
</script>

<style lang="scss">

</style>