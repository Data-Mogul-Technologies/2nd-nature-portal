


<template>
  <div>
    <router-link :to="{ name: 'RegPayList' }" class="button is-success mt-5"
      >Add New</router-link>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>eventName</th>
          <th>eventType</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Payment Source</th>
          <th>Confirmation #</th>
          <th>Status</th>
          
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="payment in regPayment" :key="payment.customer_id">
          <td>{{ payment.customer_id }}</td>
          <td>{{ payment.first_name }}</td>
          <td>{{ payment.last_name }}</td>
          <td>{{ payment.eventName  }}</td>
          <td>{{ payment.eventType }}</td>
          <td>{{ payment.date | formatDate }}</td>
          <td>{{ payment.amount }}</td>
          <td>{{ payment.paymentSource }}</td>
          <td>{{ payment.confirmation_num }}</td>
          <td>{{ payment.PaymentStatus }}</td>
          
          
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'ViewRegPay', params: { id: payment.customer_id }}"
              class="button is-info is-small"
              >View</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteRegPayment(payment.customer_id)"
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
  name: "RegPayList",
  data() {
    return {
      regPayment: [],
    };
  },
 
  created() {
    this.getRegPayment();
  },
 
  methods: {
    // Get All payments
    async getRegPayment() {
      try {
        const response = await axios.get("http://localhost:5000/RegistrationPayment");
        this.regPayment = response.data;

      } catch (err) {
        console.log(err);
      }
    },

    // Delete payment
    async deleteRegPayment(id) {
      try {
        await axios.delete(`http://localhost:5000/RegistrationPayment/${id}`);
        this.getRegPayment();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
