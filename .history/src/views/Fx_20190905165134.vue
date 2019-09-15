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
          <el-col :lg="16">
            <el-row>
              <el-col :xs="12" :sm="12" :lg="12">
                <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245); "> -->
                <el-form-item label="姓名" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
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
            <el-card shadow="hover" style="background-color: rgb(240, 242, 245);">
              点我可以上传立绘
              <br />
              <br />
              <br />
              <br />
              <br />
            </el-card>
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
              <!-- <el-input :disabled="true" v-model="ruleForm.virtue_name" style="width: 65%;" type="primary" ></el-input> -->
               <el-button type="info" plain disabled>{{ruleForm.virtue_name}}</el-button>
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
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
          <el-button type="info" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-dialog class="dialogcss" :visible.sync="virtueDialog" center top="5vh">
      <el-row>
        <el-col :xs="12" :sm="12" :lg="8" v-for="(virtue) of virtue_good_List" :key="virtue.id">
          <el-card shadow="hover" style="background-color: rgb(240, 242, 245);">
            <img class="dialog_img" :src="virtue.imgsrc" v-on:click="clickVirtue(virtue.id, virtue.name)" />
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="12" :sm="12" :lg="8" v-for="(virtue) of virtue_neutral_List" :key="virtue.id">
          <el-card shadow="hover" style="background-color: rgb(240, 242, 245);">
            <img class="dialog_img" :src="virtue.imgsrc" v-on:click="clickVirtue(virtue.id, virtue.name)" />
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="12" :sm="12" :lg="8" v-for="(virtue) of virtue_evil_List" :key="virtue.id">
          <el-card shadow="hover" style="background-color: rgb(240, 242, 245);">
            <img class="dialog_img" :src="virtue.imgsrc" v-on:click="clickVirtue(virtue.id, virtue.name)" />
          </el-card>
        </el-col>
      </el-row>
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