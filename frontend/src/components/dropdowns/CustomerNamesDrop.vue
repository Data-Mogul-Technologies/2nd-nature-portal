<template>
    <div class="field">
      <label class="label">Choose customer:</label>
      <span class="select">
      <select name ="customerNameSelect" v-model="selectedCustomerName" @change="changeCustomerName()">
          <option v-for="customerName in CustomerNames" v-bind:key="customerName.customer_id" :value="customerName.customer_id">{{customerName.first_name }} {{customerName.last_name}}</option>
      </select>
      </span>
    </div>
    
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "CustomerNameDrop",
  data: function(){
    return {
        selectedCustomerName: 0,
        CustomerNames: [],
    }

  },
  methods:{
    changeCustomerName(){
      this.$emit('changeCustomerName', this.selectedCustomerName)
    }

  },
  mounted(){
      axios.get('http://localhost:5000/Customers').then(response =>{
          this.CustomerNames = response.data;
          console.log(response.data);
      }).catch(e =>{

      })
  },
  
};
</script>
 
<style>
</style>