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


 
Vue.config.productionTip = false

new Vue({
  // init router
  router,
  store,
  render: h => h(App),
}).$mount('#app')

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment().format('YYYY-MM-DD')
  }
})