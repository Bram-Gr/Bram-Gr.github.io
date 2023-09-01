<template>
  <div id="main">
    <!-- <h1 id="about">HOME</h1> -->

    <div class="description">
      <p>Welcome to my portfolio site! You can use the navigation at the top of the page or the terminal below to visit other pages here. To change to different pages with the terminal use the change directory command. For example, if you wanted to change to the ABOUT page you can type cd about. For more information on the terminal <a href="https://en.wikipedia.org/wiki/Windows_Terminal">click here</a>. Also feel free to reach out, I'd love to connect!</p></div>
     
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
a{
  color:rgb(79, 78, 78);
  text-decoration: none;
  font-weight: bold;
}
p{
  box-shadow: 4px 4px 10px rgba(25, 20, 20, 0.247);
    background-color:rgba(35, 36, 39, 0.347) ;
    padding:2rem;
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
