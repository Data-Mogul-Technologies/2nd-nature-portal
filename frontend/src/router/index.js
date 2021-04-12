import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

import Create from '../components/customer/AddCustomer.vue'
import CustomerList from '../components/customer/CustomerList.vue'
import View from '../components/customer/ViewCustomer.vue'


import ConsultantList from '../components/consultant/ConsultantList.vue'
import AddConsultant from '../components/consultant/AddConsultant.vue'
import EditConsultant from '../components/consultant/ViewConsultant.vue'

import ConsultantStatusList from '../components/consultant/ConsultantStatusList.vue'
import AddConsultantStatus from '../components/consultant/AddConsultantStatus.vue'
import ViewConsultantStatus from '../components/consultant/ViewConsultantStatus.vue'

import BusinessList from '../components/business/BusinessList.vue'
import AddBusiness from '../components/business/AddBusiness.vue'
import ViewBusiness from '../components/business/ViewBusiness.vue'

import SportList from '../components/sports/SportList.vue'
import AddSport from '../components/sports/AddSport.vue'
import ViewSport from '../components/sports/ViewSport.vue'

import EventList from '../components/event/EventList.vue'
import AddEvent from '../components/event/AddEvent.vue'
import ViewEvent from '../components/event/ViewEvent.vue'

import EventStatusList from '../components/event/EventStatusList.vue'
import AddEventStatus from '../components/event/AddEventStatus.vue'
import ViewEventStatus from '../components/event/ViewEventStatus.vue'

import EventTypeList from '../components/event/EventTypeList.vue'
import AddEventType from '../components/event/AddEventType.vue'
import ViewEventType from '../components/event/ViewEventType.vue'
import UpcomingEvents from '../components/event/UpcomingEvents.vue'

import CustomerStatusList from '../components/customer/CustomerStatusList.vue'
import AddCustomerStatus from '../components/customer/AddCustomerStatus.vue'
import ViewCustomerStatus from '../components/customer/ViewCustomerStatus.vue'
import NewestCustomers from '../components/customer/NewestCustomers.vue'

import CustomerTypeList from '../components/customer/CustomerTypeList.vue'
import AddCustomerType from '../components/customer/AddCustomerType.vue'
import ViewCustomerType from '../components/customer/ViewCustomerType.vue'

import ServiceTypeList from '../components/service/ServiceTypeList.vue'
import AddServiceType from '../components/service/AddServiceType.vue'
import ViewServiceType from '../components/service/ViewServiceType.vue'

import ServiceStatusList from '../components/service/ServiceStatusList.vue'
import AddServiceStatus from '../components/service/AddServiceStatus.vue'
import ViewServiceStatus from '../components/service/ViewServiceStatus.vue'

import PaymentStatusList from '../components/payment/PaymentStatusList.vue'
import AddPaymentStatus from '../components/payment/AddPaymentStatus.vue'
import ViewPaymentStatus from '../components/payment/ViewPaymentStatus.vue'
import PendingPayments from '../components/payment/PendingPayments.vue'

import PaymentSourceList from '../components/payment/PaymentSourceList.vue'
import AddPaymentSource from '../components/payment/AddPaymentSource.vue'
import ViewPaymentSource from '../components/payment/ViewPaymentSource.vue'

import CustServPayList from '../components/payment/CustServPayList.vue'
// import AddCustServPay from '../components/payment/AddCustServPay.vue'
import ViewCustServPay from '../components/payment/ViewCustServPay.vue'

import RegPayList from '../components/payment/RegPayList.vue'
// import AddRegPay from '../components/payment/AddRegPay.vue'
import ViewRegPay from '../components/payment/ViewRegPay.vue'

import FeedbackList from '../components/feedback/FeedbackList.vue'
import AddFeedback from '../components/feedback/AddFeedback.vue'
import ViewFeedback from '../components/feedback/ViewFeedback.vue'

import ProfileStatusList from '../components/profiles/ProfileStatusList.vue'
import AddProfileStatus from '../components/profiles/AddProfileStatus.vue'
import ViewProfileStatus from '../components/profiles/ViewProfileStatus.vue'

