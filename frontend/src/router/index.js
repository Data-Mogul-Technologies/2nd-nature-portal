import Vue from 'vue'
import VueRouter from 'vue-router'
import Create from '../components/AddCustomer.vue'
import Edit from '../components/EditCustomer.vue'
import Home from '../components/CustomerList.vue'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    name: 'Create',
    path: '/create',
    component: Create
  },
  {
    name: 'Edit',
    path: '/edit/:id',
    component: Edit
  },
  {
    path: '/page/:sectionSlug',
    name: 'dynamicContent',
    // route level code-splitting
    // this generates a separate chunk (dynamicContent.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dynamicContent" */ '../views/DynamicContent.vue')
  },

]

const router = new VueRouter({ mode: 'history', routes: routes })
 

export default router
