<template>
  <div id="main">
    <div class="title">Contact Me</div>
    <b-form  class="form" @submit="onSubmit" @reset="onReset" v-if="show" netlify>

      <b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input  class="lable"
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Contact Information (Email, linkedIn, or GitHub):"
        label-for="input-1"
      >
        <b-form-input class="lable"
          id="input-1"
          v-model="form.contact"
          pattern=".*\.com.*"
          placeholder="Enter contact url"
          required
        ></b-form-input>
        
      </b-form-group>


      <b-form-group
        id="input-group-1"
        label="Message:"
        label-for="input-1"
      >
        <b-form-textarea  class="lable"
          no-resize
          id="textarea-no-resize"
          v-model="form.message"
          placeholder="Enter message"
          required
          rows="6"
        ></b-form-textarea>
      </b-form-group>
  

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
 
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          contact: '',
          message: '',
          name: '',
          subject: 'Email from Portfolio Site'
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        console.log(this.form.name, this.form.message)
        fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: this.form.subject,
          body: `Name: ${this.form.name}\nContact: ${this.form.contact}\nMessage: ${this.form.message}`       
        }),
      })
      .then((response) => {
    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);
    return response.json();
  })
  .then((data) => {
    console.log('Data received:', data);
    // Handle success or error response from the server
  })
  .catch((error) => {
    console.error('Error:', error);
  });
        
        event.preventDefault();
        alert("Message received! Bram will contact you in 1-3 business days.");
        window.location.reload();

      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.contact = ''
        this.form.name = ''
        this.form.message = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scoped>

@media screen and (min-width: 200px) {
button{
  margin-right: .5rem;
}
.lable{
  width: 16rem;
  margin-bottom: 1rem;
}
  #main{
    /* margin-right: 1rem;
    margin-left: 1rem; */
  padding: 1rem;
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 0;
  background-color: #5bc0be9a;
}
.form{
 
  padding-left: .5rem;
  padding-right: .5rem;
}
.title{
  display: flex;
  justify-content: center;
  font-size: 2rem;
}
}


@media screen and (min-width:345px){

  .lable{
width: 19rem;
}

}

@media screen and (min-width:380px){

.lable{
width: 22rem;
}

}

@media screen and (min-width: 500px) {

  #main{
    border: 3px solid white;
  border-radius: 15px;
  }
  .form{
 padding-left: 2rem;
 padding-right: 2rem;
}
.lable{
  width: 25rem;
  margin-bottom: 1rem;
}
}

@media screen and (min-width:800px) {
  .lable{
  width: 40rem;
}
}


</style>