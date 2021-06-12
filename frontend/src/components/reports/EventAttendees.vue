<template>
  <div>
   <h1>Event Attendees</h1>
    <table class="table is-striped is-bordered mt-10 is-fullwidth">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Business</th>
          <th>Payment Status</th>
          
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.customer_id">
          <td>{{ customer.FirstName }}</td>
          <td>{{ customer.LastName }}</td>
          <td>{{ customer.Business}}</td>
          <td>{{ customer.PaymentStatus}}</td>
          
          
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// import axios
import axios from "axios";
 
export default {
  name: "EventAttendees",
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
        const response = await axios.get("http://localhost:5000/EventAttendees/1");
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
