<template>
<!--
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
      <el-button @click.native.prevent="handleReset2">重置</el-button>
    </el-form-item>
  </el-form>
  -->
  
  <div class="login-container">
    <div class="logo">
      <img src="../assets/logo@2x.png" alt="">
      <div class="tit">51人品</div>
      <div class="tit-tip">人品真是好投资</div>      
    </div>
    <form action="" name="">
      <mt-field  placeholder="请输入用户名" v-model="ruleForm2.account"></mt-field>
      <mt-field  placeholder="请输入密码"  type="password" v-model="ruleForm2.checkPass"></mt-field>
      
      <div style="">
        <mt-checklist
          v-model="value"
          :options="['记住密码']">
        </mt-checklist>
        </div>
      <div class="btn_submit">
        <mt-button size="large" type="primary" @click.native.prevent="loginSubmit">登录</mt-button>
      </div>
    </form>
    <div class="quick-login" style="display:">
            <h4 class="txt-otherLogin">其他登录方式</h4>
            <a href="javascript:;" class=" quick-qq"><i class="icon icon-qq"></i><br><span class="txt-qq">QQ</span></a>
            <a href="javascript:;" class=" quick-wx"><i class="icon icon-wx"></i><br><span class="txt-wechat">微信</span></a>
            <a href="javascript:;" class=" quick-money" ><i class="icon icon-money"></i><br><span class="txt-quickMoney">京东钱包</span></a>
        </div>
  </div>
</template>

<script>
  import { requestLogin } from '../api/api';
  import { MessageBox } from 'mint-ui';
  //import NProgress from 'nprogress'
  export default {
    data() {
      return {
        value:[],
        logining: false,
        ruleForm2: {
          account: '',
          checkPass: ''
        },
        rules2: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]
        },
        checked: true
      };
    },
    methods: {
      loginSubmit(ev) {
        var _this = this;
          if (true) {
            this.logining = true;
            var loginParams = { username: this.ruleForm2.account, password: this.ruleForm2.checkPass };
            requestLogin(loginParams).then(data => {
              console.log(data)
              this.logining = false;
              let { msg, code, user } = data;
              if (code !== 200) {
                console.log(msg)
                MessageBox.alert(msg,'提示',);
              } else {
                 sessionStorage.setItem('user', JSON.stringify(user));
                 this.$router.push({ path: '/Form' });
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import '~scss_page';
  .mint-msgbox{
    border-radius:20px
  }
  .mint-button--primary{
    background:$theme-color;
  }
  .login-container {
    margin:  0 6%;
    .btn_submit{
      margin-top:20px;
    }
    .logo{
      margin:16% 0 30px 0 ;
      text-align:center;
      img{
        @include wh(19%,19%)
      }
      .tit{
        font-size:14px;
        color:rgb(237,137,71)
      }
      .tit-tip{
        color:#bfbfbf;
        font-size:12px
      }
    }
    .quick-login {
      margin-top:105px;
      height: 55px;
      position: relative;
      padding: 24.5px 0 0 0;
      border-top: 1px solid #d7d7d7;
      text-align:center;
    h4 {
      position: absolute;
      top: -29px;
      left: 50%;
      background-color: white;
      padding: 0 10px;
      color: #bfbfbf;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }
    a {
      position: relative;
      width: 25%;
      height:47px;
      color: #616161;
      margin: 10px;
      font-size: 14px;
      display:inline-block;
      span{
        display:inline-block;
      }
    }
    .icon-qq {
      left: 35%;
      background-position: 0 -129px;
      width: 22px;
      height: 22px;
    }
    @media screen and(min-width:375px){
      .icon-qq {
        left: 38%;
      }
    }
    .icon-wx {
      left: 38%;
      background-position: 0 -155px;
      width: 22px;
      height: 22px;
    }
    .icon-money {
      left: 37%;
      background-position: 0 -221px;
      width: 22px;
      height: 22px;
    }
  }
}

.icon {
    width: 22px;
    height: 22px;
    overflow: hidden;
    display:inline-block;
    background: url(../assets/iconBg.png) no-repeat;
    background-repeat: no-repeat;
    background-size: 100% auto;
}

</style>