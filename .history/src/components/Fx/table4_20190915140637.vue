<template>
  <div>

<el-button @click="drawer = true" type="primary" style="width:100%">
  衍生属性
</el-button>

<el-drawer
  title="衍生属性"
  :visible.sync="drawer"
  direction="rtl"
  size='50%'>

    <el-form ref="myData" label-width="100px" class="demo-ruleForm">
      <el-row>
        <el-col :xs="12" :sm="12" :lg="24">
          <el-form-item
            label="速度"
            prop="speed"
          >: 力量【{{power}}】+ 敏捷【{{agile}}】+体积【{{volume}}】+敏捷附加【{{agileAdditional}}】*5 = {{speed}}</el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="12" :sm="12" :lg="24">
          <el-form-item
            label="先攻"
            prop="strike"
          >: 敏捷【{{agile}}】+沉着【{{calm}}】+沉着附加【{{calmAdditional}}】×4）= {{strike}}</el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="12" :sm="12" :lg="24">
          <el-form-item label="防御" prop="defense">: 敏捷与感知中较低者 + 较高者的附加成功 = {{defense}}</el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="12" :sm="12" :lg="24">
          <el-form-item
            label="生命值"
            prop="life"
          >: 耐力【{{endurance}}】+体积【{{volume}}】+耐力附加【{{enduranceAdditional}}】×2 ={{life}}</el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="12" :sm="12" :lg="24">
          <el-form-item
            label="意志力池"
            prop="willpower"
          >: 决心【{{determined}}】+沉着【{{calm}}】+ 决心附加【{{determinedAdditional}}】×2 = {{willpower}}</el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="12" :sm="12" :lg="24">
          <el-form-item label="意志" prop="will">: 决心【{{determined}}】+专注【{{focus}}】+意志【{{will_fx3}}】 = {{will}}</el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="12" :sm="12" :lg="24">
          <el-form-item
            label="反射"
            prop="reflection"
          >: 敏捷【{{agile}}】+运动【{{exercise}}】+反射【{{reflection_fx3}}】 = {{reflection}}</el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :xs="12" :sm="12" :lg="24">
          <el-form-item
            label="强韧"
            prop="strong"
          >: 耐力【{{endurance}}】+生存【{{survival}}】+强韧【{{strong_fx3}}】 = {{strong}}</el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :xs="12" :sm="12" :lg="24">
          <el-form-item
            label="侦查"
            prop="investigation"
          >: 感知【{{perception}}】+洞察【{{Insight}}】+侦察【{{investigation_fx3}}】 = {{investigation}}</el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :xs="12" :sm="12" :lg="24">
          <el-form-item
            label="敏感范围"
            prop="sensitiverange"
          >: 感知【{{perception}}】*20米+感知上的附加成功【{{perceptionAdditional}}】*20米 = {{sensitiverange}} 米</el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <br />
    </el-drawer>
  </div>
</template>

<script>
import router from "@/router";
import Cookies from "js-cookie";
// import mock from "@/mock/mock.js";
import mock from "@/mock/index.js";
import _ from "lodash";
import { mapState } from "vuex";
export default {
  name: "Fxtable4",
    data() {
      return {
        drawer: false,
      };
    },
    methods: {
    },

  computed: {
    ...mapState({
      volume: state => state.fx1.form.volume, //体积

      power: state => state.fx2.tableData[0].base, //力量
      agile: state => state.fx2.tableData[1].base, //敏捷
      agileAdditional: state => state.fx2.tableData[1].additional, //敏捷附加
      endurance: state => state.fx2.tableData[2].base, //耐力
      enduranceAdditional: state => state.fx2.tableData[2].additional, //耐力
      perception: state => state.fx2.tableData[4].base, //感知
      perceptionAdditional: state => state.fx2.tableData[4].additional, //感知附加
      determined: state => state.fx2.tableData[5].base, //决心
      determinedAdditional: state => state.fx2.tableData[5].additional, //决心附加
      calm: state => state.fx2.tableData[8].base, //沉着
      calmAdditional: state => state.fx2.tableData[8].additional, //沉着附加

      focus: state => state.fx3.tableData[7].base, //专注
      exercise: state => state.fx3.tableData[0].base, //运动
      Insight: state => state.fx3.tableData[8].base, //洞察
      survival: state => state.fx3.tableData[3].base, //求生
      will_fx3: state => state.fx3.will, //意志专业
      reflection_fx3: state => state.fx3.reflection, //反射专业
      strong_fx3: state=> state.fx3.strong, //强韧专业
      investigation_fx3: state => state.fx3.investigation, //侦查专业

      speed: state => state.fx4.speed, //速度
      strike: state => state.fx4.strike, //先攻
      defense: state => state.fx4.defense, //防御
      life: state => state.fx4.life, //生命值
      willpower: state => state.fx4.willpower, //意志力池
      will: state => state.fx4.will, //意志
      reflection: state => state.fx4.reflection, //反射
      strong: state => state.fx4.strong, //强韧
      investigation: state => state.fx4.investigation, //侦察
      sensitiverange: state => state.fx4.sensitiverange //敏感范围
    })
  }
};
</script>

<style lang="scss">
</style>

