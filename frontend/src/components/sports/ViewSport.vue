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
      <button class="button is-success" @click="updateSport">Update</button>
      <router-link :to="{name:'SportList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ViewSport",
  data() {
    return {
        SportName : "",
        
    };
  },
  created: function () {
    this.getSportById();
  },
  methods: {
    // Get Sport By Id
    async getSportById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/Sports/${this.$route.params.id}`
        );
        this.SportName = response.data.name;
       

      } catch (err) {
        console.log(err);
      }
    },
    
    // Update Customer
    async updateSport() {
      try {
        await axios.put(
          `http://localhost:5000/Sports/${this.$route.params.id}`,
          {
            name: this.SportName,
            
          }
        );
        this.SportName = "";
       
        
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>



<style>
</style>