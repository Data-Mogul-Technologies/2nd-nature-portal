<template>
  <div>
    <h1>View Service Status</h1>
    <div class="field">
      <label class="label">Service Status Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="First Name"
          v-model="ServiceStatusName"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="updateServiceStatus">Update</button>
      <router-link :to="{name:'ServiceStatusList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ViewServiceStatus",
  data() {
    return {
        ServiceStatusName : "",
        
    };
  },
  created: function () {
    this.getServiceStatusById();
  },
  methods: {
    // Get Service Status By Id
    async getServiceStatusById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/ServiceStatus/${this.$route.params.id}`
        );
        this.ServiceStatusName = response.data.name;
       

      } catch (err) {
        console.log(err);
      }
    },
    
    // Update Service
    async updateServiceStatus() {
      try {
        await axios.put(
          `http://localhost:5000/ServiceStatus/${this.$route.params.id}`,
          {
            name: this.ServiceStatusName,
            
          }
        );
        this.ServiceStatusName = "";
       
        
        this.$router.push("/page/service-status");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>



<style>
</style>