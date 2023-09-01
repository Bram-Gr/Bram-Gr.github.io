<template>
<div id="main">
<h1 id="header">Portfolio</h1>
<!-- <icon-view/> -->
</div>
</template>

<script>
// import IconView from './IconView.vue';
export default {

// components:{IconView}
}
</script>

<style scoped>
#main{
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-areas: ". header .";
margin-bottom:26rem;
}
#header{
    grid-area: header;
}
</style>