<template>
  <div>
    <div class="field">
      <label class="label">Customer Type</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Customer Type Name"
          v-model="CustomerTypeName"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="saveCustomerType">Add</button>
      <router-link :to="{name:'CustomerTypeList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";


export default {
  name: "AddCustomerType",
 
  data() {
    
    return {
        CustomerTypeName : ""
    };
  },
  
  methods: {
    // Create New CustomerType
    async saveCustomerType() {
      try { 
        await axios.post("http://localhost:5000/CustomerTypes", {
            name: this.CustomerTypeName
        });
        this.CustomerTypeName = "";
        
        this.$router.push("/CustomerTypeList");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
</style>