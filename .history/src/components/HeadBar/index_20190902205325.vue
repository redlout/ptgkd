<template>
  <el-header :class="$store.state.collapseState.collapse?'menu-bar-collapse-width':'menu-bar-width'">
    <div >
    <span @click="Oncollapse">
      <i class="el-icon-menu"></i>
    </span>

    <el-dropdown>
      <i class="el-icon-user" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item>管理</el-dropdown-item>
        <!-- <el-dropdown-item divided @click="logout">登出</el-dropdown-item> -->
      </el-dropdown-menu>
    </el-dropdown>
    </div>
  </el-header>
  <!-- <el-main></el-main> -->
</template>

<script>
export default {
  data(){
    return{
      isCollapse:false,
    };
  },
  methods:{
    Oncollapse: function(){
      this.$store.commit('collapse');
    }
  }
}
</script>

<style>
.el-header {
  position: absolute;
  background-color: rgb(243, 217, 217);
  left: 200px;
  right: 0px;
  height: 60px;
  line-height: 60px;
}
  .collapse-switcher {
    width: 40px;
    float: left;
    cursor: pointer;
    border-color: rgba(111, 123, 131, 0.8);
    border-left-width: 1px;
    border-left-style: solid;
    border-right-width: 1px;
    border-right-style: solid;
    color: white;
    background: #504e6180;
  }
    .menu-bar-width{
    left: 200px;
  }
    .menu-bar-collapse-width{
    left: 65px;
  }
</style>