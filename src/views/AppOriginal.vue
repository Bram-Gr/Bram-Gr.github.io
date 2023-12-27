<template>
    <div id="app">
  <nav-bar/>
  
  <router-view/>
  
  
  </div>
  </template>
  
  <script>
  
  import NavBar from './components/NavBar.vue'
  export default {
  components: {NavBar}
  }
  </script>
  
  <style scoped>
  #app{
    height: 100vh;
    background-color: #5BC0BE;
  }
  </style>