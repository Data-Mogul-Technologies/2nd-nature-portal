<template>
  <div>
    <h1>Consultant's Customer Retention Rate Report</h1>
    <table class="table is-striped is-bordered mt-10 is-fullwidth">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Prospect Date:</th>
          <th>Actual Date:</th>
          <th>RetentionRate:</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.customer_id">
          <td>{{ customer.FirstName }}</td>
          <td>{{ customer.LastName }}</td>
          <td>{{ customer.ProspectDate  }}</td>
          <td>{{ customer.ActualDate  }}</td>
          <td>{{ customer.RetentionRate }}</td>

          
          
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// import axios
import axios from "axios";
 
export default {
  name: "YrRetRateConsult",
  data() {
    return {
      customers: [],
    };
  },
 
  created() {
    this.getCustomers();
  },
 
  methods: {
    // Get All Customers
    async getCustomers() {
      try {
        const response = await axios.get("http://localhost:5000/YrRetRateConsult");
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
