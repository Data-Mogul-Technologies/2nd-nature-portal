<template>
    <div class="field">
      <label class="label">Service:</label>
      <select name ="ServiceTypeSelect" v-model="selectedServiceType">
          <option v-for="serviceType in CustomerServiceTypes" v-bind:key="serviceType._id" v-bind:value="serviceType.name">{{serviceType.name}}</option>
      </select>
      
    </div>
    
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ServiceTypeDrop",
  data: function(){
    return {
        selectedServiceType: 0,
        CustomerServiceTypes: [],
    }

  },
  mounted(){
      axios.get('http://localhost:5000/ServiceTypes').then(response =>{
          this.CustomerServiceTypes = response.data;
      }).catch(e =>{

      })
  },
  
};
</script>
 
<style>
</style>