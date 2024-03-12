
<template>
  <div class="portfolio-page">
    <h1 class="title">Projects</h1>
    <!-- 
      Quizzical Card
      text: "A personal project and full stack web app that allows registered users to make virtual note cards for studying on browser or mobile.",
          urlWeb: "https://quizzical-learning.netlify.app/", -->
    <div class="cards-section">
      <b-card
        no-body
        class="overflow-hidden"
        v-for="card in cards"
        :key="card.id"
      >
        <b-card-img :src="card.image" alt="Image" class="image"></b-card-img>
        <b-card-body class="body" :title="card.title">
          <b-card-text>
            {{ card.text }}
          </b-card-text>
          <a v-if="card.urlWeb != null" :href="card.urlWeb" target="_blank"
            ><b-button><i class="fa fa-globe"></i> web</b-button></a
          >
          <a :href="card.urlCode" target="_blank"
            ><b-button><i class="fa fa-code"></i> code</b-button></a
          >
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script>
import atm from "../assets/atm1.png";
import beerbuddy from "../assets/beerbuddy1.png";
import quizzical from "../assets/quizzical1.png";
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          image: quizzical,
          title: "Quizzical",
          text: "A full stack application that lets registered users make virtual note cards for studying on browser or mobile. This site is currently under maintenance.",
          urlCode: "https://github.com/Bram-Gr/Quizzical",
        },
        {
          id: 2,
          image: beerbuddy,
          title: "Beer Buddy",
          text: "The final project I worked on to earn my certificate from Tech Elevator. I worked with a great team to produce beer buddy and solidify the concepts I learned.",
          urlWeb: "http://brewerybeerbuddy.com/",
          urlCode: "https://github.com/Bram-Gr/brewery-finder",
        },
        {
          id: 3,
          image: atm,
          title: "CMD ATM",
          text: "A fully backend program that utilizes business logic to facilitate financial transactions. It has a command line interface for user input.",
          urlWeb: null,
          urlCode: "https://github.com/Bram-Gr/Virtual_ATM",
        },
      ],
    };
  },
};
</script>

<style scoped>
@media screen and (min-width: 200px) {
  .image {
    background-color: rgba(255, 255, 255, 0.495);
    height: 25rem;
    width: 25rem;
    padding-right: 0.3rem;
    padding-bottom: 1rem;
  }
  button {
    margin-right: 0.5rem;
  }
  .body {
    padding: 0.2rem;
    color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(128, 128, 128, 0.799);
  }
  .card {
    background-color: #5bc0be9a;
    border: 3px solid white;
    max-width: 16rem;
    min-width: 16rem;
    max-height: 22rem;
    min-height: 22rem;
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
  .title {
    padding-top: 0rem;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  .cards-section {
    -webkit-overflow-scrolling: touch;
    min-width: 100%;
    overflow-x: scroll;
    padding-right: 2rem;
    padding-left: 2rem;

    padding-bottom: 5rem;
    margin-top: 1.5rem;
    display: flex;
  }
}
@media screen and (min-width: 500px) {
  .image {
    width: 20rem;
  }
  .card {
    margin-right: 1rem;
    max-width: 25rem;
    max-height: 20rem;
    margin-right: 1rem;
  }
}

@media screen and (min-width: 850px) {
  .cards-section {
    justify-content: center;
    overflow-x: hidden;
  }
}
@media screen and (min-width: 1200px) {
  .image {
    padding-right: 0rem;
  }
  .cards-section {
    padding-right: 0.2rem;
    padding-left: 0.2rem;
    justify-content: center;
    overflow-x: hidden;
  }
}
</style>