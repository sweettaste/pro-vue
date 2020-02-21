<template>
  <div class="navbar">
    <a-menu theme="dark" mode="vertical">
      <a-menu-item @click="itemClick('/logon')">登录</a-menu-item>
      <a-menu-item @click="itemClick('/list')">列表</a-menu-item>
      <a-menu-item @click="itemClick('/detail')">详情</a-menu-item>
      
    </a-menu>
  </div>
</template>
<script>
export default {
  name:'NavBar',
  data(){
    return{}
    
  },
  methods:{
    //切换路由
    itemClick( route ){
      this.$router.push(route)
    }
  }
}
</script>
<style scoped>

</style>