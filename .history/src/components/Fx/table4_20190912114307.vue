<template>
  <div>
    <el-form
      ref="myData"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-row>
        <el-col :lg="16">
          <el-row>
            <el-col :xs="12" :sm="12" :lg="24">
                <el-form-item label="速度" prop="speed">
                <span @change="handlechange()"> 
                    :力量【{{power}}】+ 敏捷【{{agile}}】+体积【{{volume}}】+敏捷附加【{{agileAdditional}}】*5 = {{speed}}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="24">
              <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245); "> -->
              <el-form-item label="先攻" prop="strike">
                  :敏捷【{{agile}}】+沉着【{{calm}}】+沉着附加【{{calmAdditional}}】×4）= {{strike}}
              </el-form-item>
              <!-- </el-card> -->
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="12" :sm="12" :lg="24">
              <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245); "> -->
              <el-form-item label="防御" prop="defense">
: 敏捷与感知中较低者 + 较高者的附加成功 = {{defense}}
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
import { mapState } from 'vuex'
export default {
  name: "Fxtable4",
  data() {
    return {
    };
  },
  methods:{

  },
  computed:{
      ...mapState({
          power: state => state.fx2.tableData[0].base, //力量
          agile: state => state.fx2.tableData[1].base, //敏捷
          volume: state => state.fx1.form.volume,  //体积
          agileAdditional: state => state.fx2.tableData[1].additional, //敏捷附加
          speed: state => state.fx4.speed, //速度
          strike: state => state.fx4.strike, //先攻
          defense: state => state.fx4.defense, //防御
          calm: state => state.fx2.tableData[8].base, //沉着
          calmAdditional: state => state.fx2.tableData[8].additional*4, //沉着附加

      })
  }
};
</script>

<style lang="scss">

</style>

