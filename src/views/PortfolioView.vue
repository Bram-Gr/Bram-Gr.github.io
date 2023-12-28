
<template>

<div class="portfolio-page">
<h1 class="title">Portfolio</h1>

  <div class="cards-section">
  <b-card no-body class="overflow-hidden" style="max-width: 540px;" v-for="card in cards" :key="card">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src=card.image alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Horizontal Card">
          <b-card-text>
            This is a wider card with supporting text as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
          <b-button>          </b-button>
          <b-button>          </b-button>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
  </div>
</div>
</template>

<script>
export default {
data(){
  return{
    cards: [
      {image:'',  title:'', text: '',urlWeb: '', urlCode: ''},
      {image:'',  title:'', text: '',urlWeb: '', urlCode: ''},
      {image:'',  title:'', text: '',urlWeb: '', urlCode: ''},    
  ]
  }
}
}
</script>

<style scoped>
.card{
  margin-right: 1rem;
  
}
.title{
  margin-top: 20rem;
  display: flex;
  justify-content: center;
}
.cards-section{
  padding-right: 3rem;
  padding-left: 3rem;
  padding-bottom: 5rem;
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
}

</style>