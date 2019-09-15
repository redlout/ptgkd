<template>
  <div>
    <el-form
      :model="abilityForm"
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
        </el-col>
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
      abilityForm: _.cloneDeep(this.$store.state.fx2.form),

    };
  },
  watch: {
    ruleForm: {
      handler: function(event) {
        this.$store.commit("setForm2", this.abilityForm);
      },
      deep: true
    }
  },
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