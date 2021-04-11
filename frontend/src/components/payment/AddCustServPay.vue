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
          type="text"
          min="1" max="5"
          v-model="PayAmount"
        />
      </div>
    </div>

    <PaymentStatusDrop @changePaymentStatus="selectedPaymentStatus=$event"/>


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

    <PaymentSourceDrop @changePaymentSource="selectedPaymentSource=$event"/>
 

    <div class="field">
      <label class="label">Date Made</label>
      <div class="control">
        <p>{{DateMade | formatDate}}</p>
      </div>
    </div>

    
    
    <div class="control">
      <button class="button is-success" @click="updateCustomer">UPDATE</button>
      <router-link :to="{name:'Home'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  </div>
</template>
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ViewCustomer",
  data() {
    return {
        CustomerFName : "",
        CustomerLName : "",
        ServiceName:"",
        DateMade:"",
        PayAmount:"",
        selectedPaymentStatus : 0,
        ConfirmNum:"",
        selectedPaymentSource:0,
        
        
    };
  },
  
  methods: {
    // Get Customer By Id
    
    
    // Update Customer
    async saveCustomer() {
      try {
        await axios.post("http://localhost:5000/CustPayment", {
            first_name: this.CustomerFName,
            last_name: this.CustomerLName,
            serviceName: this.ServiceName,
            date: this.DateMade,
            amount: this.PayAmount,
            paymentSource: this.PaySource,
            confirmation_num: this.ConfirmNum,
            PaymentStatus: this.PayStat,
            
           
          }
        );
        this.CustomerFName = "";
        this.CustomerLName = "";
        this.ServiceName="";
        this.DateMade="";
        this.PayAmount="";
        this.PaySource= "";
        this.ConfirmNum="";
        this.PayStat="";
        
        
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>