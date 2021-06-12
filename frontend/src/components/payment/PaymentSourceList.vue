<template>
  <div>
    <h1>Payment Source List</h1>
    <router-link :to="{ name: 'AddPaymentSource' }" class="button is-success mt-5"
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
        <tr v-for="pSource in PaymentSource" :key="pSource.payment_source_id">
          <td>{{pSource.payment_source_id}}
          <td>{{pSource.name}}</td>
          
          
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'ViewPaymentSource', params: { id: pSource.payment_source_id } }"
              class="button is-info is-small"
              >View</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deletePaymentSource(pSource.payment_source_id)"
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
  name: "PaymentSourceList",
  data() {
    return {
      PaymentSource: [],
    };
  },
 
  created() {
    this.getPaymentSource();
  },
 
  methods: {
    // Get All PaymentSource
    async getPaymentSource() {
      try {
        const response = await axios.get("http://localhost:5000/PaymentSource");
        this.PaymentSource = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete PaymentSource
    async deletePaymentSource(id) {
      try {
        await axios.delete(`http://localhost:5000/PaymentSource/${id}`);
        this.getPaymentSource();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
