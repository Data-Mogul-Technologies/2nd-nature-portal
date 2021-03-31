import Vue from 'vue'
import VueRouter from 'vue-router'
import Create from '../components/AddCustomer.vue'
import Edit from '../components/EditCustomer.vue'
import CustomerList from '../components/CustomerList.vue'
import View from '../components/ViewCustomer.vue'
import SportTypeDrop from '../components/dropdowns/SportTypeDrop.vue'
import BusinessDrop from '../components/dropdowns/BusinessDrop.vue'
import CustomerStatusDrop from '../components/dropdowns/CustomerStatusDrop.vue'
import ServiceTypeDrop from '../components/dropdowns/ServiceTypeDrop.vue'
import StateDrop from '../components/dropdowns/StateDrop.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    name: 'CustomerList',
    path: '/customerList',
    component: CustomerList
  },
  {
    name: 'Create',
    path: '/create/add-customer',
    component: Create
  },
  {
    name: 'Edit',
    path: '/edit/:id',
    component: Edit
  },
  {
    name: 'View',
    path: '/view/:id',
    component: View
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
   {
   name: 'SportTypeDrop',
   path: '/SportTypeDrop',
   component: SportTypeDrop
},
{
  name: 'BusinessDrop',
  path: '/BusinessDrop',
  component: BusinessDrop
},
{
  name: 'CustomerStatusDrop',
  path: '/StatusDrop',
  component: CustomerStatusDrop
},
{
  name: 'ServiceTypeDrop',
  path: '/ServiceDrop',
  component: ServiceTypeDrop
},
{
  name: 'StateDrop',
  path: '/StateDrop',
  component: StateDrop
}
// {
//   path: '/page/:sectionSlug',
//   name: 'dynamicContent',
//   // route level code-splitting
//   // this generates a separate chunk (dynamicContent.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "dynamicContent" */ '../views/DynamicContent.vue')
// }
]

const router = new VueRouter({ mode: 'history', routes: routes })
 

export default router
