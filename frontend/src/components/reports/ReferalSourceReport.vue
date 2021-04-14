<template>
    <div>
        <h2>Percentage of Customers Referred by Referal Source</h2>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Referral source</th>
          <th>Percentage of customers </th>
          <!-- <th class="has-text-centered">Actions</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in report" :key="record.feedback_id">
          <td>{{ record.Howcustomershearof2NP }}</td>
          <td>{{ record.percentResults }}</td>
          
          <!-- <td class="has-text-centered">
            <router-link
              :to="{ name: 'View', params: { id: customer.customer_id } }"
              class="button is-info is-small"
              >View</router-link
            >
            <router-link
              :to="{ name: 'AddService', params: { id: customer.customer_id } }"
              class="button is-info is-small"
              >Add Service</router-link
            >
            </td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
//import axios
import axios from "axios";

export default {
    name: "ReferralSourceReport",
    data() {
      return {
        report: []
      };
    },

    created() {
      this.getReport();
    },

    methods: {
      //get all dmd profiles
      async getReport() {
            try {
              const response = await axios.get("http://localhost:5000/CountHowHear");
              this.report = response.data;
              console.log(response.data)
            } catch (err) {
              console.log(err);
            }
        },
    }
    
}
</script>


<style lang="scss">

</style>