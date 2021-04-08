<template>
  <div>
    <div class="field">
      <label class="label">Customer Status Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="First Name"
          v-model="CustomerStatusName"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="updateCustomerStatus">Update</button>
      <router-link :to="{name:'CustomerStatusList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ViewCustomerStatus",
  data() {
    return {
        CustomerStatusName : "",
        
    };
  },
  created: function () {
    this.getCustomerStatusById();
  },
  methods: {
    // Get Customer Status By Id
    async getCustomerStatusById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/StatusTypes/${this.$route.params.id}`
        );
        this.CustomerStatusName = response.data.name;
       

      } catch (err) {
        console.log(err);
      }
    },
    
    // Update Customer
    async updateCustomerStatus() {
      try {
        await axios.put(
          `http://localhost:5000/StatusTypes/${this.$route.params.id}`,
          {
            name: this.CustomerStatusName,
            
          }
        );
        this.CustomerStatusName = "";
       
        
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