<template>
  <div>
    <h1>2nd Nature Performance's Customer Retention Rate Report</h1>
    <table class="table is-striped is-bordered mt-10 is-fullwidth">
      <thead>
        <tr>
          <th># of Prospected Customers:</th>
          <th># of Actual Customers:</th>
          <th>Retention Rate:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.customer_id">
          <td>{{ customer.ProspectDate }}</td>
          <td>{{ customer.ActualDate }}</td>
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
  name: "RetRateCompany",
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
        const response = await axios.get("http://localhost:5000/RetRateCompany");
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
