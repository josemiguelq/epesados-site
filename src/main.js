import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import About from "./pages/About";

const router = new VueRouter({
  mode: 'history',
  routes : [
    {path: '/about', component : About}
  ]
})

Vue.config.productionTip = false
Vue.use(router)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
