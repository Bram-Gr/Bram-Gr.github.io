<template>
<div id="main">
  <div class="text" v-show="isWideScreen">
    <span class="delayed-text">Hi</span> <span class="delayed-text">I'm Bram, </span>
    <span class="delayed-text">Full-Stack Developer</span>
  </div>
  <div class="pic-icons"> 
 <img :src=headshot class="headshot" alt="headshot">
<div class="social-icons">
 <ul>
      <li><a href="https://github.com/Bram-Gr" target="_blank"><i class="fa fa-github"></i></a></li>
      <li><a href="https://www.linkedin.com/in/groenbram/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
      <li class="envelope" @click="handleRouterLinkClick"><i class="fa fa-envelope" ></i></li>
      <!-- <li><router-link  v-bind:to="{ name: 'contact' }" ><i class="fa fa-envelope" style="font-size:36px"></i></router-link></li> -->
    </ul>
  </div>
  </div>
</div>
</template>

<script>

import headshot from '../assets/Subject.png'
export default {
data(){
  return {
    headshot: headshot,
    isWideScreen: window.innerWidth > 500
  }
},
mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
methods: {
    handleResize() {
      this.isWideScreen = window.innerWidth > 500;
    },
    handleRouterLinkClick() {
      // Emit a custom event to notify the parent component
      this.$emit('routerLinkClicked', 'contact'); // Pass the route or any relevant information
    }
}
}
</script>

<style scoped>

@media screen and (min-width: 200px) {
  .delayed-text {
    display: inline-block;
    opacity: 0;
    animation: fadeIn 0s ease-in-out forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .delayed-text:nth-child(1) {
    animation-delay: .8s;
  }
  .delayed-text:nth-child(2) {
    animation-delay: 1.5s;
  }
  .delayed-text:nth-child(3) {
    animation-delay: 2.2s;
  }
#main{

  display: flex;
  justify-content: center;
  /* padding-top:6rem; */
  color: white;
}
.pic-icons{  
z-index: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
.headshot{
  height: 35vh;

  transform: scaleX(-1);
}

.social-icons ul{
  background-color: #5bc0be9a;
    margin-top: 2rem;
    list-style: none; 
    display: flex;
    border: 3px solid white;
    /* border-radius: 10px; */
    padding-top: .4rem;
    padding-bottom: .4rem;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.5);
  }
  li a, .envelope{
    /* z-index: 1; */
    cursor: pointer;
    margin-right:1rem;
    color:white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-size: 3rem;
  }
  .text{
    padding-top: 2rem;
    font-size: 2rem;
  }
}
@media screen and (min-width: 500px) {
  .headshot{
  height: 45vh;
  }
  .text{
    padding-top: 3rem;
    font-size: 4rem;
    max-width: 30rem;
  }
  li a, .envelope{
    margin-right:2rem;
    font-size: 2.5rem;
  }
}
</style>