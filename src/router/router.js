import Vue from 'vue'
import VueRouter from 'vue-router'

//加载组件
// const Index = () => import('../views/index/Index')
const LogOn = () => import('../views/logon/LogOn');
const List = () => import('../views/list/List');
const Detail = () => import('../views/detail/Detail');
const Edit = () => import('../views/edit/Edit');

Vue.use(VueRouter);

//路由匹配
const routes = [
  { path:'/',redirect:'/logon'},//默认页面
  // { path:'/index',component:Index,name:'index',meta:{title:'首页'}},
  { path:'/logon',component:LogOn ,name:'logon',meta:{   title:'登录'}},
  { path:'/list',component:List ,name:'list',meta:{title:'列表'}},
  { path:'/detail',component:Detail,name:'detail',meta:{title:'详情'} },
  { path:'/edit',component:Edit ,name:'edit',meta:{title:'编辑'}}
]

//创建路由
const router = new VueRouter({
  routes,
  mode:'history'
});

export default router