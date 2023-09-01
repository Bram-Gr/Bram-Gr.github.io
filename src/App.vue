<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
    
 
    <IconView/>
  </div>
  
</template>

<script>
import NavBar from './components/NavBar.vue'

import IconView from './views/IconView.vue';

export default {
  components: { NavBar, IconView},
  name: 'App',
  data() {
    return {
    
      // footerContent: 'Default footer content',
  
    };
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Determine how close to the bottom the user is (e.g., within 100px)
      const distanceToBottom = documentHeight - (scrollY + windowHeight);

      // Show the footer when the user is close to the bottom
      if (distanceToBottom < 100) {
        this.footerContent = 'Footer content at bottom of page';
      } else {
        this.footerContent = 'Default footer content';
      }
    },
  }
}
</script>

<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
