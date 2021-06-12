<template>
  <div>
    <h1>Annual Payment Report</h1>
    <table class="table is-striped is-bordered mt-10 is-fullwidth">
      <thead>
        <tr>
          <th>$ from Services</th>
          <th>$ from Event</th>
          <th>Total $</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.customer_id">
          <td>{{ customer.Services }}</td>
          <td>{{ customer.Events }}</td>
          <td>{{ customer.Total }}</td>
         

          
          
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AnnualPaymentCust",
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
        const response = await axios.get("http://localhost:5000/AnnualPaymentCust");
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
