<template>

<div>
  <h1>Welcome to Second Nature Portal</h1>
  <h2>Weekly Highlights!</h2><br><br>
  <b-card-group deck>
    <b-card title="Newest Customers">
      <b-card-text>Your Newest customers are: <p></p> <ul v-for="customer in customers" :key="customer.customer_id">
            <li>{{customer.first_name}} {{customer.last_name}} </li>
          </ul></b-card-text>
      <b-button href="/NewestCustomers" variant="primary"> View More </b-button>
    
    </b-card>
    
    <b-card title="Pending Payments">
      <b-card-text v-for="payment in payments" :key="payment.paymnet_id">
        You have {{payment.total}} pending payments  </b-card-text>
      <b-button href="/PendingPayments" variant="primary"> View More </b-button>
    
    </b-card>

    <b-card title="Upcoming Events" >
      <b-card-text v-for="event in events" :key="event.event_id">
        You have {{event.total}} upcoming events 
        </b-card-text>
      <b-button href="/UpcomingEvents" variant="primary"> View all </b-button>
    </b-card>

    <b-card title="Pending Profiles">
      <b-card-text>You have these pending profiles</b-card-text>
      <b-button href="/PendingProfiles" variant="primary"> View More </b-button>
     </b-card>
   
  </b-card-group>
  <br>

  <b-card-group deck>
     <b-card title="Retention Rate">
      <b-card-text><p class="number">NUMBER GOES HERE</p></b-card-text>
      <b-button href="/PendingProfiles" variant="primary"> View by Consultant </b-button>
      
     </b-card>

     <b-card title="Total Revenue">
      <b-card-text><p class="number">NUMBER</p></b-card-text>
      <b-button href="/PendingProfiles" variant="primary"> View More </b-button>
     </b-card>
  </b-card-group>

<br>
<b-card-group>
    
      <b-card title="Feedback">
      <b-card-text>this where you can see feedback</b-card-text>
      <b-button href="/PendingProfiles" variant="primary"> View More </b-button>
     </b-card>
</b-card-group>
 
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

p.number{
  font-size: 20px;;
}


</style>

<script>
import NewestCustomers from '../components/customer/NewestCustomers'
import PendingProfiles from '../components/profiles/PendingProfiles'
import PendingPayments from '../components/payment/PendingPayments'
import UpcomingEvents from '../components/event/UpcomingEvents'
import axios from "axios"
export default {   
  name: 'home',
  components: {
    NewestCustomers,
    PendingProfiles,
    PendingPayments,
    UpcomingEvents
  },

  data(){
    return {
      events: [],
      payments: [],
      customers:[]
    }
  },
   created() {
    this.getEvents(),
    this.getPayments(),
    this.getCustomers();
  },

  methods: {
     async getEvents() {
      try {
        const response = await axios.get("http://localhost:5000/TotalEvents");
        this.events = response.data;
      } catch (err) {
        console.log(err);
      }
      },

      async getPayments() {
      try {
        const response = await axios.get("http://localhost:5000/TotalPendingPayments");
        this.payments = response.data;
      } catch (err) {
        console.log(err);
      }
      },

      async getCustomers() {
      try {
        const response = await axios.get("http://localhost:5000/threeCustomers");
        this.customers = response.data;
      } catch (err) {
        console.log(err);
      }
      }
  }

}
</script>