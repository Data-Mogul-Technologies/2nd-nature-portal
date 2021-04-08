<template>
  <div>
    <router-link :to="{ name: 'AddPaymentStatus' }" class="button is-success mt-5"
      >Add New</router-link>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pStat in paymentStatus" :key="pStat.payment_status_id">
          <td>{{pStat.payment_status_id}}
          <td>{{pStat.name}}</td>
          
          
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'ViewPaymentStatus', params: { id: pStat.payment_status_id } }"
              class="button is-info is-small"
              >View</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deletePaymentStatus(pStat.payment_status_id)"
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
  name: "PaymentStatusList",
  data() {
    return {
      paymentStatus: [],
    };
  },
 
  created() {
    this.getPaymentStatus();
  },
 
  methods: {
    // Get All PaymentStatus
    async getPaymentStatus() {
      try {
        const response = await axios.get("http://localhost:5000/PaymentStatus");
        this.paymentStatus = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete PaymentStatus
    async deletePaymentStatus(id) {
      try {
        await axios.delete(`http://localhost:5000/PaymentStatus/${id}`);
        this.getPaymentStatus();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
