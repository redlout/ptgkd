<template>
  <div
    class="container"
    :class="$store.state.collapseState.collapse?'menu-bar-collapse-width':'menu-bar-width'"
  >
    <!-- <el-header
    :class="$store.state.collapseState.collapse?'menu-bar-collapse-width':'menu-bar-width'"
    >-->
    <span class="hamburg">
      <el-menu
        class="el-menu-demo"

        text-color="#fff"
        active-text-color="#409EFF"
        mode="horizontal"
      >
        <el-menu-item index="1" @click="Oncollapse">
          <hamburger :isActive="collapse"></hamburger>
        </el-menu-item>
      </el-menu>
    </span>
    <!-- <span @click="Oncollapse" style="left:10px;">
      <i class="el-icon-menu"></i>
    </span> -->
    <span class="tool-bar">
      <el-dropdown class="user-info-dropdown" trigger="hover">
        <el-avatar icon="el-icon-user-solid"></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>管理</el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </span>
    <!-- </el-header> -->
  </div>
</template>

<script>
import Hamburger from "@/components/Hamburger"
export default {
    components:{
      Hamburger,
  },
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    Oncollapse: function() {
      this.$store.commit("collapse");
    },
    logout: function() {
      var _this = this;
      this.$confirm("确认退出吗?", "提示", {
        type: "warning"
      })
        .then(() => {
          sessionStorage.removeItem("user");
          this.$router.push("/login");
        })
        .catch(() => {});
    }
  }
};
</script>

<style scoped lang="scss">
// .el-header {
//   background-color: rgb(243, 217, 217);
//   position: absolute;
//   right: 0px;
//   left: 200px;
//   height: 60px;
//   line-height: 60px;
//   // width: 100%;

//   .collapse-switcher {
//     width: 40px;
//     float: left;
//     cursor: pointer;
//     border-color: rgba(111, 123, 131, 0.8);
//     border-left-width: 1px;
//     border-left-style: solid;
//     border-right-width: 1px;
//     border-right-style: solid;
//     color: white;
//     background: #504e6180;
//   }
//   .user-info-dropdown {
//     font-size: 20px;
//     padding-right: 10px;
//     color: #fff;
//     cursor: pointer;
//     float: right;
//   }
//   .menu-bar-width {
//     left: 200px;
//   }
//   .menu-bar-collapse-width {
//     left: 65px;
//   }
// }

.container {
  position: absolute;
  left: 200px;
  right: 0px;
  height: 60px;
  line-height: 60px;
  background-color: rgb(243, 217, 217);
  .collapse-switcher {
    width: 40px;
    // float: left;
    left: 10px;
    cursor: pointer;
    border-color: rgba(111, 123, 131, 0.8);
    border-left-width: 1px;
    border-left-style: solid;
    border-right-width: 1px;
    border-right-style: solid;
    color: white;
    background: #504e6180;
  }
  .nav-bar {
    margin-left: auto;
    float: left;
    .el-menu {
      background: #504e6180;
    }
  }
  .menu-bar-width {
    left: 200px;
  }
  .hamburg,
  .navbar {
    float: left;
  }
  .menu-bar-collapse-width {
    left: 65px;
  }
  .tool-bar {
    float: right;
    .theme-picker {
      padding-right: 10px;
    }
    .lang-selector {
      padding-right: 10px;
      font-size: 15px;
      color: #fff;
      cursor: pointer;
    }
    .user-info-dropdown {
      top: 10px;
      font-size: 20px;
      padding-right: 20px;
      color: #fff;
      cursor: pointer;
      img {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        margin: 10px 0px 10px 10px;
        float: right;
      }
    }
  }
}
</style>