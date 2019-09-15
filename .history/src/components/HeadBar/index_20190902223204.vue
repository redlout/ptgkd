<template>
    <div class="container"
      :class="$store.state.collapseState.collapse?'menu-bar-collapse-width':'menu-bar-width'"
    >
      <span @click="Oncollapse">
        <i class="el-icon-menu"></i>
      </span>
      <el-dropdown class="user-info-dropdown" trigger="hover">
        <el-avatar icon="el-icon-user-solid"></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>管理</el-dropdown-item>
          <el-dropdown-item divided @click="logout">登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    Oncollapse: function() {
      this.$store.commit("collapse");
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  background-color: rgb(243, 217, 217);
  position: absolute;
  left: 200px;
  right: 0px;
  height: 60px;
  line-height: 60px;
  width: 100%;
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
  .user-info-dropdown {
  font-size: 20px;
  padding-right: 10px;
  color: #fff;
  cursor: pointer;
  float: right;
}
}

.menu-bar-width {
  left: 200px;
}
.menu-bar-collapse-width {
  left: 65px;
}


</style>