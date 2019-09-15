<template>
  <div class="login-container">
    <el-form
      :model="loginForm"
      status-icon
      :rules="loginRules"
      ref="ruleForm"
      label="100px"
      class="login-form"
      autocomplete="on" label-position="left"
    >
      <div class="title-container">
        <h3 class="title">系统登陆</h3>
      </div>
      <el-form-item label="账号" prop="account">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input placeholder="account" type="text" v-model="ruleForm.account"></el-input>
      </el-form-item>
      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item label="密码" prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            placeholder="password"
            name="password"
            v-model="ruleForm.password"
            :type="passwordType"
          ></el-input>
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
      </el-tooltip>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('ruleForm')">提交</el-button>
        <el-button type="primary" @click="reset('ruleForm')">重置</el-button>
      </el-form-item>
      
    </el-form>
  </div>
</template>

<script>
import router from "@/router";
import Cookies from "js-cookie";
import mock from "@/mock/index.js";
export default {
  name: "Login",
  data() {
    var checkAccount = (relu, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      } else {
        callback();
      }
    };
    var checkPassword = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("密码不能为空"));
      } else {
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
      passwordType: "password",
      capsTooltip: false
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
    },
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
    }
  }
};
</script>


<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
