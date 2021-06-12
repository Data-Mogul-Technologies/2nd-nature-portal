<template>
    <div>
        <h2>Number of Profiles Created per Action Type</h2>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Action Type</th>
          <th>Number of profiles</th>
          <!-- <th class="has-text-centered">Actions</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in report" :key="record.at_customer_report_id">
          <td>{{ record.ActionTypes }}</td>
          <td>{{ record.ATProfileTrend }}</td>

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
    name: "CountATReport",
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
              const response = await axios.get("http://localhost:5000/CountATReport");
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