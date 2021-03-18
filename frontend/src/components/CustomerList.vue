<template>
  <div>
    <router-link :to="{ name: 'Create' }" class="button is-success mt-5"
      >Add New</router-link>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Customer Name</th>
          <th>Email</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.customer_id">
          <td>{{ customer.customer_name }}</td>
          <td>{{ customer.customer_email }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'Edit', params: { id: customer.customer_id } }"
              class="button is-info is-small"
              >Edit</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteCustomer(customer.customer_id)"
              >Delete</a
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
