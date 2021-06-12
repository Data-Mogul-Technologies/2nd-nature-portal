<template>
  <div>
    <h1>Pending Payments</h1>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Business Name</th>
          <th>Service</th>
          <th>Payment Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.customer_id">
          <td>{{ customer.FirstName }}</td>
          <td>{{ customer.LastName }}</td>
          <td>{{ customer.BusinessName }}</td>
          <td>{{ customer.Service}}</td>
          <td>{{ customer.Status}}</td>
      
        
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "PendingPayment",
  data() {
    return {
      customers: [],
    };
  },
 
  created() {
    this.getPendingPayment();
  },


 
  methods: {
    // Get Pending Payments
    async getPendingPayment() {
      try {
        const response = await axios.get("http://localhost:5000/PendingPayment");
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