<template>


  <div v-if="breadList.length">
      
    <a-breadcrumb>
      当前位置：
    <a-breadcrumb-item  v-for="item in breadList">{{item.meta.title}}</a-breadcrumb-item>
    </a-breadcrumb>
  
  </div>
</template>
<script>
export default {
  name:'Breadcrumb',
  data(){
    return {
      breadList:[] //路由集合
    }
  },
  watch:{
    //监听活动路由发生改变
    $route(){
      this.getBreadcrumb()
    }
  },
  methods:{
    getBreadcrumb(){
       let matched = this.$route.matched;
       console.log()
      console.log(this.$route)
      if(this.$route.path=== "/edit"){
         matched = [{ path: "/detail", meta: { title: "详情" } }].concat(matched);
      }
     this.breadList = matched;
     console.log(this.breadList)
    }
  }
    
}
</script>