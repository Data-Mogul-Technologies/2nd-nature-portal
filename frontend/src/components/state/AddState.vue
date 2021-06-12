<template>
  <div>
    <h1>Add State</h1>
    <div class="field">
      <label class="label">State Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="State Name"
          v-model="StateName"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="saveState">Add</button>
      <router-link :to="{name:'StateList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";


export default {
  name: "AddState",
 
  data() {
    
    return {
        StateName : ""
    };
  },
  
  methods: {
    // Create New State
    async saveState() {
      try { 
        await axios.post("http://localhost:5000/State", {
            name: this.StateName
        });
        this.StateName = "";
        
        this.$router.push("/page/State");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
</style>