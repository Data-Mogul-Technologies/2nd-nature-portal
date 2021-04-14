<template>
  <div>
   <div class = "field is-horizontal"> 
    <div class="field has-addons">
      <div class="control">
      <label class="label">Customer First Name</label>
      
        <input
          class="input"
          type="text"
          placeholder="Customer First Name"
          v-model="CustomerFName"
        />
      </div>
    </div>
    <div class="field has-addons">
      <div class="control">
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
    <div class="field has-addons">
      <div class="control">
      <label class="label">Amount</label>
      
        <input
          class="input"
          type="text"
          
          v-model="PayAmount"
        />
      </div>
    </div>

    <div class="field has-addons"> 
      <div class="control">
      <label class="label">Payment Source</label>
     
        <p>{{PaySource}}</p>
      </div>
    </div>
<PaymentSourceDrop @changePaymentSource="selectedPaymentSource=$event"/>

    <div class="field has-addons">
      <div class="control">
      <label class="label">Confirmation #</label>
      
        <input
          class="input"
          type="text"
          placeholder="Confirmation #"
          v-model="ConfirmNum"
        />
      </div>
    </div>

    <div class="field">
       <div class="control">
      <label class="label">Payment Status</label>
     
        <p>{{PayStat}}</p>
      </div>
    </div>
 <PaymentStatusDrop @changePaymentStatus="selectedPaymentStatus=$event"/>

    <div class="field">
      <div class="control">
      <label class="label">Date Made</label>
      
        <p>{{DateMade | formatDate}}</p>
      </div>
    </div>

    
    
    <div class="control">
      <button class="button is-success" @click="updateCustomer">UPDATE</button>
      <router-link :to="{name:'CustServPayList'}"><button class="button is-danger">Cancel</button></router-link>
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
        customers: [],
        CustomerFName : "",
        CustomerLName : "",
        DateMade:"",
        PayAmount:"",
        PaySource : "",
        ConfirmNum:"",
        PayStat:"",
        selectedPaymentStatus: 0,
        selectedPaymentSource: 0
        
        
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
          `http://localhost:5000/CustPayment/${this.$route.params.id}`
        );
        this.customers=response.data;
        this.CustomerFName = response.data.first_name;
        this.CustomerLName = response.data.last_name;
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
          `http://localhost:5000/CustPayment/${this.$route.params.id}`,
          {
            
            date: this.DateMade,
            amount: this.PayAmount,
            payment_status_id: this.selectedPaymentStatus,
            confirmation_num: this.ConfirmNum,
            payment_source_id: this.selectedPaymentSource,
            
           
          }
        );
        
        console.log(this.selectedPaymentStatus);
        console.log(this.selectedPaymentSource)
        
        this.$router.push("/payment/service-payment");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>