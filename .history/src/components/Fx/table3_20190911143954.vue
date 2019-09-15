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
              <!-- <el-input style="width:50%" size="small" :disabled="true" v-model="tableData[scope.$index].sel"> -->
              <!-- <el-input style="width:50%" size="small" :disabled="true"> -->
<el-tag
    v-for="item in tableData[$data.index].data"
    :key="item.professional"
    :type="item.type"
    effect="dark">
    {{ item.label }}
  </el-tag>
              <!-- </el-input> -->
              <el-button
                type="primary"
                plain
                style="cursor: pointer;"
                @click="Dialog = true; $data.index = scope.$index"
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
            :data="tableData[$data.index].data"
            border
            style="width: 100%"
            highlight-current-row
          >
            <el-table-column type="index"></el-table-column>

            <el-table-column
              v-for="(v,i) in columns"
              :prop="v.field"
              :label="v.title"
              :width="v.width"
              :key="i"
            >
              <template slot-scope="scope">
                <span v-if="scope.row.isSet">
                  <span v-if="i==0">
                  <el-autocomplete
                    class="inline-input"
                    size="mini"
                    placeholder="请输入内容"
                    :fetch-suggestions="proSearch"
                    @select="handleSelect"
                    v-model="tableData[$data.index].sel[v.field]"
                  ></el-autocomplete>
                  </span>
                  <span v-else>
                    <el-autocomplete
                    class="inline-input"
                    size="mini"
                    placeholder="请输入"
                    :fetch-suggestions="levelSearch"
                    @select="handleSelect"
                    v-model="tableData[$data.index].sel[v.field]"
                  ></el-autocomplete>
                  </span>
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
        <span>{{this.tableData[$data.index].data}}</span>
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
      total: 6,
      index: 0,
      tableData: _.cloneDeep(this.$store.state.fx3.tableData),
      columns: [
        { id: "0", field: "professional", title: "专业", width: 120 },
        { id: "1", field: "level", title: "等级", width: 150 }
      ],
      leveldata:[
        {value: "0"},{value: "1"},{value: "2"},{value: "3"},{value: "4"},{value: "5"},{value: "6"},
      ]
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



    //建议输入框下拉选项
    proSearch(queryString, cb) {
      var results = this.tableData[this.index].professional;
      cb(results);
    },
    levelSearch(queryString, cb) {
      var numberMax = this.total;
            console.log(numberMax);
      var ableMax = this.tableData[this.index].base;
            console.log(ableMax);
      var Max = 0;
      var level = [];
      if(numberMax > ableMax){
        Max = ableMax;
      }else{
        Max = numberMax;
      }
      console.log(Max);
      for(var i=0; i< Max+1; i++){
        level.push(this.leveldata[i]);
      }
      console.log(level);
      cb(level);
    },
    //建议输入框选中事件
    handleSelect(item) {
      console.log(item);
    },
    //读取表格数据
    readMasterUser(index) {
      this.tableData[this.index].data.map(i => {
        i.id = index;
        i.isSet = false;
        return i;
      });
    },
    //添加项目
    addMasterUser(index) {
      for (let i of this.tableData[this.index].data) {
        if (i.isSet) return this.$message.warning("请先保存当前编辑项");
      }
      let j = {
        professional: "",
        type:'',
        level: "",
        isSet: true
      };
      this.tableData[this.index].data.push(j);
      this.tableData[this.index].sel = JSON.parse(JSON.stringify(j));
    },
    //修改
    pwdChange(row, index, cg) {
      //点击修改 判断是否已经保存所有操作
      for (let i of this.tableData[this.index].data) {
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
        let data = this.tableData[this.index].sel;
        for (let k in data) row[k] = data[k];
        this.$message({
          type: "success",
          message: "保存成功!"
        });
        //然后这边重新读取表格数据
        this.readMasterUser(index);
        row.isSet = false;
      } else {
        this.tableData[this.index].sel = JSON.parse(JSON.stringify(row));
        row.isSet = true;
      }
    },
    //删除
    msgDelete(row, index) {
      this.tableData[this.index].data.splice(index, 1);
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