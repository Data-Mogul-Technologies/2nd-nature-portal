<template>

<div>
    <b-jumbotron class="jumbotron" text-variant="white" border-variant="dark">
    <h1>Welcome to Second Nature Portal!</h1>
  </b-jumbotron>
  <b-card-group deck>
    <b-card header="Newest Customers" >
      <b-card-text class="customers">Your newest customers are: <p></p> <ul v-for="customer in customers" :key="customer.customer_id">
            <li>{{customer.first_name}} {{customer.last_name}} </li>
          </ul></b-card-text>
      <b-button href="/NewestCustomers" variant="primary"> View More </b-button>
    
    </b-card>
    
    <b-card header="Pending Payments">
      <b-card-text v-for="payment in payments" :key="payment.paymnet_id">
        <p class="text">You have <strong>{{payment.total}}</strong> pending payments</p> <br><br> <br></b-card-text>
      <b-button href="/PendingPayments" variant="primary"> View More </b-button>
    
    </b-card>

    <b-card header="Upcoming Events" >
      <b-card-text v-for="event in events" :key="event.event_id">
       <p class="text"> You have <strong>{{event.total}}</strong> upcoming events </p> <br> <br> <br>
        </b-card-text>
      <b-button href="/UpcomingEvents" variant="primary"> View More</b-button>
    </b-card>

    <b-card header="Pending Profiles">
      <b-card-text v-for="profile in profiles" :key="profile.profile_id">
      <p class="text">  You have <strong>{{profile.total}} </strong>pending profiles</p> <br> <br><br></b-card-text>
      <b-button href="/PendingProfiles" variant="primary"> View More </b-button>
     </b-card>
   
  </b-card-group>
  <br>

  <b-card-group deck>
     <b-card header="Retention Rate">
      <b-card-text class="percentages" v-for="retrate in retrates" :key="retrate.retrate_id">
        You currently have a <strong class="strong1">{{retrate.RetentionRate}}</strong> retention rate</b-card-text>
      <b-button href="/report/current-year-retention-rate" variant="primary"> View by Consultant </b-button>
      
     </b-card>

     <b-card header="Total Revenue">
      <b-card-text class="percentages" v-for="pymt in pymts" :key="pymt.customer_id">
      Your current total revenue is <strong class="strong1">{{pymt.Total.toLocaleString('en-us',{minimumFractionDigits: 2})}}</strong> dollars!</b-card-text>
      <b-button href="/report/annual-payment" variant="primary"> View More </b-button>
     </b-card>
  </b-card-group>

<br>
<b-card-group>
    
      <b-card header="Feedback">
      <b-card-text v-for="feedback in feedbacks" :key="feedback.feedback_id">
         <p class="feedback1"> <strong class="feedback">How helpful Comments:</strong> {{feedback.how_helpful_comment }}
          <strong class="feedback">Recommendation Comments:</strong> {{feedback.recommend_comment}}
          <strong class="feedback"> General Feedback:</strong> {{feedback.gen_feedback}}</p>
        </b-card-text>
      <b-button href="/feedback/feedback" variant="primary"> View More </b-button>
     </b-card>
</b-card-group>
 
</div>

</template>
<style scoped>
h1{
  font-size: 55px;
  text-align: center;
  color:rgb(10, 10, 77);
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

p.text{
  font-size: 35px;
}

strong{
  color:red;
}

.customers{
  font-size: 25px;
}

.card-header{
  background-color: rgb(157, 199, 253);
  font-weight: bold;
  color:rgb(10, 10, 77);
  font-size: 25px;
}

.jumbotron{
  background-color: rgb(157, 199, 253);
  padding: 10px;
}

.percentages{
  font-size: 35px;
}

.strong1{
  color:green;
}

.feedback{
  color:rgb(10, 10, 77);
  font-size: 20px;
}

.feedback1{
  font-size: 20px;
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
    UpcomingEvents,
  },

  data(){
    return {
      events: [],
      payments: [],
      customers:[],
      profiles:[],
      retrates:[],
      feedbacks:[],
      pymts:[]

    }
  },
   created() {
    this.getEvents(),
    this.getPayments(),
    this.getCustomers(),
    this.getProfiles(),
    this.getRetRate(),
    this.getFeedback(),
    this.getAnualPymt();
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
      },

      async getProfiles() {
      try {
        const response = await axios.get("http://localhost:5000/TotalPendingProfiles");
        this.profiles = response.data;
      } catch (err) {
        console.log(err);
      }
      },

      async getRetRate() {
      try {
        const response = await axios.get("http://localhost:5000/RetRateCompany");
        this.retrates = response.data;
      } catch (err) {
        console.log(err);
      }
    },

      async getFeedback() {
      try {
        const response = await axios.get("http://localhost:5000/SomeFeedback");
        this.feedbacks = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async getAnualPymt() {
      try {
        const response = await axios.get("http://localhost:5000/AnnualPaymentCust");
        this.pymts = response.data;
      } catch (err) {
        console.log(err);
      }
    }
  },

  

}
</script>