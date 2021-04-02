import Vue from 'vue'
import VueRouter from 'vue-router'
import Create from '../components/customer/AddCustomer.vue'
import Home from '../views/Home.vue'


import CustomerList from '../components/customer/CustomerList.vue'
import View from '../components/customer/ViewCustomer.vue'
import SportTypeDrop from '../components/dropdowns/SportTypeDrop.vue'
import BusinessDrop from '../components/dropdowns/BusinessDrop.vue'
import CustomerStatusDrop from '../components/dropdowns/CustomerStatusDrop.vue'
import CustomerTypeDrop from '../components/dropdowns/CustomerTypeDrop.vue'
import StateDrop from '../components/dropdowns/StateDrop.vue'




import ConsultantList from '../components/consultant/ConsultantList.vue'
import AddConsultant from '../components/consultant/AddConsultant.vue'
import EditConsultant from '../components/consultant/ViewConsultant.vue'
import ConsultantStatusDrop from '../components/dropdowns/ConsultantStatusDrop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    name: 'CustomerList',
    path: '/create/list-customers',
    component: CustomerList
  },
  {
    name: 'Create',
    path: '/create/add-customer',
    component: Create
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
  name: 'CustomerTypeDrop',
  path: '/CustomerTypeDrop',
  component: CustomerTypeDrop
},
{
  name: 'StateDrop',
  path: '/StateDrop',
  component: StateDrop
},
{
  name: 'ConsultantList',
  path: '/page/list-consultants',
  component: ConsultantList
},
{
  name: 'ConsultantStatusDrop',
  path: '/ConsultantStatusDrop',
  component: ConsultantStatusDrop
},
{
  name: 'AddConsultant',
  path: '/page/add-new-consultant',
  component: AddConsultant
},
{
  name: 'EditConsultant',
  path: '/view/:id',
  component: EditConsultant
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
