<template>
  <div>
    <h1>Add Service Status</h1>
    <div class="field">
      <label class="label">Service Status</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Service Status Name"
          v-model="ServiceStatusName"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="saveServiceStatus">Add</button>
      <router-link :to="{name:'ServiceStatusList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";


export default {
  name: "AddServiceStatus",
 
  data() {
    
    return {
        ServiceStatusName : ""
    };
  },
  
  methods: {
    // Create New ServiceStatus
    async saveServiceStatus() {
      try { 
        await axios.post("http://localhost:5000/ServiceStatus", {
            name: this.ServiceStatusName
        });
        this.ServiceStatusName = "";
        
        this.$router.push("/page/service-status");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
</style>