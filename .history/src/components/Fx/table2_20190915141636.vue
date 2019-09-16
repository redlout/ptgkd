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
            <template slot-scope="scope">
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
            <template slot-scope="scope">
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
            <template slot-scope="scope">
              <el-input style="width:80%" size="small" v-model="scope.row.total" :disabled="true"></el-input>
              <!-- <span v-bind:value="scope.row.total">{{scope.row.base+ scope.row.inner}}</span> -->
            </template>
          </el-table-column>
          <el-table-column prop="additional" label="附加成功" align="center">
            <template slot-scope="scope">
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
    <br />
    <br />
  </div>
</template>

<script>
import router from "@/router";
import Cookies from "js-cookie";
import mock from "@/mock/index.js";
import _ from "lodash";
import { mapState } from "vuex";
import datajs from '@/components/Fx/js/handle.js';
export default {
  name: "Fxtable2",
  data() {
    return {
      //数据直接从vuex取
      tableData: _.cloneDeep(this.$store.state.fx2.tableData),
      total_physiological: 3,
      total_mind: 2,
      total_interactive: 1,
      total: 3
    };
  },
  watch: {
    tableData: {
      handler: function(event) {
        //一旦数据改变就向vuex提交
        this.$store.commit("setTable", this.tableData);
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
    //响应变化
    handleEdit(index, row) {
      row.total = row.base + row.inner;
      //如果把方法封装到js内会造成 第一次点击onclick方法无效，第二次才会开始生效的bug
      // 但是由于影响不大，暂时使用这种方法，注释中的方法可以正常生效，但是没有封装
      datajs.manage();
      //速度
      // this.handleSpeed();

    },
    // handleSpeed() {
    //   //力量+敏捷+体积+敏捷附加×5
    //   this.$store.state.fx4.speed =

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