import ATProfileList from '../components/profiles/ATProfileList.vue'
import ViewATProfile from '../components/profiles/ViewATProfile.vue'

import DmdProfileList from '../components/profiles/DmdProfileList.vue'
import ViewDmdProfile from '../components/profiles/ViewDmdProfile.vue'

import EditProfile from '../components/profiles/EditProfile.vue'

import PendingProfiles from '../components/profiles/PendingProfiles.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    name: 'CustomerList',
    path: '/view/list-customers',
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
  
/*----------------Consultant Status-------------*/
{
  name: 'ConsultantList',
  path: '/page/list-consultants',
  component: ConsultantList
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
},
/*----------------Business-------------*/
{
  name: 'BusinessList',
  path: '/BusinessList',
  component: BusinessList
},
{
  name: 'AddBusiness',
  path: '/AddBusiness',
  component: AddBusiness
},
{
  name: 'ViewBusiness',
  path: '/ViewBusiness',
  component: ViewBusiness
},
/*----------------Sport Type-------------*/
{
  name: 'SportList',
  path: '/SportList',
  component: SportList
},
{
  name: 'AddSport',
  path: '/AddSport',
  component: AddSport
},
{
  name: 'ViewSport',
  path: '/ViewSport',
  component: ViewSport
},
/*----------------Event-------------*/
{
  name: 'EventList',
  path: '/EventList',
  component: EventList
},
{
  name: 'AddEvent',
  path: '/AddEvent',
  component: AddEvent
},
{
  name: 'ViewEvent',
  path: '/ViewEvent',
  component: ViewEvent
},
/*----------------Customer Status-------------*/
{
  name: 'CustomerStatusList',
  path: '/CustomerStatusList',
  component: CustomerStatusList
},
{
  name: 'AddCustomerStatus',
  path: '/AddCustomerStatus',
  component: AddCustomerStatus
},
{
  name: 'ViewCustomerStatus',
  path: '/ViewCustomerStatus',
  component: ViewCustomerStatus
},
/*----------------Consultant Status-------------*/
{
  name: 'ConsultantStatusList',
  path: '/ConsultantStatusList',
  component: ConsultantStatusList
},
{
  name: 'AddConsultantStatus',
  path: '/AddConsultantStatus',
  component: AddConsultantStatus
},
{
  name: 'ViewConsultantStatus',
  path: '/ViewConsultantStatus',
  component: ViewConsultantStatus
},
/*----------------Event Status-------------*/
{
  name: 'EventStatusList',
  path: '/EventStatusList',
  component: EventStatusList
},
{
  name: 'AddEventStatus',
  path: '/AddEventStatus',
  component: AddEventStatus
},
{
  name: 'ViewEventStatus',
  path: '/ViewEventStatus',
  component: ViewEventStatus
},
/*----------------Event Type-------------*/
{
  name: 'EventTypeList',
  path: '/EventTypeList',
  component: EventTypeList
},
{
  name: 'AddEventType',
  path: '/AddEventType',
  component: AddEventType
},
{
  name: 'ViewEventType',
  path: '/ViewEventType',
  component: ViewEventType
},
/*----------------Customer Type-------------*/
{
  name: 'CustomerTypeList',
  path: '/CustomerTypeList',
  component: CustomerTypeList
},
{
  name: 'AddCustomerType',
  path: '/AddCustomerType',
  component: AddCustomerType
},
{
  name: 'ViewCustomerType',
  path: '/ViewCustomerType',
  component: ViewCustomerType
},
/*----------------Service Type-------------*/
{
  name: 'ServiceTypeList',
  path: '/ServiceTypeList',
  component: ServiceTypeList
},
{
  name: 'AddServiceType',
  path: '/AddServiceType',
  component: AddServiceType
},
{
  name: 'ViewServiceType',
  path: '/ViewServiceType',
  component: ViewServiceType
},
/*----------------Service Status-------------*/
{
  name: 'ServiceStatusList',
  path: '/ServiceStatusList',
  component: ServiceStatusList
},
{
  name: 'AddServiceStatus',
  path: '/AddServiceStatus',
  component: AddServiceStatus
},
{
  name: 'ViewServiceStatus',
  path: '/ViewServiceStatus',
  component: ViewServiceStatus
},
/*----------------Payment Status-------------*/
{
  name: 'PaymentStatusList',
  path: '/PaymentStatusList',
  component: PaymentStatusList
},
{
  name: 'AddPaymentStatus',
  path: '/AddPaymentStatus',
  component: AddPaymentStatus
},
{
  name: 'ViewPaymentStatus',
  path: '/ViewPaymentStatus',
  component: ViewPaymentStatus
},
/*----------------Payment Source-------------*/
{
  name: 'PaymentSourceList',
  path: '/PaymentSourceList',
  component: PaymentSourceList
},
{
  name: 'AddPaymentSource',
  path: '/AddPaymentSource',
  component: AddPaymentSource
},
{
  name: 'ViewPaymentSource',
  path: '/ViewPaymentSource',
  component: ViewPaymentSource
},
/*----------------Customer Service Type Payment-------------*/
{
  name: 'CustServPayList',
  path: '/CustServPayList',
  component: CustServPayList
},
// {
//   name: 'AddCustServPay',
//   path: '/AddCustServPay',
//   component: AddCustServPay
// },
{
  name: 'ViewCustServPay',
  path: '/ViewCustServPay',
  component: ViewCustServPay
},
/*----------------Registration Payment-------------*/
{
  name: 'RegPayList',
  path: '/RegPayList',
  component: RegPayList
},
// {
//   name: 'AddRegPay',
//   path: '/AddRegPay',
//   component: AddRegPay
// },
{
  name: 'ViewRegPay',
  path: '/ViewRegPay',
  component: ViewRegPay
},
/*----------------Feedback Payment-------------*/
{
  name: 'FeedbackList',
  path: '/FeedbackList',
  component: FeedbackList
},
{
  name: 'AddFeedback',
  path: '/AddFeedback',
  component: AddFeedback
},
{
  name: 'ViewFeedback',
  path: '/ViewFeedback',
  component: ViewFeedback
},
/*----------------Profile Status-------------*/
{
  name: 'ProfileStatusList',
  path: '/ProfileStatusList',
  component: ProfileStatusList
},
{
  name: 'AddProfileStatus',
  path: '/AddProfileStatus',
  component: AddProfileStatus
},
{
  name: 'ViewProfileStatus',
  path: '/ViewProfileStatus',
  component: ViewProfileStatus
},

