<template>
  <div>
    <div class="field">
      <label class="label">Customer Status</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Customer Status Name"
          v-model="CustomerStatusName"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="saveCustomerStatus">Add</button>
      <router-link :to="{name:'CustomerStatusList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";


export default {
  name: "AddCustomerStatus",
 
  data() {
    
    return {
        CustomerStatusName : ""
    };
  },
  
  methods: {
    // Create New CustomerStatus
    async saveCustomerStatus() {
      try { 
        await axios.post("http://localhost:5000/StatusTypes", {
            name: this.CustomerStatusName
        });
        this.CustomerStatusName = "";
        
        this.$router.push("/CustomerStatusList");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
</style>