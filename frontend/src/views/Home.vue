<template>

<div>  
  <h1>Welcome to Second Nature Portal</h1>
  <h2>Weekly Highlights!</h2>
  <router-link :to="{name:'NewestCustomers'}"><button class="button2">Newest Customers</button></router-link>
  <router-link :to="{name:'PendingPayments'}"><button class="button3">Pending Payments</button></router-link> 
  <router-link :to="{name:'UpcomingEvents'}"><button class="button4">Upcoming Events</button></router-link> 
  <router-link :to="{name:'PendingProfiles'}"><button class="button5">Pending Profiles</button></router-link>
</div>

</template>
<style scoped>
h1{
  font-size: 50px;
  text-align: center;
  color:rgb(0, 75, 119);
}

h2{
font-size: 45px;
text-align: center;
color:rgb(0, 92, 145);
}

 .button2 {
    /* display: inline-block; */
    margin: 10em 15em;
    padding: 5em 3em;
    background: #fff;
    border: 2px solid rgb(8, 105, 161);
    border-radius: 3px;
    color: rgb(8, 105, 161);
    font-family: "Quicksand", sans-serif;
    font-size: 1em;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
  }

  .button2:hover {
    background: rgb(8, 105, 161);
    color: #fff;
  }

  .button3 {
    /* display: inline-block; */
    margin: 10em 5em;
    padding: 5em 4em;
    background: #fff;
    border: 2px solid rgb(8, 105, 161);
    border-radius: 3px;
    color: rgb(8, 105, 161);
    font-family: "Quicksand", sans-serif;
    font-size: 1em;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
  }

  .button3:hover {
    background: rgb(8, 105, 161);
    color: #fff;
  }

  .button4 {
    /* display: inline-block; */
    margin: 0em 15em;
    padding: 5em 4em;
    background: #fff;
    border: 2px solid rgb(8, 105, 161);
    border-radius: 3px;
    color: rgb(8, 105, 161);
    font-family: "Quicksand", sans-serif;
    font-size: 1em;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
  }

  .button4:hover {
    background: rgb(8, 105, 161);
    color: #fff;
  }

  .button5 {
    /* display:inline-block; */
    margin: 0em 5em;
    padding: 5em 4em;
    background: #fff;
    border: 2px solid rgb(8, 105, 161);
    border-radius: 3px;
    color: rgb(8, 105, 161);
    font-family: "Quicksand", sans-serif;
    font-size: 1em;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
  }

  .button5:hover {
    background: rgb(8, 105, 161);
    color: #fff;
  }


</style>

<script>
import CustomerList from '../components/customer/CustomerList'
import EditCustomer from '../components/customer/ViewCustomer'
import PendingPayments from '../components/payment/PendingPayments'
import UpcomingEvents from '../components/event/UpcomingEvents'
export default {   
  name: 'home',
  components: {
    CustomerList,
    EditCustomer,
    PendingPayments,
    UpcomingEvents
  }
}
</script>