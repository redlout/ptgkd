<template>
  <div class="container" :class="$store.state.collapse?'menu-bar-collapse-width':'menu-bar-width'">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <el-row :gutter="40">
     <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Main",
  data: {},
  components: {},

  methods: {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.container {
  position: absolute;
  top: 60px;
  bottom: 0px;
  left: 200px;
  right: 0px;
  .breadcrumb {
    padding: 10px;
    border-color: rgba(38, 86, 114, 0.2);
    border-bottom-width: 1px;
    border-bottom-style: solid;
    background: rgba(138, 158, 170, 0.2);
  }
  .menu-bar-width {
    left: 200px;
  }
  .menu-bar-collapse-width {
    left: 65px;
  }
}
.el-row{
  top:20px;
  margin-bottom: 20px;
  &:last-child{
    margin-bottom: 0; 
  }
}
.el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>