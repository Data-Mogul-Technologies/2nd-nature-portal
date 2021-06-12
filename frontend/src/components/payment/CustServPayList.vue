


<template>
  <div>
    <h1>Customer Service Payment List</h1>
    <router-link :to="{ name: 'CustomerList' }" class="button is-link mt-5"
      >Customer List</router-link>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Service</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Payment Source</th>
          <th>Confirmation #</th>
          <th>Status</th>
          
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="payment in custPayment" :key="payment.customer_service_type_payment_id">
          <td>{{ payment.customer_id }}</td>
          <td>{{ payment.first_name }}</td>
          <td>{{ payment.last_name }}</td>
          <td>{{ payment.serviceName  }}</td>
          <td>{{ payment.date | formatDate }}</td>
          <td>{{ payment.amount }}</td>
          <td>{{ payment.paymentSource }}</td>
          <td>{{ payment.confirmation_num }}</td>
          <td>{{ payment.PaymentStatus }}</td>
          
          
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'ViewCustServPay', params: { id: payment.customer_service_type_payment_id } }"
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
  name: "CustServPayList",
  data() {
    return {
      custPayment: [],
    };
  },
 
  created() {
    this.getCustPayment();
  },
 
  methods: {
    // Get All payments
    async getCustPayment() {
      try {
        const response = await axios.get("http://localhost:5000/CustPayment");
        this.custPayment = response.data;

      } catch (err) {
        console.log(err);
      }
    },

    // Delete payment
    async deleteCustPayment(id) {
      try {
        await axios.delete(`http://localhost:5000/CustPayment/${id}`);
        this.getCustPayment();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
