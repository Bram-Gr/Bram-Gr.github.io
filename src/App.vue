<template>
  <div id="app">
    
    <div class="wave-container">
<wave-bar/>
  </div>

    <div class="nav-container">
    <b-navbar
      id="main"
      toggleable="md"
      type="light"
      class="navigation-menu navigation-container"
    >
  


      <b-navbar-brand class="logo" @click="scrollTo('#home', 'home')"
        >
        <span   :class="{ 'active': activeBreadcrumb === 'home' }">Bram-Gr</span>
        </b-navbar-brand
      >



<div class="collapse-nav" v-if="mobile">

  <!-- <b-nav-item  style="position:absolute; top: 0; list-style:none; font-size: 2rem"  @click="scrollTo('#home', 'home')"
        >
      [bram.com]
        </b-nav-item
      >
    </div> -->
      <b-navbar-toggle class="navbar-toggler-icon" target="nav-collapse"
      >&nbsp;</b-navbar-toggle
    >

    <b-collapse  class="navigation-menu-labels" is-nav id="nav-collapse">
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="ml-auto" @click="scrollTo('#about', 'about')">
        About
         </b-nav-item
        >
        <b-nav-item class="ml-auto"  @click="scrollTo('#portfolio', 'portfolio')">
       Portfolio
         </b-nav-item
        >
        <b-nav-item class="ml-auto" @click="scrollTo('#contact', 'contact')">
         Contact
         </b-nav-item
        >
     

      
      </b-navbar-nav>
    </b-collapse>
</div>



      <b-breadcrumb class="breadcrumbs" v-else>
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
import WaveBar from './components/WaveBar.vue'
export default {
  components: { BNavbar, BNavbarBrand, BBreadcrumb, BBreadcrumbItem, Home, About, Portfolio, Contact, WaveBar },
  data(){
    return{
      activeBreadcrumb: null,
      userScrolled: false,
      mobile: window.innerWidth < 500
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); 
  
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
  const sections = ['home', 'about', 'portfolio', 'contact'];

  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();

      console.log(section, rect.top, rect.bottom);

      if (rect.top <= window.innerHeight / 2 && rect.bottom > 0) {
        this.activeBreadcrumb = section;

      }
    }
  }
},

  scrollTo(selector, targetId) {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
      this.activeBreadcrumb = targetId;
    }, 500);
    }
  },
  handleRouterLinkClicked(route) {
    this.userScrolled = true;
    this.scrollTo(`#${route}`, route);
  },
},
};
</script>
  
  <style scoped>

@media screen and (min-width: 200px) {
.collapse-nav{
  padding-top: 1rem;
  padding-right: .4rem;
 right: 0;
 top: 0;
 position: fixed;
}

  button.navbar-toggler.navbar-toggler-icon.not-collapsed {
  
    position:absolute;
    right: 0;
    top:0;
    margin:.5rem;
    padding: 1rem;
  }
  button.navbar-toggler.navbar-toggler-icon.collapsed {
  
  position:absolute;
  right: 0;
  top:0;
  margin:.5rem;
  padding: 1rem;
}
.navigation-menu-labels{
margin-top: 2rem;
text-align: right;
}
.wave-container{
  /* position:absolute;
  z-index: 1; */
}
.section:nth-child(1){
  position: inherit;
margin-top: -3rem;

}
.section:nth-child(4){
  position: inherit;
margin-top: 28rem;
display: flex;
justify-content: center;
/* z-index: -1; */
}
.section:nth-child(3){
margin-top: 2rem;
}
  .section{
padding-top: 10rem;
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
  /* height: 100%; */
  background-color: #5bc0be;

}
}
@media screen and (min-width: 500px) {
  .section{
padding-top: 7rem;
height: 100vh;
  }
  .section:nth-child(3){
margin-top: 8rem;
}
  .section:nth-child(4){

margin-top: 25rem;

}


}




</style>