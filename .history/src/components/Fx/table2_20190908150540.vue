<template>
  <div>
    <el-row>
      <el-col :xs="12" :sm="12" :lg="24">
        <el-table :data="tableData" border style="width:100%" highlight-current-row @row-click="handleCurrentChange">

               <el-table-column label="日期" width="180">
                <template scope="scope">
                    <el-input size="small" v-model="scope.row.date" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.date}}</span>
                </template>
            </el-table-column>
            <el-table-column label="姓名" width="180">
                <template scope="scope">
                    <el-input size="small" v-model="scope.row.name" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.name}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="address" label="地址">
                <template scope="scope">
                    <el-input size="small" v-model="scope.row.address" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.address}}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template scope="scope">
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
          <el-table-column prop="void" label width="180"></el-table-column>
          <el-table-column prop="base" label="基础" width="180"></el-table-column>
          <el-table-column prop="inner" label="内在" width="180"></el-table-column>
          <el-table-column prop="total" label="总计" width="180"></el-table-column>
          <el-table-column prop="additional" label="附加成功" width="180"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
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
      abilityForm: _.cloneDeep(this.$store.state.fx2.form)
    };
  },
  watch: {
    ruleForm: {
      handler: function(event) {
        this.$store.commit("setForm2", this.abilityForm);
      },
      deep: true
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
<style>
.tb-edit .el-input {
    display: none
}
.tb-edit .current-row .el-input {
    display: block
}
.tb-edit .current-row .el-input+span {
    display: none
}
</style>