<template>
  <div id="main">
    <!-- <h1 id="about">HOME</h1> -->

    <div class="description">
      <p>Hello, my name is Bram Groen, welcome to my portfolio website! You'll find details about projects
        I've worked on in the portfolio page. If you'd like to read about some of the technologies 
        I've used in respect to the programming languages I've worked with, that can be found on About page. 
        The About page also share some details about my education background as well as ways to get in contact.
        Feel free to reach out, I'd love to connect!</p></div>
     
<terminal-window/>
  </div>
</template>
<script>
import TerminalWindow from '@/components/TerminalWindow.vue'
// import IconView from './IconView.vue';
export default{
  components: { TerminalWindow },
// components:{IconView}
}

</script>
<style scoped>
 @media screen and (min-width: 300px) {

p{

  text-align: left;
}
.description{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start; /* Change this to flex-start */
  color: whitesmoke;
  font-weight: bold;
  padding: 20px;
  /* margin-top: 7rem; */
  /* margin-left: 2rem;
  margin-right: 2rem; */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 1rem;

  }
  @media screen and (min-width:770px) {
    .description{
      font-size: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
    }
  }
}

</style>
