<template>
  <div>
    <h1>Add Event Status</h1>
    <div class="field">
      <label class="label">Event Status</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Event Status Name"
          v-model="EventStatusName"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="saveEventStatus">Add</button>
      <router-link :to="{name:'EventStatusList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";


export default {
  name: "AddEventStatus",
 
  data() {
    
    return {
        EventStatusName : ""
    };
  },
  
  methods: {
    // Create New EventStatus
    async saveEventStatus() {
      try { 
        await axios.post("http://localhost:5000/EventStatus", {
            name: this.EventStatusName
        });
        this.EventStatusName = "";
        
        this.$router.push("/page/event-status");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
</style>