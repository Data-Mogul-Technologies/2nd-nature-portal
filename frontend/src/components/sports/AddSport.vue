<template>
  <div>
    <div class="field">
      <label class="label">Sport Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Sport Name"
          v-model="SportName"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="saveSport">Add</button>
      <router-link :to="{name:'SportList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";


export default {
  name: "AddSport",
 
  data() {
    
    return {
        SportName : ""
    };
  },
  
  methods: {
    // Create New Sport
    async saveSport() {
      try { 
        await axios.post("http://localhost:5000/Sports", {
            name: this.SportName
        });
        this.SportName = "";
        
        this.$router.push("/SportList");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
</style>