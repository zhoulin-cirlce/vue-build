<form action="" name="">
    <mt-field placeholder="请输入用户名" v-model="ruleForm2.account"></mt-field>
    <mt-field placeholder="请输入密码" type="password" v-model="ruleForm2.checkPass"></mt-field>

    <div style="">
        <mt-checklist v-model="value" :options="['记住密码']">
        </mt-checklist>
    </div>
    <div class="btn_submit">
        <mt-button size="large" type="primary" @click.native.prevent="loginSubmit">登录</mt-button>
    </div>
</form>
<script>
export default {
  name: 'Form',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>