
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/AboutView'
import Portolio from '../views/PortfolioView'
import CV from '../views/CV';
// import store from "@/store"; 


Vue.use(VueRouter)


const routes = [
{
    path: '/',
    name: 'Home',
    component: Home
},
{
    path: '/Portfolio',
    name: 'Portfolio',
    component: Portolio
},
{
    path: '/About',
    name: 'About',
    component: CV
}

]






const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
// router.beforeEach((to, from, next) => {


//     store.dispatch("iconModule/toggle"); // Reset icon's visibility
//    next();
//   });

export default router;