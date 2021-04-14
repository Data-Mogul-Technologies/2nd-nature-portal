<template>
    <div class="field">
      <label class="label">Status:</label>
      <span class="select">
      <select name ="ServiceStatusSelect" v-model="selectedServiceStatus" @change="changeServiceStatus()">
          <option v-for="ServiceStatus in ServiceStatus" v-bind:key="ServiceStatus.service_status_id" :value="ServiceStatus.service_status_id">
              {{ServiceStatus.name}}
              </option>
      </select>
      </span>
      
    </div>
    
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ServiceStatusDrop",
  data: function(){
    return {
        selectedServiceStatus: 0,
        ServiceStatus: [],
    }

  },
  methods:{
    changeServiceStatus(){
      this.$emit('changeServiceStatus', this.selectedServiceStatus)
    }

  },
  mounted(){
      axios.get('http://localhost:5000/ServiceStatus').then(response =>{
          this.ServiceStatus = response.data;
          console.log(response.data);
      }).catch(e =>{

      })
  },
  
};
</script>
 
<style>
</style>