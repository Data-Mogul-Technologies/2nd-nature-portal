<template>
    <div class="field">
      <label class="label">Business:</label>
      <span class="select">
      <select name ="businessTypeSelect" v-model="selectedBusiness" @change="changeBusiness()">
          <option v-for="businessType in BusinessTypes" v-bind:key="businessType._id" v-bind:value="businessType.business_id">{{businessType.name}}</option>
      </select>
      </span>
      
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
  methods:{
    changeBusiness(){
      this.$emit('changeBusiness', this.selectedBusiness)
    }

  },
  mounted(){
      axios.get('http://localhost:5000/Businesses').then(response =>{
          this.BusinessTypes = response.data;
      }).catch(e =>{

      })
  },
  
};
</script>
 
<style>
</style>