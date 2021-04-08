


<template>
  <div>
    <router-link :to="{ name: 'PaymentList' }" class="button is-success mt-5"
      >Add New</router-link>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Confirmation #</th>
          
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="payment in payments" :key="payment.payment_id">
          <td>{{ payment.date | formatDate }}</td>
          <td>{{ payment.amount }}</td>
          <td>{{ payment.confirmation_num }}</td>
          
          
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'View', params: { id: payment.payment_id } }"
              class="button is-info is-small"
              >View</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deletePayment(payment.payment_id)"
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
  name: "PaymentList",
  data() {
    return {
      payments: [],
    };
  },
 
  created() {
    this.getPayments();
  },
 
  methods: {
    // Get All payments
    async getPayments() {
      try {
        const response = await axios.get("http://localhost:5000/Payments");
        this.payments = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    
 
    // Delete payment
    async deletePayment(id) {
      try {
        await axios.delete(`http://localhost:5000/Payments/${id}`);
        this.getPayments();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
