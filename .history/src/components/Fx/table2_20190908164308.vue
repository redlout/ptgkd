<template>
  <div>
    <el-row>
      <el-col :xs="12" :sm="12" :lg="24">

        <el-table :data="tableData" border style="width:100%" @row-click="handleCurrentChange" 
        :span-method="objectSpanMethod">
            <el-table-column prop="species" width="90">
            </el-table-column>
               <el-table-column prop="name" label="属性名" width="90">
            </el-table-column>
               <el-table-column prop="base" label="基础">
                <template scope="scope">
                    <el-input size="small" v-model="scope.row.base" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)">
                    </el-input>
                     <span>{{scope.row.date}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="inner" label="内在">
                <template scope="scope">
                    <el-input size="small" v-model="scope.row.inner" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)">

                    </el-input>
                     <span>{{scope.row.inner}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="total" label="总计">
                <template scope="scope">
                    <el-input size="small" v-model="scope.row.total" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)">
                        </el-input> 
                    <span>{{scope.row.total}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="additional" label="附加成功">
                <template scope="scope">
                    <el-input size="small" v-model="scope.row.additional" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)">
                        </el-input> 
                    <span>{{scope.row.additional}}</span>
                </template>
            </el-table-column>
        </el-table>

      </el-col>
    </el-row>
    <br>数据:{{tableData}}
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
    //   abilityForm: _.cloneDeep(this.$store.state.fx2.form)
    tableData:[{
        name:'力量',
        base:'',
        inner:'',
        total:'',
        additional:''
    },{
        name:'敏捷',
        base:'',
        inner:'',
        total:'',
        additional:''
    },{
        name:'耐力',
        base:'',
        inner:'',
        total:'',
        additional:''
    },{
        name:'智力',
        base:'',
        inner:'',
        total:'',
        additional:''
    },{
        name:'感知',
        base:'',
        inner:'',
        total:'',
        additional:''
    },{
        name:'决心',
        base:'',
        inner:'',
        total:'',
        additional:''
    },{
        name:'风度',
        base:'',
        inner:'',
        total:'',
        additional:''
    },{
        name:'操控',
        base:'',
        inner:'',
        total:'',
        additional:''
    },{
        name:'沉着',
        base:'',
        inner:'',
        total:'',
        additional:''
    }]
    };
  },
  watch: {
    ruleForm: {
      handler: function(event) {
        // this.$store.commit("setForm2", this.abilityForm);
      },
      deep: true
    }
  },
  methods:{
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 3 === 0) {
            return {
              rowspan: 3,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
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