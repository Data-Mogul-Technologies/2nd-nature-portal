<template>
  <div>
    <h1>Add Profile Status</h1>
    <div class="field">
      <label class="label">Profile Status</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Profile Status Name"
          v-model="ProfileStatusName"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="saveProfileStatus">Add</button>
      <router-link :to="{name:'ProfileStatusList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";


export default {
  name: "AddProfileStatus",
 
  data() {
    
    return {
        ProfileStatusName : ""
    };
  },
  
  methods: {
    // Create New ProfileStatus
    async saveProfileStatus() {
      try { 
        await axios.post("http://localhost:5000/ProfileStatus", {
            name: this.ProfileStatusName
        });
        this.ProfileStatusName = "";
        
        this.$router.push("/page/profile-status");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
</style>