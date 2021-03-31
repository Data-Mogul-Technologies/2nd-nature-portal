<template>
    <div class="field">
      <label class="label">Status:</label>
      <select name ="customerStatusTypeSelect" v-model="selectedCustomerStatus">
          <option v-for="statusType in CustomerStatusTypes" v-bind:key="statusType._id" v-bind:value="statusType.name">{{statusType.name}}</option>
      </select>
      
    </div>
    
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "CustomerStatusDrop",
  data: function(){
    return {
        selectedCustomerStatus: '',
        CustomerStatusTypes: [],
    }

  },
  mounted(){
      axios.get('http://localhost:5000/StatusTypes').then(response =>{
          this.CustomerStatusTypes = response.data;
      }).catch(e =>{

      })
  },
  
};
</script>
 
<style>
</style>