<template>
  <div id="logon">
     <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item 
          >
      <a-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
        placeholder="Username"
      >
        <a-icon
          slot="prefix"
          type="user"
          style="color: rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
        type="password"
        placeholder="Password"
      >
        <a-icon
          slot="prefix"
          type="lock"
          style="color: rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]"
      >
        Remember me
      </a-checkbox>
      <a
        class="login-form-forgot"
        href=""
      >
        Forgot password
      </a>
      <a-button
        type="primary"
        html-type="submit"
        class="login-form-button"
      >
        Log in
      </a-button>
      Or <a href="">
        register now!
      </a>
    </a-form-item>
  </a-form>
  </div>
</template>
<script>
export default {
  name:"LogOn",
  data(){
    return{
      checkNick,
      formItemLayout:{
        labelCol: { span: 4 },
        wrapperCol: { span: 8 }
      },
      formTailLayout:{
         labelCol: { span: 4 },
         wrapperCol: { span: 8, offset: 4 }
      },
      form:this.$form.createForm(this)
    }
  },
  methods:{
      check() {
      this.form.validateFields(err => {
        if (!err) {
          console.info("success");
          this.$message.info('登陆成功');
          this.$router.push('home')
        }
      });
    },
    handleChange(e) {
      this.checkNick = e.target.checked;
      this.$nextTick(() => {
        this.form.validateFields(["password"], { force: true });
      });
    }
  }
}
</script>
<style scoped>
  #logon{
    width: 100%;
  }


#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}

    
</style>