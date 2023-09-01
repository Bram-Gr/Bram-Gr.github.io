<template>
  <div id="page-content">
    

  
           <div class="top-page">
            <p class="p1">
                Hi I’m Bram, in 2015 I graduated from Rutgers University with a Bachelors in 
                Human Resources and Labor studies. I was privileged to have met and collaborated 
                with exceptionally talented individuals in classes that helped me develop event 
                coordination and networking skills. If you would like to know more please add me 
                to your professional network, I’d love to start a conversation!
             </p>   
   
          <p class="p2">
                Make it happen, but where do I start? This is a question I’ve asked myself time and time again throughout my academic and professional development. When staring at a “blank canvas” whether it be an empty book of business, a strategy for coordinating professional events, or an empty method in Java, I’ve found that getting started is typically the most difficult step. Throughout my career I’ve also realized getting over that hurdle gets more appealing with each accomplishment. 

                After graduating college I earned my real estate license and am currently in a software development bootcamp at Tech Elevator. In every role I’ve held there’s always an unknown which leads to discovery and development of new skills. I look forward to directing that focus in a career in technology.
            </p>
          
          <div class="picture-contact"> 
            
              <div v-show="isVisibleSmallPic">
            <img  :src="profileImage" alt="Image" width=200rem height=320rem/>
          </div>
          <div v-show="isVisibleBigPic" >
            <img :src="profileImage" alt="Image" width=330rem height=400rem/>
          </div>
       
        

     
            <p class="contact">
               
                <a href="mailto:bramzachgroen@gmail.com"
              >bramzachgroen@gmail.com <i class="fa fa-envelope"></i> </a> <br/>
                609-703-6051
            </p>
        </div> 
        </div>
      

        <div id="experience-grid">
            <div class="code"  @mouseover="startHoverTimeout(1)"
    @mouseout="clearHoverTimeout(1)">
              
                <p v-if="isHovering[1] || isVisibleSmall">
                    Spring Boot, Java, Vue.js, Responsive Design, IntelliJ, Git, Unit Testing (JUnit), Integration Testing
                </p>
                  <h3 v-else v-show="isVisibleBig"><div class="fa-3x"> 
                    <i class="fa fa-code custom-bounce"></i></div></h3>
            </div>
          
            <div class="database" @mouseover="startHoverTimeout(2)" @mouseout="clearHoverTimeout(2)" 
 >
               
               <p v-if="isHovering[2] || isVisibleSmall">Databases: PostgreSQL using PGadmin</p>
               <h3 v-else v-show="isVisibleBig"><div class="fa-3x"> 
                    <i class="fa fa-database custom-bounce"></i></div></h3>
            </div>
        
            <div class="web"  @mouseover="startHoverTimeout(3)"
    @mouseout="clearHoverTimeout(3)">
            
                <p v-if="isHovering[3] || isVisibleSmall">
                    HTML, CSS, JavaScript
                </p>
                    <h3 v-else v-show="isVisibleBig"><div><i class="fa fa-info-circle custom-bounce"></i></div></h3>
            </div>


            <div class="design"  @mouseover="startHoverTimeout(4)"
    @mouseout="clearHoverTimeout(4)">
             
                <p v-if="isHovering[4]||isVisibleSmall">
                    E/R diagrams
                </p>
                  <h3 v-else v-show="isVisibleBig"><div ><i class="fa fa-paint-brush custom-bounce"></i></div></h3>
            </div>
        </div>  
       
<!-- <icon-view/> -->
  </div>
</template>

<script>
import profileImage from '@/assets/Subject.png'
// import IconView from './IconView.vue'


export default {
    // components:{IconView},
data(){
    
    return {
      isVisibleBigPic:false,
      isVisibleSmallPic:false,
      isVisibleSmall:false,
       isVisibleBig: false,
        hoverTimeout: null,
        isHovering:{
          1:false,
          2:false,
          3:false,
          4:false
        },
        hoverTimeouts:{
          1:null,
          2:null,
          3:null,
          4:null
        },
      profileImage: profileImage,
    }
},
methods: {
    startHoverTimeout(element) {
        console.log("start")
      // Delay the hover state change by 500 milliseconds (adjust as needed)
      this.hoverTimeouts[element] = setTimeout(() => {
        this.isHovering[element] = true;
      }, 500);
    },
    clearHoverTimeout(element) {
      // Clear the timeout when leaving the element
      clearTimeout(this.hoverTimeouts[element]);
      this.isHovering[element] = false;
      console.log("clear");
    },
    updateVisibility() {
      // Adjust the screen width breakpoint as needed
      this.isVisibleBig = window.innerWidth > 770; 
      this.isVisibleSmall = window.innerWidth < 769;
      this.isVisibleBigPic = window.innerWidth > 380;
      this.isVisibleSmallPic = window.innerWidth < 379;
    }
  },
  mounted() {
    // Add a listener to check screen size and update visibility
    window.addEventListener('resize', this.updateVisibility);
    this.updateVisibility(); // Initial check
  },
  beforeUnmount() {
    // Clean up the listener when the component is destroyed
    window.removeEventListener('resize', this.updateVisibility);
  },

};
</script>



<style scoped>
  @media screen and (min-width: 300px) {
   

   .code i, .design i,.web i,.database i{
    color: rgb(0, 0, 81);
  font-weight: 900; /* Adjust font weight if necessary */
  font-size: 5rem;
  }
    a{
    color: white;
    text-decoration: none;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.fa-envelope{
    font-size: 1rem;
}
.code p, .design p,.web p,.database p{
    padding: 3rem;
    text-align: left;
    color: whitesmoke;
    box-shadow: 4px 4px 10px rgba(25, 20, 20, 0.247);
    background-color:rgba(35, 36, 39, 0.347) ;
    border-radius: 6px;
}
.p1{
   
    grid-area: p1;

}
.p2{
   
 grid-area: p2;
}
.picture-contact{
  margin-left:2rem;
  grid-area: pic;
  text-align: center;
}
.top-page{
  text-align: left;
  color: whitesmoke;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-left:1rem;
    margin-right:1rem;
    margin-top:6rem;
    display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "pic"
    "p1"
    "p2"
    ;
}
#experience-grid {
    padding-bottom: 2rem;
    color: whitesmoke;
    /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); */
}



  }

@media screen and (min-width: 770px) {
  .custom-bounce {
  animation: customBounce 2s infinite;
}

@keyframes customBounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
.fa-envelope{
    font-size: 1rem;
}
a{
    color: white;
    text-decoration: none;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}


p{
    text-align: left;
    color: whitesmoke;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.p1{
     margin-top: 8rem;
    grid-area: p1;

}
.p2{
   
 grid-area: p2;
}
.picture-contact .contact{
  margin-left:2rem;
  grid-area: pic;
}
.top-page{
    margin-left:1rem;
    margin-top:6rem;
    display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "p1 p1 pic"
    "p2 p2 pic"
    ". . pic";
}
.code,.database,.web,.design{
  margin:4rem;
}
.code{
grid-area: code;
}
.database{
grid-area: data;
}
.web{
grid-area: web;
}
.design{
grid-area: design;
}
#experience-grid{
    display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "code data"
    "web design";
}    

}
</style>