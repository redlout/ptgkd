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
      },
      virtueDialog: false,
      virtue_good_List: [
        { id: "001", imgsrc: require("@/assets/cat_01.png"), name: "守序善良" },
        { id: "002", imgsrc: require("@/assets/cat_02.png"), name: "中立善良" },
        { id: "003", imgsrc: require("@/assets/cat_03.png"), name: "混乱善良" }
      ],
      virtue_neutral_List: [
        { id: "004", imgsrc: require("@/assets/cat_04.png"), name: "守序中立" },
        { id: "005", imgsrc: require("@/assets/cat_05.png"), name: "绝对中立" },
        { id: "006", imgsrc: require("@/assets/cat_06.png"), name: "混乱中立" }
      ],
      virtue_evil_List: [
        { id: "007", imgsrc: require("@/assets/cat_07.png"), name: "守序邪恶" },
        { id: "008", imgsrc: require("@/assets/cat_08.png"), name: "中立邪恶" },
        { id: "009", imgsrc: require("@/assets/cat_09.png"), name: "混乱邪恶" }
      ]
    };
  },
  components: {
    table
  },
  methods: {
    clickVirtue(id, name) {
      if (this.$data.ruleForm.virtue_id == id) {
        this.$data.ruleForm.virtue_id = 0;
        this.$data.ruleForm.virtue_name = "无";
      } else {
        this.$data.ruleForm.virtue_id = id;
        this.$data.ruleForm.virtue_name = name;
        this.virtueDialog = false;
      }
      // console.log(this.$data.ruleForm.virtue_id,this.$data.ruleForm.virtue_name)
    },
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
//180 267
<style lang="scss">
  .dialogcss {
    .el-dialog {
      background-color: rgb(240, 242, 245);
    }
    .el-dialog__header {
      padding: 0;
      background-color: rgb(240, 242, 245);
    }
    .el-dialog__body {
      padding: 0;
      background-color: rgb(240, 242, 245);
    }
    .dialog_img{
      height:267px;
      width:180px;
    }
  }
</style>