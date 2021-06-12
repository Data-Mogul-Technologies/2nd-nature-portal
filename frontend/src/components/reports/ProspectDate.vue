<template>
  <div>
   <h1>Prospect Customer Report</h1>
    <table class="table is-striped is-bordered mt-10 is-fullwidth">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Business</th>
          <th>Customer Type</th>
          <th>Sport Type</th>
          <th>Mobile Phone</th>
          <th>Office Phone</th>
          <th>Prospect Date:</th>
          <th>Actual Date:</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.customer_id">
          <td>{{ customer.FirstName }}</td>
          <td>{{ customer.LastName }}</td>
          <td>{{ customer.Email}}</td>
          <td>{{ customer.BusinessName}}</td>
          <td>{{ customer.CustomerType}}</td>
          <td>{{ customer.SportType}}</td>
          <td>{{ customer.MobilePhone}}</td>
          <td>{{ customer.OfficePhone}}</td>
          <td>{{ customer.ProspectDate | formatDate }}</td>
          <td>{{ customer.ActualDate | formatDate }}</td>
          
          
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ProspectDate",
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
        const response = await axios.get("http://localhost:5000/ProspectDate");
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
