<template>
  <div>
    <h1>Add Event Type</h1>
    <div class="field">
      <label class="label">Event Type</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Event Type Name"
          v-model="EventTypeName"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="saveEventType">Add</button>
      <router-link :to="{name:'EventTypeList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";


export default {
  name: "AddEventType",
 
  data() {
    
    return {
        EventTypeName : ""
    };
  },
  
  methods: {
    // Create New EventType
    async saveEventType() {
      try { 
        await axios.post("http://localhost:5000/EventType", {
            name: this.EventTypeName
        });
        this.EventTypeName = "";
        
        this.$router.push("/page/event-type");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
</style>