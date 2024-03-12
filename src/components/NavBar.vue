<template>
    <b-navbar
    id="main"
    toggleable="md"
    type="light"
    class="navigation-menu navigation-container"
  >


  <b-navbar-brand class="logo" :to="{name: 'home'}"
        >[bram.com]</b-navbar-brand>


  <b-breadcrumb class="breadcrumbs">  
<b-breadcrumb-item :to="{name: 'about'}">About</b-breadcrumb-item>
<b-breadcrumb-item :to="{name: 'portfolio'}">Portfolio</b-breadcrumb-item>
<b-breadcrumb-item :to="{name: 'contact'}">Contact</b-breadcrumb-item>
  </b-breadcrumb>

  </b-navbar>
</template>

<script>
import {
  BBreadcrumb,
BBreadcrumbItem
} from "bootstrap-vue";
export default {
components:{ BBreadcrumb, BBreadcrumbItem}
}
</script>

<style scoped>
.breadcrumbs{
   padding-top: 1.8rem;
   font-size: 1.2rem;
}
#main{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: .5rem;
}
a.navbar-brand{
    color:#1C2541;  
}
a{
  text-decoration: none;
  color:#1C2541;
}
.router-link-exact-active{
    font-weight: bold;
  text-decoration: underline;

}
</style>