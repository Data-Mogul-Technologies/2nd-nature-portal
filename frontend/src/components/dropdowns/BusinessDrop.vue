<template>
    <div class="field">
      <label class="label">Business:</label>
      <select name ="businessTypeSelect" v-model="selectedBusiness">
          <option v-for="businessType in BusinessTypes" v-bind:key="businessType._id" v-bind:value="businessType.name">{{businessType.name}}</option>
      </select>
      
    </div>
    
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "BusinessDrop",
  data: function(){
    return {
        selectedBusiness: 0,
        BusinessTypes: [],
    }

  },
  mounted(){
      axios.get('http://localhost:5000/Business').then(response =>{
          this.BusinessTypes = response.data;
      }).catch(e =>{

      })
  },
  
};
</script>
 
<style>
</style>