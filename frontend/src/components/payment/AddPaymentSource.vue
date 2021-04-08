<template>
  <div>
    <div class="field">
      <label class="label">Payment Type</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Payment Type Name"
          v-model="PaymentSourceName"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="savePaymentSource">Add</button>
      <router-link :to="{name:'PaymentSourceList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";


export default {
  name: "AddPaymentSource",
 
  data() {
    
    return {
        PaymentSourceName : ""
    };
  },
  
  methods: {
    // Create New PaymentSource
    async savePaymentSource() {
      try { 
        await axios.post("http://localhost:5000/PaymentSource", {
            name: this.PaymentSourceName
        });
        this.PaymentSourceName = "";
        
        this.$router.push("/PaymentSourceList");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
</style>