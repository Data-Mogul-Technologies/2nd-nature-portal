<template>
  <div>
    <div class="field">
      <label class="label">Service Type Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Type Name"
          v-model="ServiceTypeName"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="updateServiceType">Update</button>
      <router-link :to="{name:'ServiceTypeList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ViewServiceType",
  data() {
    return {
        ServiceTypeName : "",
        
    };
  },
  created: function () {
    this.getServiceTypeById();
  },
  methods: {
    // Get Service Type By Id
    async getServiceTypeById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/ServiceType/${this.$route.params.id}`
        );
        this.ServiceTypeName = response.data.name;
       

      } catch (err) {
        console.log(err);
      }
    },
    
    // Update Service
    async updateServiceType() {
      try {
        await axios.put(
          `http://localhost:5000/ServiceType/${this.$route.params.id}`,
          {
            name: this.ServiceTypeName,
            
          }
        );
        this.ServiceTypeName = "";
       
        
        this.$router.push("/ServiceTypeList");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>



<style>
</style>