<template>
  <div>
    <h2>View Registration Payment</h2>
    <div class="field">
      <p><strong>Event Name:</strong> {{customers.eventName}}</p>
    </div>
    <div class="field is-horizontal">
    <div class="field"><div class="control">
      <label class="label">Customer First Name</label>
      
        <input
          class="input"
          type="text"
          placeholder="Customer First Name"
          v-model="CustomerFName"
        />
      </div>
    </div>
    

    <div class="field has-addons"><div class="control">
      <label class="label">Customer Last Name</label>
      
        <input
          class="input"
          type="text"
          placeholder="Customer Last Name"
          v-model="CustomerLName"
        />
      </div>
    </div>
    </div>


 <div class="field">
      <p><strong>Event Type:</strong> {{customers.eventType}}</p>
    </div>

    

    <div class="field has-addons"><div class="control">
      <label class="label">Amount</label>
      
        <input
          class="input"
          type="text"
          min="1" max="5"
          v-model="PayAmount"
        />
      </div>
    </div>

     <div class="field"> <div class="control">
      <label class="label">Payment Source</label>
     
        <p>{{PaySource}}</p>
      </div>
    </div>
<PaymentSourceDrop @changePaymentSource="selectedPaymentSource=$event"/>


    <div class="field has-addons"><div class="control">
      <label class="label">Confirmation #</label>
      
        <input
          class="input"
          type="number"
          placeholder="Confirmation #"
          v-model="ConfirmNum"
        />
      </div>
    </div>

    <div class="field"> <div class="control">
      <label class="label">Payment Status</label>
     
        <p>{{PayStat}}</p>
      </div>
    </div>
 <PaymentStatusDrop @changePaymentStatus="selectedPaymentStatus=$event"/>
 

    <div class="field"> <div class="control">
      <label class="label">Payment date:</label>
        <p>{{DateMade | formatDate}}</p>
          <input
            class="input"
            type="date"
            placeholder="Confirmation #"
            v-model="DateMade"
        />
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
            
            
            date: this.DateMade,
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
h2{
  text-decoration: underline;
}
</style>