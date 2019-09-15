<template>
  <div style="width:90%; margin:0 auto">
    <el-row>
      <el-col :xs="12" :sm="12" :lg="24">
        <!-- 表格 -->
        <!-- 表格 -->
        <!-- 表格 -->
        <!-- 表格 -->
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
          <el-table-column prop="sel" label="专业" align="center">
            <template slot-scope="scope">
              <!-- <el-input style="width:50%" size="small" v-model="scope.row.sel"></el-input> -->
              <el-input style="width:50%" size="small" v-model="tableData.data"></el-input>
              <el-button
                type="primary"
                plain
                style="cursor: pointer;"
                @click="Dialog = true; index = scope.$index"
              >编辑</el-button>
              {{scope.row.sel}}
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <br />
    数据:{{tableData}}
    <!-- 对话框 -->
    <!-- 对话框 -->
    <!-- 对话框 -->
    <!-- 对话框 -->

    <el-dialog :visible.sync="Dialog" center>
      <!-- <el-row>
        <el-col :xs="12" :sm="12" :lg="8" v-for="(virtue) of virtue_good_List" :key="virtue.id">
          
        </el-col>
      </el-row>-->
      <el-row>
        <el-col :span="24">
          <el-table
            size="mini"
            :data="professional_table.data"
            border
            style="width: 100%"
            highlight-current-row
          >
            <el-table-column type="index"></el-table-column>

            <el-table-column
              v-for="(v,i) in professional_table.columns"
              :prop="v.field"
              :label="v.title"
              :width="v.width"
              :key="i"
            >
              <template slot-scope="scope">
                <span v-if="scope.row.isSet">
                  <el-autocomplete
                    class="inline-input"
                    size="mini"
                    placeholder="请输入内容"
                    :fetch-suggestions="querySearch"
                    @select="handleSelect"
                    v-model="professional_table.sel[v.field]"
                  ></el-autocomplete>
                                <!-- <el-input size="mini" placeholder="请输入内容" v-model="professional_table.sel[v.field]"> -->
              <!-- </el-input> -->
                </span>
                <span v-else>{{scope.row[v.field]}}</span>
              </template>
            </el-table-column>


            <el-table-column label="操作" width="100">
              <template slot-scope="scope">
                <span
                  class="el-tag el-tag--info el-tag--mini"
                  style="cursor: pointer;"
                  @click="pwdChange(scope.row,scope.$index,true)"
                >{{scope.row.isSet?'保存':"修改"}}</span>
                <span
                  v-if="!scope.row.isSet"
                  class="el-tag el-tag--danger el-tag--mini"
                  style="cursor: pointer;"
                  @click="msgDelete(scope.row, scope.$index)"
                >删除</span>
                <span
                  v-else
                  class="el-tag el-tag--mini"
                  style="cursor: pointer;"
                  @click="pwdChange(scope.row,scope.$index,false)"
                >取消</span>
              </template>
            </el-table-column>
          </el-table>
        </el-col>

        <el-col :span="24">
          <div class="el-table-add-row" style="width: 99.2%;" @click="addMasterUser($data.index)">
            <span>+ 添加</span>
          </div>
        </el-col>
        <!-- <span>{{this.tableData}}</span> -->
      </el-row>
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
      Dialog: false,
      index: 0,
      tableData: _.cloneDeep(this.$store.state.fx3.tableData),
      professional_table: _.cloneDeep(this.$store.state.fx3.professional_table),
    };
  },
  watch: {
    ruleForm: {
      handler: function(event) {
        this.$store.commit("setApple", this.tableData);
      },
      deep: true
    }
  },
  methods: {
    //建议输入框下拉选项
    querySearch(queryString, cb) {
      // var tb = this.professional_table[this.index];
      var results = this.professional_table.pro[this.index];
      cb(results);
    },
    //建议输入框选中事件
    handleSelect(item) {
      console.log(item);
    },
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
    },

    //读取表格数据
    readMasterUser(index) {
      this.professional_table.data[index].map(i => {
        i.id = index;
        i.isSet = false;
        return i;
      });
    },
    //添加项目
    addMasterUser(index) {
      for (let i of this.professional_table.data[index]) {
        if (i.isSet) return this.$message.warning("请先保存当前编辑项");
      }
      let j = {
        professional: "",
        level: "",
        isSet: true
      };
      this.professional_table.data[index].push(j);
      this.professional_table.sel[index] = JSON.parse(JSON.stringify(j));
      console.log("over");
    },
    //修改
    pwdChange(row, index, cg) {
      //点击修改 判断是否已经保存所有操作
      for (let i of this.professional_table.data[index]) {
        if (i.isSet && i.id != row.id) {
          this.$message.warning("请先保存当前编辑项");
          return false;
        }
      }
      //是否是取消操作
      if (!cg) {
        return (row.isSet = !row.isSet);
      }
      //提交数据
      if (row.isSet) {
        //项目是模拟请求操作  自己修改下
        let data = this.professional_table.sel[index];
        for (let k in data) row[k] = data[k];
        this.$message({
          type: "success",
          message: "保存成功!"
        });
        //然后这边重新读取表格数据
        this.readMasterUser(index);
        row.isSet = false;
      } else {
        this.professional_table.sel[index] = JSON.parse(JSON.stringify(row));
        row.isSet = true;
      }
    },
    //删除
    msgDelete(row, index) {
      this.professional_table.data.splice(index, 1);
      this.$message({
        type: "success",
        message: "删除成功!"
      });
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
.el-table-add-row {
  margin-top: 10px;
  width: 100%;
  height: 34px;
  border: 1px dashed #c1c1cd;
  border-radius: 3px;
  cursor: pointer;
  justify-content: center;
  display: flex;
  line-height: 34px;
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