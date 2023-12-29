<template>
<div id="main">
  <div class="text">
    <span class="delayed-text">Hi</span> <span class="delayed-text">I'm Bram, </span>
    <span class="delayed-text">Full-Stack Developer</span>
  </div>
  <div class="pic-icons"> 
 <img :src=headshot class="headshot" alt="headshot">
<div class="social-icons">
 <ul>
      <li><a href="https://github.com/Bram-Gr" target="_blank"><i class="fa fa-github" style="font-size:36px"></i></a></li>
      <li><a href="https://www.linkedin.com/in/groenbram/" target="_blank"><i class="fa fa-linkedin" style="font-size:36px"></i></a></li>
      <li class="envelope" @click="handleRouterLinkClick"><i class="fa fa-envelope" style="font-size:36px"></i></li>
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
    headshot: headshot
  }
},
methods: {
    handleRouterLinkClick() {
      // Emit a custom event to notify the parent component
      this.$emit('routerLinkClicked', 'contact'); // Pass the route or any relevant information
    }
  }
}
</script>

<style scoped>

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
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
.headshot{
  height: 45vh;
  transform: scaleX(-1);
}
.social-icons ul{
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
    cursor: pointer;
    margin-right:2rem;
    color:white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  .text{
    padding-top: 3rem;
    font-size: 4rem;
    max-width: 30rem;
  }
</style>