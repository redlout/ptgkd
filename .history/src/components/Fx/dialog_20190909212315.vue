<template>
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
              <el-input size="mini" placeholder="请输入内容" v-model="professional_table.sel[v.field]"></el-input>
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
      <div class="el-table-add-row" style="width: 99.2%;" @click="addMasterUser()">
        <span>+ 添加</span>
      </div>
    </el-col>
  </el-row>
</template>

<script>
//id生成工具 这个不用看 示例而已 模拟后台返回的id
var generateId = {
  _count: 1,
  get() {
    return +new Date() + "_" + this._count++;
  }
};
export default {
  data() {
    return {
      professional_table: {
        columns: [
          { field: "type", title: "专长", width: 120 },
          { field: "addport", title: "等级", width: 150 },
        ],
        data: [],
        sel: "null", //选中行
      }
    };
  },

  methods: {
    //读取表格数据
    readMasterUser() {
      //根据实际情况，自己改下啊
      this.professional_table.data.map(i => {
        i.id = generateId.get(); //模拟后台插入成功后有了id
        i.isSet = false; //给后台返回数据添加`isSet`标识
        return i;
      });
    },
    //添加账号
    addMasterUser() {
      for (let i of this.professional_table.data) {
        if (i.isSet) return this.$message.warning("请先保存当前编辑项");
      }
      let j = {
        id: 0,
        type: "",
        addport: "",
        isSet: true,
        _temporary: true
      };
      this.professional_table.data.push(j);
      this.professional_table.sel = JSON.parse(JSON.stringify(j));
    },
    //修改
    pwdChange(row, index, cg) {
      //点击修改 判断是否已经保存所有操作
      for (let i of this.professional_table.data) {
        if (i.isSet && i.id != row.id) {
          this.$message.warning("请先保存当前编辑项");
          return false;
        }
      }
      //是否是取消操作
      if (!cg) {
        if (!this.professional_table.sel.id) this.professional_table.data.splice(index, 1);
        return (row.isSet = !row.isSet);
      }
      //提交数据
      if (row.isSet) {
        //项目是模拟请求操作  自己修改下
          let data = this.professional_table.sel;
          for (let k in data) row[k] = data[k];
          this.$message({
            type: "success",
            message: "保存成功!"
          });
          //然后这边重新读取表格数据
          this.readMasterUser();
          row.isSet = false;
      } else {
        this.professional_table.sel = JSON.parse(JSON.stringify(row));
        row.isSet = true;
      }
    }
  }
};
</script>



<style lang="scss" scoped>
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