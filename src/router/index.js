import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Porfolio from '../views/PortfolioView.vue'
import About from '../views/AboutView.vue'
import Contact from '../views/ContactView.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Porfolio
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
]
})


export default router
