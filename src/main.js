import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import {hasPermission} from "./services/permissions";


Vue.config.productionTip = false
Vue.prototype.$hasPermission = module => hasPermission(module)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
