
<template>

<div class="portfolio-page">
<h1 class="title">Portfolio</h1>

  <div class="cards-section">
  <b-card no-body class="overflow-hidden" style="max-width: 540px;" v-for="card in cards" :key="card.id">
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
      {id:1, image:'',  title:'', text: '',urlWeb: '', urlCode: ''},
      {id:2, image:'',  title:'', text: '',urlWeb: '', urlCode: ''},
      {id:3, image:'',  title:'', text: '',urlWeb: '', urlCode: ''},    
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
  padding-top: 5rem;
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