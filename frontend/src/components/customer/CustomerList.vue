<template>
  <div>
    <router-link :to="{ name: 'Create' }" class="button is-success mt-5"
      >Add New</router-link>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Date Joined</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.customer_id">
          <td>{{ customer.first_name }}</td>
          <td>{{ customer.last_name }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.mobile_phone}}</td>
          <td>{{ customer.actual_date | formatDate }}</td>
          
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'View', params: { id: customer.customer_id } }"
              class="button is-info is-small"
              >View</router-link
            >
            
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "CustomerList",
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
        const response = await axios.get("http://localhost:5000/Customers");
        this.customers = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Customer
    async deleteCustomer(id) {
      try {
        await axios.delete(`http://localhost:5000/Customers/${id}`);
        this.getCustomers();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
