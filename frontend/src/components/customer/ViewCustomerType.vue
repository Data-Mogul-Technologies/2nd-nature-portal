<template>
  <div>
    <div class="field">
      <label class="label">Customer Type Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Type Name"
          v-model="CustomerTypeName"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="updateCustomerType">Update</button>
      <router-link :to="{name:'CustomerTypeList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ViewCustomerType",
  data() {
    return {
        CustomerTypeName : "",
        
    };
  },
  created: function () {
    this.getCustomerTypeById();
  },
  methods: {
    // Get Customer Type By Id
    async getCustomerTypeById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/CustomerTypes/${this.$route.params.id}`
        );
        this.CustomerTypeName = response.data.name;
       

      } catch (err) {
        console.log(err);
      }
    },
    
    // Update Customer
    async updateCustomerType() {
      try {
        await axios.put(
          `http://localhost:5000/CustomerTypes/${this.$route.params.id}`,
          {
            name: this.CustomerTypeName,
            
          }
        );
        this.CustomerTypeName = "";
       
        
        this.$router.push("/page/customer-type");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>



<style>
</style>