<template>
  <div>
    <div class="field">
      <label class="label">Profile Status Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="First Name"
          v-model="ProfileStatusName"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="updateProfileStatus">Update</button>
      <router-link :to="{name:'ProfileStatusList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ViewProfileStatus",
  data() {
    return {
        ProfileStatusName : "",
        
    };
  },
  created: function () {
    this.getProfileStatusById();
  },
  methods: {
    // Get Profile Status By Id
    async getProfileStatusById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/ProfileStatus/${this.$route.params.id}`
        );
        this.ProfileStatusName = response.data.name;
       

      } catch (err) {
        console.log(err);
      }
    },
    
    // Update Profile
    async updateProfileStatus() {
      try {
        await axios.put(
          `http://localhost:5000/ProfileStatus/${this.$route.params.id}`,
          {
            name: this.ProfileStatusName,
            
          }
        );
        this.ProfileStatusName = "";
       
        
        this.$router.push("/ProfileStatusList");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>



<style>
</style>