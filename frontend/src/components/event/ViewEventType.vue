<template>
  <div>
    <div class="field">
      <label class="label">Event Type Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Type Name"
          v-model="EventTypeName"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="updateEventType">Update</button>
      <router-link :to="{name:'EventTypeList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ViewEventType",
  data() {
    return {
        EventTypeName : "",
        
    };
  },
  created: function () {
    this.getEventTypeById();
  },
  methods: {
    // Get Event Type By Id
    async getEventTypeById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/EventType/${this.$route.params.id}`
        );
        this.EventTypeName = response.data.name;
       

      } catch (err) {
        console.log(err);
      }
    },
    
    // Update Event
    async updateEventType() {
      try {
        await axios.put(
          `http://localhost:5000/EventType/${this.$route.params.id}`,
          {
            name: this.EventTypeName,
            
          }
        );
        this.EventTypeName = "";
       
        
        this.$router.push("/EventTypeList");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>



<style>
</style>