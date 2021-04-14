<template>
  <div>
    <h1>View DMD Profile</h1>
    <div class="field">
      <label class="label">Dominant Driver</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Dominant"
          v-model="DmdDominant"
        />
      </div>
    </div>

    
    <div class="field">
      <label class="label">Secondary Driver</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Secondary Driver"
          v-model="DmdSecondary"
        />
      </div>
    </div>

    <div class="control">
      <button class="button is-success" @click="updateDmdProfile">Update</button>
      <router-link :to="{name:'DmdProfileList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ViewDmdProfile",
  data() {
    return {
        DmdDominant: "",
        DmdSecondary: "",

        
    };
  },
  created: function () {
    this.getDmdProfileById();
  },
  methods: {
    // Get Profile Status By Id
    async getDmdProfileById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/DmdProfile/${this.$route.params.id}`
        );
        this.DmdDominant = response.data.dom_driver;
        this.DmdSecondary = response.data.sec_driver;
       

      } catch (err) {
        console.log(err);
      }
    },
    
    // Update Profile
    async updateDmdProfile() {
      try {
        await axios.put(
          `http://localhost:5000/DmdProfile/${this.$route.params.id}`,
          {
            dom_driver: this.DmdDominant,
            sec_driver: this.DmdSecondary,
            
            
          }
        );
       
       
        
        this.$router.push("/profile/manage-dm-ds");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>



<style>
</style>