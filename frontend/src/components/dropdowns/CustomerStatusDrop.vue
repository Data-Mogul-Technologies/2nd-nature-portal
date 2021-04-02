<template>
    <div class="field">
      <label class="label">Status:</label>
      <select name ="customerStatusTypeSelect" v-model="selectedCustomerStatus" @change="changeStatusType()">
          <option v-for="statusType in CustomerStatusTypes" v-bind:key="statusType.customer_status_id" :value="statusType.customer_status_id">{{statusType.name}}</option>
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
        selectedCustomerStatus: 0,
        CustomerStatusTypes: [],
    }

  },
  methods:{
    changeStatusType(){
      this.$emit('changeStatusType', this.selectedCustomerStatus)
    }

  },
  mounted(){
      axios.get('http://localhost:5000/StatusTypes').then(response =>{
          this.CustomerStatusTypes = response.data;
          console.log(response.data);
      }).catch(e =>{

      })
  },
  
};
</script>
 
<style>
</style>