<template>
    <div id="app">
      <b-navbar
        id="main"
        toggleable="md"
        type="light"
        class="navigation-menu navigation-container"
      >
        <b-navbar-brand class="logo" @click="scrollTo('#home')"
          >[bram.com]</b-navbar-brand
        >
  
        <b-breadcrumb class="breadcrumbs">
          <b-breadcrumb-item @click="scrollTo('#about')">About</b-breadcrumb-item>
          <b-breadcrumb-item @click="scrollTo('#portfolio')"
            >Portfolio</b-breadcrumb-item
          >
          <b-breadcrumb-item @click="scrollTo('#contact')"
            >Contact</b-breadcrumb-item
          >
        </b-breadcrumb>
      </b-navbar>
  
      <div id="home" class="section">
        <home/>
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
    methods: {
      scrollTo(selector) {
        const element = document.querySelector(selector);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      },
    },
  };
  </script>
    
    <style scoped>
    #main{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: .5rem;
  }
    .breadcrumbs{
     padding-top: 1.8rem;
     font-size: 1.2rem;
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
  
  #app {
    height: 100%;
    background-color: #5bc0be;
  }
  
  .section {
    margin: 50px 0;
    padding: 20px;
    /* background-color: #fff; */
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
  }
  </style>