<template>
  <div id="app">


    <div class="nav-container">
    <b-navbar
      id="main"
      toggleable="md"
      type="light"
      class="navigation-menu navigation-container"
    >
      <b-navbar-brand class="logo" @click="scrollTo('#home', 'home')"
        >
        <span :class="{ 'active': activeBreadcrumb === 'home' }">[bram.com]</span>
        </b-navbar-brand
      >

      <b-breadcrumb class="breadcrumbs">
        <b-breadcrumb-item @click="scrollTo('#about', 'about')">
          <span :class="{ 'active': activeBreadcrumb === 'about' }">About</span>
        </b-breadcrumb-item>
        <b-breadcrumb-item @click="scrollTo('#portfolio', 'portfolio')"
          >
          <span :class="{ 'active': activeBreadcrumb === 'portfolio' }">Portfolio</span>
          </b-breadcrumb-item
        >
        <b-breadcrumb-item @click="scrollTo('#contact', 'contact')"
          >
          <span :class="{ 'active': activeBreadcrumb === 'contact' }">Contact</span>
          </b-breadcrumb-item
        >
      </b-breadcrumb>
    </b-navbar>
  </div>



<div class="content">
    <div id="home" class="section">
      <home @routerLinkClicked="handleRouterLinkClicked" />
    </div>

    <div id="about" class="section">
      <about/>
    </div>

    <div id="portfolio" class="section">
     <portfolio/>
    </div>

    <div id="contact" class="section">
   <contact/>
    </div>
  </div>

  </div>
</template>
  
  <script>
import {
  BNavbar,
  BNavbarBrand,
  BBreadcrumb,
  BBreadcrumbItem,
} from "bootstrap-vue";
import Home from './views/HomeView.vue';
import About from './views/AboutView.vue';
import Portfolio from './views/PortfolioView.vue';
import Contact from './views/ContactView.vue';
export default {
  components: { BNavbar, BNavbarBrand, BBreadcrumb, BBreadcrumbItem, Home, About, Portfolio, Contact },
  data(){
    return{
      activeBreadcrumb: 'home'
    }
  },
  methods: {
    handleRouterLinkClicked(route) {
      // notifies App.vue of emitted event
        this.$nextTick(() => {
      // uses the contact and calls on App.vue's scrollTo
        this.scrollTo(`#${route}`, route);
      });
    },
    scrollTo(selector, targetId) {

      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        this.activeBreadcrumb = targetId;
      }
    },
  },
};
</script>
  
  <style scoped>
  .section{
    height: 100vh;
  }
.nav-container{
  z-index: 1;
  background-color: #5bc0be;
  position: sticky;
    top: 0;
}
  .navigation-container{
     position: sticky;
    top: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: .5rem;
}
  .breadcrumbs{
   padding-top: 1.8rem;
   font-size: 1.2rem;
}
.navbar-brand{
    color:#1C2541;  
    cursor: pointer;
}
a{
  text-decoration: none;
  color:#1C2541;
}
.router-link-exact-active{
    font-weight: bold;
  text-decoration: underline;
}
.active{
  font-weight: bold;
  text-decoration: underline;
}

#app {
  height: 100%;
  background-color: #5bc0be;
}

</style>