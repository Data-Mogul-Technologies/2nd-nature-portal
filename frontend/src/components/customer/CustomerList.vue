<template>
  <div>
    
    <router-link :to="{ name: 'Create' }" class="button is-danger mt-5"
      >Add New</router-link>
      <router-link :to="{ name: 'AllCustServ' }" class="button is-link mt-5"
      >Service List (Add Payment)</router-link>

      <router-link :to="{ name: 'FeedbackList' }" class="button is-link mt-5"
      >Feedback</router-link>
   
    <table class="table is-striped is-bordered mt-2 is-fullwidth " style="border:{2px; solid;}">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
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
              class="button is-link is-small "
              >View</router-link
            >
            <router-link
              :to="{ name: 'AddService', params: { id: customer.customer_id } }"
              class="button is-link is-small"
              >Add Service</router-link
            >

            <router-link
              :to="{ name: 'AddFeedback', params: { id: customer.customer_id } }"
              class="button is-link is-small"
              >Add Feedback</router-link
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
/* .table {
  border: 1px solid;
  border-radius: 5px;
  
} */
.table {
  border: 2px solid #000000;
}

.table tr td {
   border: 3px solid #000000;
}

.table thead th{
  border: 3px solid #000000;
  
}

.button{
 margin: 5px;
}

</style>
