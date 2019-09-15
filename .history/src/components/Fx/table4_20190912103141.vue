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

              <el-form-item label="速度" prop="name">
                <span @change="handlechange()"> :力量【{{$store.state.fx2.tableData[0].base}}】+ 
                    敏捷【{{$store.state.fx2.tableData[1].base}}】+
                    体积【{{$store.state.fx1.form.volume}}】+
                    敏捷附加【{{$store.state.fx2.tableData[1].additional}}】*5 = {{speed}}</span>
                    <span>{{$store.state.fx4.speed}}</span>

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
import { mapState } from 'vuex'
export default {
  name: "Fxtable4",
  data() {
    return {
        derivative: _.cloneDeep(this.$store.state.fx4),
    };
  },
  methods:{
  },
watch: {
    derivative: {
      handler: function(event) {
        this.$store.commit("setDerivative", this.derivative);
      },
      deep: true
    }
  },
  computed:mapState({
      speed:function(state){
          return this.$store.state.fx2.tableData[1].base+
          this.$store.state.fx1.form.volume+
          this.$store.state.fx2.tableData[1].additional*5;
      }
  }),
};
</script>

<style lang="scss">

</style>


//速度
        speed = this.tableData[0].base+
        this.tableData[1].base+ 
        this.$store.state.fx1.form.volume+
        this.tableData[1].additional*5;
        //先攻 （敏捷【】+沉着【】+沉着附加【 】×4）= 18
        this.$store.state.fx4.strike = this.tableData[1].base + this.tableData[1].base + this.tableData[1].additional*4;
        //防御 （敏捷与感知中较低者【1】）=  1 +较高者的附加成功【1】
        if(this.tableData[1].base > this.tableData[4].base){
          this.$store.state.fx4.defense = this.tableData[4].base + this.tableData[1].additional;
        }else{
          this.$store.state.fx4.defense = this.tableData[1].base + this.tableData[4].additional;
        }
        // 生命值 （耐力【1】+体积【5】+耐力附加【 】×2）=6
        this.$store.state.fx4.life = this.tableData[2].base + this.$store.state.fx1.form.volume+this.tableData[2].additional*2;
        // 意志力池 （决心【3】+沉着【6】+决心附加【 】×2）= 9
        this.$store.state.fx4.willpower = this.tableData[5].base + this.tableData[8].base + this.tableData[5].additional*2

  //////////////////////////////////////////// data数据无法随着更新更新////////////////////
  /////////////////使用this.$store

        // 意志 （决心【3】+专注+意志【2】）=5
        for(var i=0 ;i< this.spData[7].data.length;i++){
          if(this.spData[7].data[i].professional == "意志"){
            this.$store.state.fx4.will = this.tableData[5].base + 
            this.$store.state.fx3.tableData[7].base + 
            this.$store.state.fx3.tableData[7].data[i].level;
            // console.log("no" + this.derivative.will);
          }else{
            this.$store.state.fx4.will = this.tableData[5].base + 
            this.$store.state.fx3.tableData[7].base
            // console.log("no" + this.derivative.will);
          }
        }
// 反射 （敏捷【8】+运动+反射【4】）= 12
        for(var i=0 ;i< this.spData[0].data.length;i++){
          if(this.spData[0].data[i].professional == "反射"){
        this.$store.state.fx4.reflection = this.tableData[1].base + this.spData[0].base + this.spData[0].data[i].level;
            console.log("no" + this.$store.state.fx4.will);
          }else{
        this.$store.state.fx4.reflection = this.tableData[1].base + this.spData[0].base
            console.log("no" + this.$store.state.fx4.will);
          }
        }
// 强韧 （耐力【1】+生存+强韧【1】）= 2
        for(var i=0 ;i< this.spData[3].data.length;i++){
          if(this.spData[3].data[i].professional == "侦察"){
        this.$store.state.fx4.investigation = this.tableData[2].base + this.spData[3].base + this.spData[3].data[i].level;
            console.log("no" + this.$store.state.fx4.will);
          }else{
        this.$store.state.fx4.investigation = this.tableData[2].base + this.spData[3].base
            console.log("no" + this.$store.state.fx4.will);
          }
        }
// 侦查 （感知【1】+洞察+侦查【1】）= 2
        for(var i=0 ;i< this.spData[8].data.length;i++){
          if(this.spData[8].data[i].professional == "侦察"){
        this.$store.state.fx4.investigation = this.tableData[4].base + this.spData[8].base + this.spData[8].data[i].level;
          }else{
        this.$store.state.fx4.investigation = this.tableData[4].base + this.spData[8].base
          }
        }
// 敏感范围 （感知【1】*20米+感知上的附加成功【 0】*20米）= 20
        this.$store.state.fx4.sensitiverange = this.tableData[4].base*20 + this.tableData[4].additional*20
