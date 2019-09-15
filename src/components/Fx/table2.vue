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
      // this.handleStrike();
      // this.handleDefense();
      // this.handleLife();
      // this.handleWillpower();
      // this.handleWill();
      // this.handleReflection();
      // this.handleInvestigation();
      // this.handleSensitiverange();
      // this.handleStrong();
    },
    // handleSpeed() {
    //   //力量+敏捷+体积+敏捷附加×5
    //   this.$store.state.fx4.speed =
    //     this.tableData[0].base +
    //     this.tableData[1].base +
    //     this.$store.state.fx1.form.volume +
    //     this.tableData[1].additional * 5;
    // },
    // handleStrike() {
    //   //先攻 （敏捷+沉着+沉着附加×4）= 18
    //   this.$store.state.fx4.strike =
    //     this.tableData[1].base +
    //     this.tableData[8].base +
    //     this.tableData[8].additional * 4;
    // },
    // handleDefense() {
    //   //防御 （敏捷与感知中较低者）=  1 +较高者的附加成功
    //   if (this.tableData[1].base > this.tableData[4].base) {
    //     this.$store.state.fx4.defense =
    //       this.tableData[4].base + this.tableData[1].additional;
    //   } else {
    //     this.$store.state.fx4.defense =
    //       this.tableData[1].base + this.tableData[4].additional;
    //   }
    // },
    // handleLife() {
    //   // 生命值 （耐力+体积+耐力附加×2）=6
    //   this.$store.state.fx4.life =
    //     this.tableData[2].base +
    //     this.$store.state.fx1.form.volume +
    //     this.tableData[2].additional * 2;
    // },
    // handleWillpower() {
    //   // 意志力池 （决心+沉着+决心附加×2）= 9
    //   this.$store.state.fx4.willpower =
    //     this.tableData[5].base +
    //     this.tableData[8].base +
    //     this.tableData[5].additional * 2;
    // },
    // handleWill() {
    //   // 意志 （决心+专注+意志）=5
    //   for (var i = 0; i < this.$store.state.fx3.tableData[7].data.length; i++) {
    //     if (this.$store.state.fx3.tableData[7].data[i].professional == "意志") {
    //       this.$store.state.fx4.will =
    //         this.tableData[5].base +
    //         this.$store.state.fx3.tableData[7].base +
    //         this.$store.state.fx3.tableData[7].data[i].level;
    //     } else {
    //       this.$store.state.fx4.will =
    //         this.tableData[5].base + this.$store.state.fx3.tableData[7].base;
    //     }
    //   }
    // },
    // handleReflection() {
    //   // 反射 （敏捷+运动+反射）= 12
    //   for (var i = 0; i < this.$store.state.fx3.tableData[0].data.length; i++) {
    //     if (this.$store.state.fx3.tableData[0].data[i].professional == "反射") {
    //       this.$store.state.fx4.reflection =
    //         this.tableData[1].base +
    //         this.$store.state.fx3.tableData[0].base +
    //         this.$store.state.fx3.tableData[0].data[i].level;
    //     } else {
    //       this.$store.state.fx4.reflection =
    //         this.tableData[1].base + this.$store.state.fx3.tableData[0].base;
    //     }
    //   }
    // },
    // handleStrong() {
    //   // 强韧 （耐力+生存+强韧）= 2
    //   for (var i = 0; i < this.$store.state.fx3.tableData[3].data.length; i++) {
    //     if (this.$store.state.fx3.tableData[3].data[i].professional == "强韧") {
    //       this.$store.state.fx4.strong =
    //         this.tableData[2].base +
    //         this.$store.state.fx3.tableData[3].base +
    //         this.$store.state.fx3.tableData[3].data[i].level;
    //     } else {
    //       this.$store.state.fx4.investigation =
    //         this.tableData[2].base + this.$store.state.fx3.tableData[3].base;
    //     }
    //   }
    // },
    // handleInvestigation() {
    //   // 侦查 （感知+洞察+侦查）= 2
    //   for (var i = 0; i < this.$store.state.fx3.tableData[8].data.length; i++) {
    //     if (this.$store.state.fx3.tableData[8].data[i].professional == "侦察") {
    //       this.$store.state.fx4.investigation =
    //         this.tableData[4].base +
    //         this.$store.state.fx3.tableData[8].base +
    //         this.$store.state.fx3.tableData[8].data[i].level;
    //     } else {
    //       this.$store.state.fx4.investigation =
    //         this.tableData[4].base + this.$store.state.fx3.tableData[8].base;
    //     }
    //   }
    // },
    // handleSensitiverange() {
    //   // 敏感范围 （感知*20米+感知上的附加成功*20米）= 20
    //   this.$store.state.fx4.sensitiverange =
    //     this.tableData[4].base * 20 + this.tableData[4].additional * 20;
    // },
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