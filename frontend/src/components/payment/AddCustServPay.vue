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
      <label class="label">Service Type</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Service Type"
          v-model="ServiceName"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Amount</label>
      <div class="control">
        <input
          class="input"
          type="number"
          min="1" max="5"
          v-model="PayAmount"
        />
      </div>
    </div>

   <PaymentSourceDrop @changePaymentSource="selectedPaymentSource=$event"/>


    <div class="field">
      <label class="label">Confirmation #</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Mobile Phone"
          v-model="ConfirmNum"
        />
      </div>
    </div>

    <PaymentStatusDrop @changePaymentStatus="selectedPaymentStatus=$event"/>
 

    
<div class="field">
      <label class="label">Date Made</label>
      <div class="control">
        <input
          class="input"
          type="date"
          placeholder="Date Made"
          v-model="DateMade "
        />   
      </div>
    </div>
    
    
    <div class="control">
      <button class="button is-success" @click="addPayment">UPDATE</button>
      <router-link :to="{name:'CustServPayList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  </div>
</template>
<script>
// import axios
import axios from "axios";
import PaymentSourceDrop from '../dropdowns/PaymentSourceDrop' 
import PaymentStatusDrop from '../dropdowns/PaymentStatusDrop'
export default {
  name: "ViewCustomer",
  components:{
    PaymentSourceDrop,
    PaymentStatusDrop
  },
  data() {
    return {
        CustomerFName : "",
        CustomerLName : "",
        ServiceName:"",
        DateMade:"",
        PayAmount:"",
        selectedPaymentSource : 0,
        ConfirmNum:"",
        selectedPaymentStatus:0,
        
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
          `http://localhost:5000/CustServ/${this.$route.params.id}`
        );
        this.CustomerFName = response.data.first_name;
        this.CustomerLName = response.data.last_name;
        this.ServiceName = response.data.ServiceName;
        
        
        

      } catch (err) {
        console.log(err);
      }
    },
    
    // Update Customer
    async addPayment() {
      try {
        await axios.post(
          `http://localhost:5000/CustPayment`,
          {
            
            
            date: this.DateMade,
            amount: this.PayAmount,
            payment_source_id: this.selectedPaymentSource,
            confirmation_num: this.ConfirmNum,
            payment_status_id: this.selectedPaymentStatus,
            customer_service_type_id: this.$route.params.id
            
           
          }
        );
        // this.CustomerFName = "";
        // this.CustomerLName = "";
        // this.ServiceName="";
        // this.DateMade="";
        // this.PayAmount="";
        // this.selectedPaymentSource= "";
        // this.ConfirmNum="";
        // this.selectedPaymentStatus="";
        
        
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