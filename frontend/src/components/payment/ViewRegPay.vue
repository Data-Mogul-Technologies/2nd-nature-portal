<template>
  <div>
    <div class="field">
      <label class="label">Customer First Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Customer First Name"
          v-model="CustomerFName"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Customer Last Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Customer Last Name"
          v-model="CustomerLName"
        />
      </div>
    </div>

 <div class="field">
      <label class="label">Event Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Event Name"
          v-model="EventName"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Event Type</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Event Type"
          v-model="EventType"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Amount</label>
      <div class="control">
        <input
          class="input"
          type="text"
          min="1" max="5"
          v-model="PayAmount"
        />
      </div>
    </div>

     <div class="field">
      <label class="label">Payment Source</label>
      <div class="control">
        <p>{{PaySource}}</p>
      </div>
    </div>
<PaymentSourceDrop @changePaymentSource="selectedPaymentSource=$event"/>


    <div class="field">
      <label class="label">Confirmation #</label>
      <div class="control">
        <input
          class="input"
          type="number"
          placeholder="Confirmation #"
          v-model="ConfirmNum"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Payment Status</label>
      <div class="control">
        <p>{{PayStat}}</p>
      </div>
    </div>
 <PaymentStatusDrop @changePaymentStatus="selectedPaymentStatus=$event"/>
 

    <div class="field">
      <label class="label">Date Made</label>
      <div class="control">
        <p>{{DateMade | formatDate}}</p>
      </div>
    </div>
    
    
    <div class="control">
      <button class="button is-success" @click="updateCustomer">UPDATE</button>
      <router-link :to="{name:'RegPayList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  </div>
</template>
<script>
// import axios
import axios from "axios";
  import PaymentStatusDrop from '../dropdowns/PaymentStatusDrop'
import PaymentSourceDrop from '../dropdowns/PaymentSourceDrop' 
export default {
  name: "ViewCustomer",
  components:{
    PaymentSourceDrop,
    PaymentStatusDrop
  },
  data() {
    return {
        customers:[],
        CustomerFName : "",
        CustomerLName : "",
        EventName:"",
        EventType:"",
        DateMade:"",
        PayAmount:"",
        PaySource : "",
        ConfirmNum:"",
        PayStat:"",
        
        
    };
  },
  created: function () {
    this.getCustomerById();
  },
  methods: {
    // Get Customer By Id
    async getCustomerById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/RegistrationPayment/${this.$route.params.id}`
        );
        this.customers=response.data;
        this.CustomerFName = response.data.first_name;
        this.CustomerLName = response.data.last_name;
        this.EventName = response.data.eventName;
        this.EventType = response.data.eventType;
        this.DateMade = response.data.date;
        this.PayAmount = response.data.amount;
        this.PaySource = response.data.paymentSource;
        this.ConfirmNum = response.data.confirmation_num;
        this.PayStat = response.data.PaymentStatus;
        

      } catch (err) {
        console.log(err);
      }
    },
    
    // Update Customer
    async updateCustomer() {
      try {
        await axios.put(
          `http://localhost:5000/RegistrationPayment/${this.$route.params.id}`,
          {
            
            
            date: this.customers.DateMade,
            amount: this.PayAmount,
            payment_source_id: this.selectedPaymentSource,
            confirmation_num: this.ConfirmNum,
            payment_status_id: this.selectedPaymentStatus,
            
           
          }
        );
        
        console.log(this.DateMade);
        console.log(this.PayAmount);
        console.log(this.ConfirmNum);
        console.log(this.selectedPaymentStatus);
        console.log(this.selectedPaymentSource);
        
        this.$router.push("/payment/event-payment");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>