<template>
  <div class="window">
  <div class="container-image">
    <form @submit="handleSubmit">
<textarea class="input" v-model="inputValue"
@keydown.enter="handleEnterKey"/> 

    </form>
 
  </div>
</div>
</template>

<script>

export default {

data(){
  return{
inputValue:'',
help1: "",
help2:'',
cat:''
  }
},
methods:{
  handleSubmit(event){
    event.preventDefault();
    if(this.inputValue.toLowerCase() ==='cd portfolio'){
      this.$router.push("Portfolio")
    }
      else if(this.inputValue.toLocaleLowerCase() ==='cd about'){
      this.$router.push("About")
    } else if(this.inputValue.toLocaleLowerCase() ==='git --help'){
      this.help1 = "cd about will take you to the ABOUT page \ncd portfolio will take you to the portfolio page \ncat will display contents of a file\n'Enter' will clear the console";
      this.inputValue = this.help1;
    } else if(this.inputValue.toLocaleLowerCase() ==='cat'){
      this.cat = " By contents of a file I actually meant hello meow\n            /\\     /\\\n" +
                 "           {  `---'  }\n" +
                 "           {  O   O  }\n" +
                 "           ~~>  V  <~~\n" +
                 "            \\  \\|/  /\n" +
                 "             `-----'____\n" +
                 "             /     \\    \\_\n" +
                 "            {       }\\  )_\\_   _\n" +
                 "            |  \\_/  |/ /  \\_\\_/ )\n" +
                 "            \\__/  /(_/     \\__/\n" +
                 "              (__/\n'Enter' will clear the console";
      this.inputValue = this.cat;
    }  else {
      this.help2 = this.inputValue +" is not a command \nfor a list of commands git --help \n'Enter' will clear the console";
      this.inputValue = this.help2;
    }
    console.log(this.inputValue)
  }, 
  handleEnterKey(event){
    if(event.key === 'Enter' && (this.help1.length > 77 || this.help2.length > 50 || this.cat.length > 50) ){
      this.handleSubmit(event);
      this.help1 = '';
      this.help2 ='';
      this.cat='';
      this.inputValue='';
      
    }
    else if(event.key ==='Enter'){
      event.preventDefault();
      this.handleSubmit(event);
    }
  }
}
}
</script>

<style>
 @media screen and (min-width: 300px) {
 
.window{
  display: flex;
  padding-bottom: 5rem;
  margin-bottom: 2rem;
}
.container-image{
  overflow:hidden;
  position: relative;
  color:white;
  width:100vw;
  height:30vh;
  background-image: url('../assets/term3.png');
  background-size: cover;
  background-repeat: no-repeat;
  outline:none;
  padding:0;
  border:none;
  box-sizing: border-box;
}

.input{
  font-size:1rem;
  white-space:normal;
  resize:none;
position: absolute;
max-width: 100%;
width: 85vw;
  top:2.8rem;
  left:1rem;
  color: white;
  background-color: black;
  outline:none;
  padding-bottom:10rem;
 border:none;
}

@media screen and (min-width: 410px) {
  .window{
    margin-bottom: 5rem;
  }
.input{
  top:3.4rem;
}
}

@media screen and (min-width: 600px) {
.input{ 
  top:4.5rem;
}
.window{
    margin-bottom: 9rem;
  }
}
@media screen and (min-width: 650px) {
.input{
  top:5rem;
}

}
@media screen and (min-width: 730px) {
  .window{
    margin-bottom: 0rem;
  }
.input{
  width:80vw;
  font-size:1.5rem;
  top:5rem;
}
.container-image{
  height: 50vh;
}
.window{
  
  margin-left:3rem;
  margin-right:3rem;
}
}
@media screen and (min-width: 840px) {

.input{
  margin-left:1rem;
  top:6.5rem;
  height:20vh;
}
}
@media screen and (min-width: 900px) {
  .container-image{
    height: 70vh;
  }
.input{
  top:6rem;
}
}
@media screen and (min-width: 1200px) {
.input{
  top:9rem;
  height:20vh;
}
}
@media screen and (min-width: 1500px) {
  .container-image{
    height: 90vh;
  }
.input{
  font-size: 3rem;
  top:9rem;
  height: 65vh;
}
}
 }
</style>