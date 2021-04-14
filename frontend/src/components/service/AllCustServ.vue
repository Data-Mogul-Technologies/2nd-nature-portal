<template>
  <div>
    <router-link :to="{ name: 'CustomerList' }" class="button is-link mt-5"
      >Customer List</router-link>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Service</th>
          <th>Service Status</th>
          
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.customer_id">
          <td>{{ customer.first_name }}</td>
          <td>{{ customer.last_name }}</td>
          <td>{{ customer.ServiceName }}</td>
          <td>{{ customer.StatusName}}</td>
          
          
          <td class="has-text-centered">
             <router-link
              :to="{ name: 'EditService', params: { id: customer.customer_service_type_id } }"
              class="button is-info is-small"
              >Update Status</router-link
            >
            <router-link
              :to="{ name: 'AddCustServPay', params: { id: customer.customer_service_type_id } }"
              class="button is-info is-small"
              >Add Payment</router-link
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
  name: "AllCustServ",
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
        const response = await axios.get("http://localhost:5000/CustServ");
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
