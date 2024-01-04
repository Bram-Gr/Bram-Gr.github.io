<template>
  <div id="main">
    <div class="title">Contact Me</div>
    <b-form  class="form" @submit="onSubmit" @reset="onReset" v-if="show">

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

        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
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

.lable{
  width: 40rem;
  margin-bottom: 1rem;
}
  #main{
    margin-right: 1rem;
    margin-left: 1rem;
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
@media screen and (min-width: 500px) {

  #main{
    border: 3px solid white;
  border-radius: 15px;
  }
  .form{
 padding-left: 2rem;
 padding-right: 2rem;
}
}


</style>