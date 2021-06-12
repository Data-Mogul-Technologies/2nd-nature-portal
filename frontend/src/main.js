// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import App from './App.vue'
// import Create from './components/AddCustomer.vue'
// import Edit from './components/EditCustomer.vue'
// import Index from './components/CustomerList.vue'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import bootstrapvue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

window.bus = new Vue();
Vue.use(bootstrapvue); 
Vue.config.productionTip = false

new Vue({
  // init router
  router,
  store,
  render: h => h(App),
}).$mount('#app')

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(value).format('YYYY-MM-DD')
  }
})