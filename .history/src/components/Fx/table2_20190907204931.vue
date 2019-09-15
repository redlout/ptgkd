<template>
  <div>
    <el-form
      :model="abilityForm"
      :rules="rules"
      ref="abilityForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-row>
        <el-col :lg="16">
          <el-row>
            <el-col :xs="12" :sm="12" :lg="12">
              <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245); "> -->
              <el-form-item label="力量" prop="powerbase">
                <el-input-number v-model="abilityForm.powerbase" controls-position="right" :min="1" size="mini"></el-input-number>
              </el-form-item>
              <!-- </el-card> -->
            </el-col>
          </el-row>
      </el-row>
    </el-form>

  </div>
</template>

<script>
import router from "@/router";
import Cookies from "js-cookie";
import mock from "@/mock/index.js";
import _ from "lodash";
export default {
  name: "Fxtable2",
  data() {
    return {
      ruleForm: _.cloneDeep(this.$store.state.fx1.form),
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        age: [{ required: true, message: "请输入年龄", trigger: "blur" }],
        height: [{ required: true, message: "请输入身高", trigger: "blur" }],
        weight: [{ required: true, message: "请输入体重", trigger: "blur" }],
        raceAndnationality: [
          { required: true, message: "请输入种族和国籍", trigger: "blur" }
        ],
        character: [
          { required: true, message: "请输入种族和国籍", trigger: "blur" }
        ],
        looks: [
          { required: true, message: "请输入种族和国籍", trigger: "blur" }
        ],
        describe: [{ required: true, message: "请描述人物", trigger: "blur" }]
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
  watch: {
    ruleForm: {
      handler: function(event) {
        this.$store.commit("setForm", this.ruleForm);
      },
      deep: true
    }
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
    }
  }
};
</script>

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
  .dialog_img {
    height: 267px;
    width: 180px;
  }
}
</style>