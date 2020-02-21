<template>
  <div>
    <a-form :form="form">
      <a-form-item 
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="姓名">
      <a-input
      type="string" v-decorator="['name',{
        rules:[
        {required:true,message:'请输入姓名'} ]}]" placeholder="请输入姓名"></a-input>
      </a-form-item>
       <a-form-item 

          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="年龄：">
      <a-input
      type="number" v-decorator="['age',{
        rules:[
        {required:false,message:'请输入年龄'} ]}]" placeholder="请输入年龄"></a-input>
      </a-form-item>
       <a-form-item 
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="Email">
      <a-input
      type="string" @blur="validateElmailBlur" v-decorator="['email',{
        rules:[
        {required:false,message:'请输入邮件'} ]}]" placeholder="请输入邮件"></a-input>
      </a-form-item>
       <a-form-item 
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="手机号：">
      <a-input
      type="string" @blur="validatePhoneBlur" v-decorator="['phone',{
        rules:[
        {required:false,message:'请输入手机号'} ]}]" placeholder="请输入手机号"></a-input>
      </a-form-item>
      <a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
        <a-button type="primary" @click="checkInfo">提交</a-button>
      </a-form-item>
    </a-form>

  </div>
</template>
<script>
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
};
export default {
  name:"Edit",
  data(){
    return{
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this)
    }
  },
  beforeCreate(){
   
    
  },
  methods:{
    validateElmailBlur(e){
       const validatePhoneReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (e.target.value && !validatePhoneReg.test(e.target.value)) {
          const arr = [{
            message: '您输入的email格式不正确!',
            field: 'email',
          }]
          this.form.setFields({ email: { value: e.target.value, errors: arr } })
        }
    },
    validatePhoneBlur(e) {
      const validatePhoneReg = /^1\d{10}$/
      if (e.target.value && !validatePhoneReg.test(e.target.value)) {
        const arr = [{
          message: '您输入的手机格式不正确!',
          field: 'phone',
        }]
        this.form.setFields({ phone: { value: e.target.value, errors: arr } })
        }
      },
      checkInfo(){
          this.form.validateFields((err,value) => {
            console.log(err,value);
            if(!err){
              //提交数据
            }
      });
      }
      
  }
}
</script>