<template>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    label="100px"
    class="demo-ruleForm login-container"
  >
    <h3 class="title">系统登陆</h3>
    <el-form-item label="账号" prop="account">
      <el-input placeholder="account" type="text" v-model="ruleForm.account"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        placeholder="password"
        name="password"
        v-model="ruleForm.password"
        show-password
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit('ruleForm')">提交</el-button>
      <el-button type="primary" @click="reset('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import router from "@/router";
import Cookies from "js-cookie";
import mock from "@/mock/mock.js";
export default {
  name: "Login",
  data() {
    var checkAccount = (relu, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      }else{
        callback();
      }
    };
    var checkPassword = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("密码不能为空"));
      }else{
        callback();
      }
    };
    return {
      ruleForm: {
        account: "",
        password: ""
      },
      rules: {
        account: [{ validator: checkAccount, trigger: "blur" }],
        password: [{ validator: checkPassword, trigger: "blur" }]
      },
      loading: false,
      passwordType: "password"
    };
  },
  // mounted(){
  //   if(this.ruleForm.account ===''){
  //     this.$refs.account.focus()
  //   }else if(this.reluForm.password === ''){
  //     this.$refs.password.focus()
  //   }
  // },
  methods: {
    onSubmit(ruleForm) {
      let userInfo = {
        account: this.ruleForm.account,
        password: this.ruleForm.password
      };
      this.$api
        .login(JSON.stringify(userInfo))
        .then(res => {
          alert(res)
          Cookies.set("token", res.data.token);
          sessionStorage.setItem("user", userInfo.account);
          this.$router.push("/");
        })
        .catch(res => {
          alert(res);
        });
    },
    reset(ruleForm) {
      this.$refs[ruleForm].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 150px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #adc1d4;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: #adc1d4;
    // color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: #adc1d4;
    // color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>