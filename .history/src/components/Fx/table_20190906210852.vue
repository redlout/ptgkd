<template>
<div>
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
                  <el-input v-model="name"></el-input>
                </el-form-item>
                <!-- </el-card> -->
              </el-col>
              <el-col :xs="12" :sm="12" :lg="12">
                <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245); "> -->
                <el-form-item label="性别" prop="sex">
                  <el-radio-group v-model="sex">
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
                  <el-input v-model="height"></el-input>
                </el-form-item>
                <!-- </el-card> -->
              </el-col>
              <el-col :xs="12" :sm="12" :lg="12">
                <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245); "> -->
                <el-form-item label="体重" prop="weight">
                  <el-input v-model="weight"></el-input>
                </el-form-item>
                <!-- </el-card> -->
              </el-col>
            </el-row>
            <el-row>
              <el-col :xs="12" :sm="12" :lg="12">
                <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245); "> -->
                <el-form-item label="年龄" prop="age">
                  <el-input v-model="age"></el-input>
                </el-form-item>
                <!-- </el-card> -->
              </el-col>
              <el-col :xs="12" :sm="12" :lg="12">
                <!-- <el-card shadow="hover" style="background-color: rgb(240, 242, 245); "> -->
                <el-form-item label="种族/国籍" prop="raceAndnationality">
                  <el-input v-model="raceAndnationality"></el-input>
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
              <el-input v-model="character"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="12" :sm="12" :lg="8">
            <el-form-item label="相貌" prop="looks">
              <el-input v-model="looks"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="12" :sm="12" :lg="8">
            <el-form-item label="美德" prop="virtue_id">
              <el-button v-model="virtue_id" @click="virtueDialog=true">选择</el-button>
              <el-input class="virtue_input" :disabled="true" v-model="virtue_name" style="width: 65%;"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="12" :sm="12" :lg="8">
            <el-form-item label="基因锁" prop="gene">
              <el-select v-model="gene" placeholder="请选择">
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
              <el-select v-model="delicate" placeholder="请选择">
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
              <el-input v-model="xp"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="描述" prop="describe">
              <el-input
                type="textarea"
                v-model="describe"
                :autosize="{ minRows: 2, maxRows: 6}"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

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
// import mock from "@/mock/mock.js";
import mock from "@/mock/index.js";
import { mapFields } from 'vuex-map-fields';
export default {
  name: "Fxtable",
  data() {
    return {
      ruleForm: {
      },
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
      ,
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
      if (this.$data.virtue_id == id) {
        this.$data.virtue_id = 0;
        this.$data.virtue_name = "无";
      } else {
        this.$data.virtue_id = id;
        this.$data.virtue_name = name;
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
    .dialog_img{
      height:267px;
      width:180px;
    }
  }
</style>