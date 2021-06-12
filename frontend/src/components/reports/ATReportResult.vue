<template>
  <div>
    <h1>AT Results Report</h1>
    <table class="table is-striped is-bordered mt-10 is-fullwidth">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Business</th>
          <th>Sport</th>
          <th>AT Profile</th>
          <th>Status</th>
          <th>Date of Report</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.customer_id">
          <td>{{ customer.FirstName }}</td>
          <td>{{ customer.LastName }}</td>
          <td>{{ customer.EmailAddress }}</td>
          <td>{{ customer.BusinessName }}</td>
          <td>{{ customer.SportType }}</td>
          <td>{{ customer.ATProfileResult }}</td>
          <td>{{ customer.ReportStatus }}</td>
          <td>{{ customer.ReportDate | formatDate }}</td>
          

          
          
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ATReportResult",
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
        const response = await axios.get("http://localhost:5000/ATReportResult");
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
