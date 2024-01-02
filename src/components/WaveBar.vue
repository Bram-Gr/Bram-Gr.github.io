<template>
  <div id="main" v-show="isWideScreen">


    <div class="line line-1"> 
  <img class="wave wave1" :src="wave1">
   </div>

   <div class="line line-2"> 
  <img class="wave wave2" :src="wave2">
   </div>

   <div class="line line-3"> 
  <img class="wave wave3" :src="wave3">
   </div>

  </div>
</template>

<script>
import wave1 from  '../assets/1.png';
import wave2 from  '../assets/2.png';
import wave3 from  '../assets/3.png';
export default {
    data(){
    return{
      isWideScreen: window.innerWidth > 500,
      wave1: wave1,
      wave2: wave2,
      wave3: wave3
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
    }
}
}
</script>

<style scoped>
.line{
    position: absolute;
    width: 100%;
    overflow: hidden;
    height: 100%;
}

#main{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    overflow: hidden;
}
.line-1{
  z-index: 15;
  opacity: .5;
}

.line-2{
  z-index: 10;
  opacity: .7;
}

.line-3{
  z-index: 5;
}

.wave{
   position: absolute;
   bottom: 0;
  left: 0;
  width: 200%;
  height: 12rem;
  background-repeat: repeat no-repeat;
  background-position: 0 bottom;
  transform-origin: center bottom; 
}

.wave1{
    -webkit-background-size: 50% 80px;
    background-size: 50% 80px
}

.wave2{
    -webkit-background-size: 50% 100px;
    background-size: 50% 100px;
    animation: animate 12s linear infinite;
}

.wave3{
    -webkit-background-size: 50% 80px;
    background-size: 50% 80px;
    animation: animate 18s linear infinite;
}

@keyframes animate{
    0%{
        transform: translateX(0) translateZ(0) scaleY(1);
    }
    50%{
        transform: translateX(-25%) translateZ(0) scaleY(.5);
    }  
    100%{
        transform: translateX(-50%) translateZ(0) scaleY(1);
    }
}

</style>