//***********Profile Routes***********//


{
  name: 'profiles',
  path: '/profile/all-profiles',
  component: () => import('../views/AllProfiles.vue')
},
{
  name: 'AddProfile',
  path: '/profile/Add-New-Action-Type-Profile',
  component: () => import('../components/profiles/AddProfile.vue')
},
/*----------- At Profile ------------*/
{
  name: 'ATProfileList',
  path: '/ATProfileList',
  component: ATProfileList
},
{
  name: 'ViewATProfile',
  path: '/ViewATProfile',
  component: ViewATProfile
},
// /*----------- Dmd Profile ------------*/
{
  name: 'DmdProfileList',
  path: '/DmdProfileList',
  component: DmdProfileList
},
{
  name: 'ViewDmdProfile',
  path: '/ViewDmdProfile',
  component: ViewDmdProfile
},
{
  name: 'EditProfile',
  path: '/EditProfile',
  component: EditProfile
},
{
  name: 'PendingPayments',
  path: '/PendingPayments',
  component: PendingPayments
}
,
{
  name: 'UpcomingEvents',
  path: '/UpcomingEvents',
  component: UpcomingEvents
}
,
{
  name: 'NewestCustomers',
  path: '/NewestCustomers',
  component: NewestCustomers
}, 

{
  name: 'PendingProfiles',
  path: '/PendingProfiles',
  component: PendingProfiles
}

]

const router = new VueRouter({ mode: 'history', routes: routes })
 

export default router
