import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store'
// Disable production tip
Vue.config.productionTip = false;

// Create a new Vue instance with router configuration
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');