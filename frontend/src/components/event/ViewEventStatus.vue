<template>
  <div>
    <div class="field">
      <label class="label">Event Status Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="First Name"
          v-model="EventStatusName"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="updateEventStatus">Update</button>
      <router-link :to="{name:'EventStatusList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ViewEventStatus",
  data() {
    return {
        EventStatusName : "",
        
    };
  },
  created: function () {
    this.getEventStatusById();
  },
  methods: {
    // Get Event Status By Id
    async getEventStatusById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/EventStatus/${this.$route.params.id}`
        );
        this.EventStatusName = response.data.name;
       

      } catch (err) {
        console.log(err);
      }
    },
    
    // Update Event
    async updateEventStatus() {
      try {
        await axios.put(
          `http://localhost:5000/EventStatus/${this.$route.params.id}`,
          {
            name: this.EventStatusName,
            
          }
        );
        this.EventStatusName = "";
       
        
        this.$router.push("/EventStatusList");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>



<style>
</style>