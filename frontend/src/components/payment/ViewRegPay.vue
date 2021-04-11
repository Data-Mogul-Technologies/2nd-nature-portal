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
          placeholder="Confirmation #"
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
          placeholder="Payment Status"
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
            first_name: this.CustomerFName,
            last_name: this.CustomerLName,
            eventName: this.EventName,
            eventType: this.EventType,
            date: this.DateMade,
            amount: this.PayAmount,
            paymentSource: this.PaySource,
            confirmation_num: this.ConfirmNum,
            PaymentStatus: this.PayStat,
            
           
          }
        );
        this.CustomerFName = "";
        this.CustomerLName = "";
        this.EventName="";
        this.EventType="";
        this.DateMade="";
        this.PayAmount="";
        this.PaySource= "";
        this.ConfirmNum="";
        this.PayStat="";
        
        
        this.$router.push("/RegPayList");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>