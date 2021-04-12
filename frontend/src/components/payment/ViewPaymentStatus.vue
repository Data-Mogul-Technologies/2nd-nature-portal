<template>
  <div>
    <div class="field">
      <label class="label">Payment Status Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="First Name"
          v-model="PaymentStatusName"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="updatePaymentStatus">Update</button>
      <router-link :to="{name:'PaymentStatusList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ViewPaymentStatus",
  data() {
    return {
        PaymentStatusName : "",
        
    };
  },
  created: function () {
    this.getPaymentStatusById();
  },
  methods: {
    // Get Payment Status By Id
    async getPaymentStatusById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/PaymentStatus/${this.$route.params.id}`
        );
        this.PaymentStatusName = response.data.name;
       

      } catch (err) {
        console.log(err);
      }
    },
    
    // Update Payment
    async updatePaymentStatus() {
      try {
        await axios.put(
          `http://localhost:5000/PaymentStatus/${this.$route.params.id}`,
          {
            name: this.PaymentStatusName,
            
          }
        );
        this.PaymentStatusName = "";
       
        
        this.$router.push("/page/payment-status");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>



<style>
</style>