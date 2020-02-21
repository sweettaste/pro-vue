<template>
  <div>
    <template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
      <a-sub-menu key="1">
       <span slot="title"><a-icon type="user"></a-icon>用户管理</span>
          <a-menu-item key="11" @click="itemClick('/list')">列表</a-menu-item>
          <a-menu-item key="12" @click="itemClick('/detail')">详情</a-menu-item>
      </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <bredcrumb></bredcrumb>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view class="view"></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

  </div>
</template>
<script>
import Bredcrumb from '../breadcrumb/Bredcrumb'
export default {
  name:'Layout',
  data(){
    return {
      collapsed: false,
    }
  },
  methods:{
    itemClick( route ){
      this.$router.push(route)
    } 
  },
  components:{
    Bredcrumb
  }
}
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>