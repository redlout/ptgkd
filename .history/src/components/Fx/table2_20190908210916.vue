<template>
  <div style="width:90%; margin:0 auto">
    <el-row>
      <el-col :xs="12" :sm="12" :lg="24">
        <el-table
          :data="tableData"
          border
          style="width:100%"
          :cell-style="cellStyle"
          :header-cell-style="headerStyle"
          :span-method="objectSpanMethod"
        >
          <el-table-column prop="species" width="90" align="center"></el-table-column>
          <el-table-column prop="name" label="属性名" width="90" align="center"></el-table-column>
          <el-table-column prop="base" label="基础" align="center">
            <template scope="scope">
              <el-input-number
                size="small"
                :min="1"
                controls-position="right"
                v-model="scope.row.base"
                @change="handleEdit(scope.$index, scope.row)"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column prop="inner" label="内在" align="center">
            <template scope="scope">
              <el-input-number
                size="small"
                :min="0"
                controls-position="right"
                v-model="scope.row.inner"
                @change="handleEdit(scope.$index, scope.row)"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column prop="total" label="总计" align="center">
            <template scope="scope">
              <el-input
                style="width:80%"
                size="small"
                v-model="scope.row.total"
                :disabled="true"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="additional" label="附加成功" align="center">
            <template scope="scope">
              <el-input
                size="small"
                style="width:80%"
                v-model="scope.row.additional"
                :disabled="true"
              ></el-input>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <br />
    数据:{{tableData}}
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
      tableData: [
        {
          species: "生理",
          name: "力量",
          base: "",
          inner: "",
          total: "",
          additional: ""
        },
        {
          name: "敏捷",
          base: "",
          inner: "",
          total: "",
          additional: ""
        },
        {
          name: "耐力",
          base: "",
          inner: "",
          total: "",
          additional: ""
        },
        {
          species: "心智",
          name: "智力",
          base: "",
          inner: "",
          total: "",
          additional: ""
        },
        {
          name: "感知",
          base: "",
          inner: "",
          total: "",
          additional: ""
        },
        {
          name: "决心",
          base: "",
          inner: "",
          total: "",
          additional: ""
        },
        {
          species: "互动",
          name: "风度",
          base: "",
          inner: "",
          total: "",
          additional: ""
        },
        {
          name: "操控",
          base: "",
          inner: "",
          total: "",
          additional: ""
        },
        {
          name: "沉着",
          base: "",
          inner: "",
          total: "",
          additional: ""
        }
      ]
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
  methods: {
    //表格合并
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
    },
    handleEdit(index, row){
        console.log(row.inner);
    },
    //修改指定单元格样式
    cellStyle({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        return "background-color: #F2F6FC;text-align:center;";
      }
    },
    //修改表头样式
    headerStyle({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background-color: #C0C4CC;text-align:center;";
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
// .el-table__body tr:hover > td {
// //   background-color: #e1e7f0 !important;
// }

// .el-table__body tr.current-row > td {
// //   background-color: #e1e7f0 !important;
// }
</style>
<style>
.tb-edit .el-input {
  display: none;
}
.tb-edit .current-row .el-input {
  display: block;
}
.tb-edit .current-row .el-input + span {
  display: none;
}
</style>