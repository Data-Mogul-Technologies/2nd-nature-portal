<template>
  <div>
    <div class="field">
      <label class="label">Business Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="First Name"
          v-model="BusinessName"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="updateBusiness">Update</button>
      <router-link :to="{name:'BusinessList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ViewBusiness",
  data() {
    return {
        BusinessName : "",
        
    };
  },
  created: function () {
    this.getBusinessById();
  },
  methods: {
    // Get Business By Id
    async getBusinessById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/Businesses/${this.$route.params.id}`
        );
        this.BusinessName = response.data.name;
       

      } catch (err) {
        console.log(err);
      }
    },
    
    // Update Customer
    async updateBusiness() {
      try {
        await axios.put(
          `http://localhost:5000/Businesses/${this.$route.params.id}`,
          {
            name: this.BusinessName,
            
          }
        );
        this.BusinessName = "";
       
        
        this.$router.push("/page/list-businesses");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>



<style>
</style>