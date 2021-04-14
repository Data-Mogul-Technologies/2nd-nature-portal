<template>
    <div class="field">
      <label class="label">Payment Source:</label>
      <span class="select">
      <select name ="PaymentSourceSelect" v-model="selectedPaymentSource" @change="changePaymentSource()">
          <option v-for="PaymentSource in PaymentSource" v-bind:key="PaymentSource.payment_source_id" :value="PaymentSource.payment_source_id">
              {{PaymentSource.name}}
              </option>
      </select>
      </span>
    </div>
    
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "PaymentSourceDrop",
  data: function(){
    return {
        selectedPaymentSource: 2,
        PaymentSource: [],
    }

  },
  methods:{
    changePaymentSource(){
      this.$emit('changePaymentSource', this.selectedPaymentSource)
    }

  },
  mounted(){
      axios.get('http://localhost:5000/PaymentSource').then(response =>{
          this.PaymentSource = response.data;
          console.log(response.data);
      }).catch(e =>{

      })
  },
  
};
</script>
 
<style>
</style>