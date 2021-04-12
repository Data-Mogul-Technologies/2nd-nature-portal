<template>
  <div>
    <div class="field">
      <label class="label">Payment Type Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Type Name"
          v-model="PaymentSourceName"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="updatePaymentSource">Update</button>
      <router-link :to="{name:'PaymentSourceList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ViewPaymentSource",
  data() {
    return {
        PaymentSourceName : "",
        
    };
  },
  created: function () {
    this.getPaymentSourceById();
  },
  methods: {
    // Get Payment Type By Id
    async getPaymentSourceById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/PaymentSource/${this.$route.params.id}`
        );
        this.PaymentSourceName = response.data.name;
       

      } catch (err) {
        console.log(err);
      }
    },
    
    // Update Payment
    async updatePaymentSource() {
      try {
        await axios.put(
          `http://localhost:5000/PaymentSource/${this.$route.params.id}`,
          {
            name: this.PaymentSourceName,
            
          }
        );
        this.PaymentSourceName = "";
       
        
        this.$router.push("/page/payment-source");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>



<style>
</style>