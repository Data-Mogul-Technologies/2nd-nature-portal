<template>
    <div class="field">
      <label class="label">Status:</label>
      <span class="select">
      <select name ="PaymentStatusSelect" v-model="selectedPaymentStatus" @change="changePaymentStatus()">
          <option v-for="PaymentStatus in PaymentStatus" v-bind:key="PaymentStatus.payment_status_id" :value="PaymentStatus.payment_status_id">
              {{PaymentStatus.name}}
              </option>
      </select>
      </span>
    </div>
    
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "PaymentStatusDrop",
  data: function(){
    return {
        selectedPaymentStatus: 0,
        PaymentStatus: [],
    }

  },
  methods:{
    changePaymentStatus(){
      this.$emit('changePaymentStatus', this.selectedPaymentStatus)
    }

  },
  mounted(){
      axios.get('http://localhost:5000/PaymentStatus').then(response =>{
          this.PaymentStatus = response.data;
          console.log(response.data);
      }).catch(e =>{

      })
  },
  
};
</script>
 
<style>
</style>