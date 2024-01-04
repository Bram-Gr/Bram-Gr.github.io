
<template>

<div class="portfolio-page">
<h1 class="title">Portfolio</h1>

  <div class="cards-section">


    <!-- <b-card
    v-for="card in cards" :key="card.id"
    overlay
    :img-src=card.image
    img-alt="Card Image"
    text-variant="white"
    :title="card.title"
   
   
  >

  <div class="body">
    <b-card-text >
      {{ card.text }}
    </b-card-text>
    <a v-if="card.urlWeb != null" :href="card.urlWeb" target="_blank"><b-button>web</b-button></a>
         <a :href="card.urlCode" target="_blank"><b-button>code</b-button></a>
        </div>
  </b-card> -->




    
  <b-card no-body class="overflow-hidden"  v-for="card in cards" :key="card.id">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src=card.image alt="Image" class="image"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body :title=card.title>
       
          <b-card-text >
           {{ card.text }}
          </b-card-text>
         <a v-if="card.urlWeb != null" :href="card.urlWeb" target="_blank"><b-button>web</b-button></a>
         <a :href="card.urlCode" target="_blank"><b-button>code</b-button></a>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>



  </div>
</div>
</template>

<script>
import atm from "../assets/atm.png"
import beerbuddy from "../assets/beerbuddy.png"
import quizzical from "../assets/quizzical.png"
export default {
data(){
  return{
    cards: [
      {id:1, image: quizzical,  title: "Quizzical", 
      text: "Quizzical is a personal project of mine. It's a full stack web app that allows registered users to make virtual note cards for studying on browser or mobile.", 
      urlWeb: 'https://quizzical-learning.netlify.app/', 
      urlCode: 'https://github.com/Bram-Gr/Quizzical'},
      {id:2, image: beerbuddy,  title: 'Beer Buddy', text: '', 
      urlWeb: 'http://brewerybeerbuddy.com/', 
      urlCode: 'https://github.com/Bram-Gr/brewery-finder'},
      {id:3, image: atm,  title: 'CMD ATM', text: '', urlWeb: null, urlCode: 'https://github.com/Bram-Gr/Virtual_ATM'},    
  ]
  }
}
}
</script>

<style scoped>

@media screen and (min-width: 200px) {
.image{
  height: 20rem;
  width: 30rem;
  /* width: 100%;
  height: 100%;
  object-fit: center;
  position: absolute;
  top: 0;
  left: 0; */
}
  button{
    margin-right: .5rem;
  }
  .body{
/* color: white; */
position: absolute;
bottom: 0;
left: 0;
right: 0;
 background-color: rgba(128, 128, 128, 0.562)
  }
  .card{
    background-color: #5bc0be9a;
    border: 3px solid white;
  max-width: 100rem;
  min-width: 18rem;
  max-height: 30rem;
  min-height: 18.5rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  }
.title{
  padding-top: 0rem;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}
.cards-section {
    -webkit-overflow-scrolling: touch; 
  min-width: 100%;
  overflow-x: scroll;
  /* white-space: nowrap; */
  padding-right: 2rem;
  padding-left: 2rem;
  padding-bottom: 5rem;
  margin-top: 1.5rem;
  display: flex;
  /* justify-content: center; */
}
}
@media screen and (min-width: 500px) {
  .card{
  margin-right: 1rem;
  max-width: 25rem;
  max-height: 20rem;
  margin-right: 1rem;
  }

  .cards-section{
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  padding-right: 0.2rem;
  padding-left: 0.2rem;
  }

}





</style>