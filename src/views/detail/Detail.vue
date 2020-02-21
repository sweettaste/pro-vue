<template>
  <div class="detail">
      <div>
        <button @click="toEdit">编辑</button>
      </div>
     <table>
       <tr>
         <td>人员id</td><td>姓名</td><td>年龄</td><td>Email</td><td>手机号</td>
       </tr>
     </table>
  </div>
</template>
<script>
export default {
  name:'Detail',
  methods:{
    toEdit(){
      this.$router.push('/edit')
    }
  }
}
</script>
<style scoped>
.detail{
  margin-top: 30px;
}
table tr td{
  padding: 10px;
}

</style>