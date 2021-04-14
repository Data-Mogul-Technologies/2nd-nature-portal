<template>
    <div>
        <h2>DMD Profiles and Details</h2>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name </th>
          <th>Email</th>
          <th>Business Name</th>
          <th>Sport</th>
          <th>Dominant Driver</th>
          <th>Secondary Driver</th>
          <th>Report Date</th>
          <th>Report Status</th>
          <!-- <th class="has-text-centered">Actions</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in report" :key="record.dmd_customer_report_id">
          <td>{{ record.FirstName }}</td>
          <td>{{ record.LastName }}</td>
          <td>{{ record.EmailAddress }}</td>
          <td>{{ record.BusinessName}}</td>
          <td>{{ record.SportType }}</td>
          <td>{{ record.DMDDominantDriver }}</td>
          <td>{{ record.SecondaryDriver }}</td>
          <td>{{ record.ReportDate }}</td>
          <td>{{ record.DMDReportStatus }}</td>
          
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
    name: "DMDProfileReport",
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
              const response = await axios.get("http://localhost:5000/DMDReportResult");
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