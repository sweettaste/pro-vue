<template>
  <div id="app">
    <layout>
      
    </layout>
     
  </div>
</template>

<script>
import NavBar from './components/navbar/NavBar'
import Bredcrumb from './components/breadcrumb/Bredcrumb'
import Layout from './components/layout/Layout'

export default {
  name: 'App',
  components: {
    NavBar,
    Bredcrumb,
    Layout

  }
}
</script>

<style>
#app {
  height: 100vh;
}
.navbar{
  height: 100%;
  background: #001529;
  width: 120px;
  position: fixed;
  top:0;
  left: 0;
  bottom: 0;
  z-index: 10;
}
.bread{
  position: relative;
  left: 120px;
  top: 5px;
}
.view{
  position: relative;
  left: 120px;
}
</style>


