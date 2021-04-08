<template>
  <div>
    <div class="field">
      <label class="label">Payment Status</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Payment Status Name"
          v-model="PaymentStatusName"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="savePaymentStatus">Add</button>
      <router-link :to="{name:'PaymentStatusList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";


export default {
  name: "AddPaymentStatus",
 
  data() {
    
    return {
        PaymentStatusName : ""
    };
  },
  
  methods: {
    // Create New PaymentStatus
    async savePaymentStatus() {
      try { 
        await axios.post("http://localhost:5000/PaymentStatus", {
            name: this.PaymentStatusName
        });
        this.PaymentStatusName = "";
        
        this.$router.push("/PaymentStatusList");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
</style>