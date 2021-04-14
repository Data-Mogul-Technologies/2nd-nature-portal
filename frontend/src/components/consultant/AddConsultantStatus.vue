<template>
  <div>
    <h1>Add Consultant Status</h1>
    <div class="field">
      <label class="label">Consultant Status</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Consultant Status Name"
          v-model="ConsultantStatusName"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="saveConsultantStatus">Add</button>
      <router-link :to="{name:'ConsultantStatusList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";


export default {
  name: "AddConsultantStatus",
 
  data() {
    
    return {
        ConsultantStatusName : ""
    };
  },
  
  methods: {
    // Create New ConsultantStatus
    async saveConsultantStatus() {
      try { 
        await axios.post("http://localhost:5000/ConsultantStatus", {
            name: this.ConsultantStatusName
        });
        this.ConsultantStatusName = "";
        
        this.$router.push("/page/customer-status");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
</style>