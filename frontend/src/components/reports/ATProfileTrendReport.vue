<template>
    <div>
    <!-- <router-link :to="{ name: 'Create' }" class="button is-success mt-5"
      >Add New</router-link>
      <router-link :to="{ name: 'AllCustServ' }" class="button is-outline-primary mt-5"
      >Service</router-link> -->
    <h2>Action Type trend among businesses by sport </h2>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Business Name</th>
          <th>Sport Type</th>
          <th>AT Profile Type</th>
          <th>AT Profile Trend</th>
          <!-- <th class="has-text-centered">Actions</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in report" :key="record.at_customer_report_id">
          <td>{{ record.BusinessName }}</td>
          <td>{{ record.SportType }}</td>
          <td>{{ record.ATProfileType }}</td>
          <td>{{ record.ATProfileTrend}}</td>
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
    name: "ATProfileTrend",
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
              const response = await axios.get("http://localhost:5000/CountBusSport");
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