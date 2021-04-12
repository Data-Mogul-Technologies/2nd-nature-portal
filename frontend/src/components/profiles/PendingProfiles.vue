<template>
  <div>

    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Sport Type</th>
          <th>Profile Status</th>
          <th>Start Date</th> 

        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.customer_id">
          <td>{{ customer.first_name }}</td>
          <td>{{ customer.last_name }}</td>
          <td>{{ customer.sport }}</td>
          <td>{{ customer.profile_status }}</td>
          <td>{{ customer.start_date | formatDate }}</td>


        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "PendingProfiles",
  data() {
    return {
      customers: [],
    };
  },
 
  created() {
    this.getPendingProfiles();
  },


 
  methods: {
    // Get Pending Profiles
    async getPendingProfiles() {
      try {
        const response = await axios.get("http://localhost:5000/PendingProfiles");
        this.customers = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
  },
};
</script>
 
<style>
</style>