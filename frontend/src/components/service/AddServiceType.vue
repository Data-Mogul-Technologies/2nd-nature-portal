<template>
  <div>
    <div class="field">
      <label class="label">Service Type</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Service Type Name"
          v-model="ServiceTypeName"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="saveServiceType">Add</button>
      <router-link :to="{name:'ServiceTypeList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";


export default {
  name: "AddServiceType",
 
  data() {
    
    return {
        ServiceTypeName : ""
    };
  },
  
  methods: {
    // Create New ServiceType
    async saveServiceType() {
      try { 
        await axios.post("http://localhost:5000/ServiceType", {
            name: this.ServiceTypeName
        });
        this.ServiceTypeName = "";
        
        this.$router.push("/ServiceTypeList");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
</style>