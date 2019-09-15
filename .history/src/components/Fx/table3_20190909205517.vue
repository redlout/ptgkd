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
          <el-table-column prop="base" label="基础" align="center" width="200px">
            <template slot-scope="scope">
              <el-input-number
                size="small"
                :min="0"
                controls-position="right"
                v-model="scope.row.base"
                @change="handleEdit(scope.$index, scope.row)"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column prop="additional" label="附加成功和各种加值" align="center" width="230px;">
            <template slot-scope="scope">
              <el-input
                size="small"
                style="width:80%"
                v-model="scope.row.additional"
                :disabled="true"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="professional" label="专业" align="center">
            <template slot-scope="scope">
              <el-input style="width:50%" size="small" v-model="scope.row.professional"></el-input>
              <el-button type="primary" plain style="cursor: pointer;" @click="Dialog = true; index = scope.$index" >编辑</el-button>
              {{scope.row.professional}}
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <br />
    <!-- 数据:{{tableData}} -->

        <el-dialog  :visible.sync="Dialog" center width:70%>
      <!-- <el-row>
        <el-col :xs="12" :sm="12" :lg="8" v-for="(virtue) of virtue_good_List" :key="virtue.id">
          
        </el-col>
      </el-row> -->
    <dialogd></dialogd>
    </el-dialog>
  </div>
</template>

<script>
import router from "@/router";
import Cookies from "js-cookie";
import mock from "@/mock/index.js";
import _ from "lodash";
import dialogd from "./dialog";
export default {
  name: "Fxtable2",
  data() {
    return {
      //   abilityForm: _.cloneDeep(this.$store.state.fx2.form)
    //   speice:["生理","心智","互动"],
    //   name_physiological:["运动","射击","武技","求生"],
    //   name_mind:["学识","器用","手艺","专注"],
    //   name_interactive:["洞察","隐蔽","表达","社交"],
    Dialog : false,
    index : 0,
      tableData: [
        {
          species: "生理",
          name: "运动",
          base: "",
          additional: "",
          professional: "",
          data: [{

          }]
        },
        {
          name: "射击",
          base: "",
          additional: "",
          professional: ""
        },
        {
          name: "武技",
          base: "",
          additional: "",
          professional: ""
        },
        {
          name: "求生",
          base: "",
          additional: "",
          professional: ""
        },
        {
          species: "心智",
          name: "学识",
          base: "",
          additional: "",
          professional: ""
        },
        {
          name: "器用",
          base: "",
          additional: "",
          professional: ""
        },
        {
          name: "手艺",
          base: "",
          additional: "",
          professional: ""
        },
        {
          name: "专注",
          base: "",
          additional: "",
          professional: ""
        },
        {
          species: "互动",
          name: "洞察",
          base: "",
          additional: "",
          professional: ""
        },
        {
          name: "隐秘",
          base: "",
          additional: "",
          professional: ""
        },
        {
          name: "表达",
          base: "",
          additional: "",
          professional: ""
        },
        {
          name: "社交",
          base: "",
          additional: "",
          professional: ""
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
        if (rowIndex % 4 === 0) {
          return {
            rowspan: 4,
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
    //响应变化
    handleEdit(index, row) {
      row.total = row.base + row.inner;
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
  },
  components:{
    dialogd
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