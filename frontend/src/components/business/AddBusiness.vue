<template>
  <div>
    <h1>Add Business</h1>
    <div class="field is-horizontal"> 
        <div class="field has-addons">
      <div class="control">
      <label class="label">Business Name</label>
 
        <input
          class="input"
          type="text"
          placeholder="Business Name"
          v-model="BusinessName"
        />
      </div>
    </div>
    </div>

    
    <div class="field ">
    <div class="control">
      <button class="button is-success" @click="saveBusiness">Add</button>
      <router-link :to="{name:'BusinessList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
    </div>
  
  </div>

    
</template>
<script>
// import axios
import axios from "axios";


export default {
  name: "AddBusiness",
 
  data() {
    
    return {
        BusinessName : ""
    };
  },
  
  methods: {
    // Create New Business
    async saveBusiness() {
      try { 
        await axios.post("http://localhost:5000/Businesses", {
            name: this.BusinessName
        });
        this.BusinessName = "";
        
        this.$router.push("/page/list-businesses");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
</style>