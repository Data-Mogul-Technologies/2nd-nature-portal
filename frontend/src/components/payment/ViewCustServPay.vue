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

    <div class="field">
      <label class="label">Payment Source</label>
      <div class="control">
        <input
          class="input"
          type="text"
          min="1" max="5"
          v-model="PaySource"
        />
      </div>
    </div>


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

    <div class="field">
      <label class="label">Payment Status</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Office Phone"
          v-model="PayStat"
        />
      </div>
    </div>
 

    <div class="field">
      <label class="label">Date Made</label>
      <div class="control">
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
 
export default {
  name: "ViewCustomer",
  data() {
    return {
        CustomerFName : "",
        CustomerLName : "",
        ServiceName:"",
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
          `http://localhost:5000/CustPayment/${this.$route.params.id}`
        );
        this.CustomerFName = response.data.first_name;
        this.CustomerLName = response.data.last_name;
        this.ServiceName = response.data.serviceName;
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