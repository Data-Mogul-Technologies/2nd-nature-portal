<template>
  <div>
    <h1>View State</h1>
    <div class="field">
      <label class="label">State Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="State Name"
          v-model="StateName"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="updateState">Update</button>
      <router-link :to="{name:'StateList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ViewState",
  data() {
    return {
        StateName : "",
        
    };
  },
  created: function () {
    this.getStateById();
  },
  methods: {
    // Get State By Id
    async getStateById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/State/${this.$route.params.id}`
        );
        this.StateName = response.data.name;
       

      } catch (err) {
        console.log(err);
      }
    },
    
    // Update Customer
    async updateState() {
      try {
        await axios.put(
          `http://localhost:5000/State/${this.$route.params.id}`,
          {
            name: this.StateName,
            
          }
        );
        this.StateName = "";
       
        
        this.$router.push("/page/State");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>



<style>
</style>