<template>
    <div>
        <h2>Customer Feedback results</h2>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name </th>
          <th>Sport</th>
          <th>Action Type</th>
          <th>How We Helped</th>
          <th>Secondary Driver</th>
          <th>Would you recommend us</th>
          <th>General Feedback</th>
          <!-- <th class="has-text-centered">Actions</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in report" :key="record.dmd_customer_report_id">
          <td>{{ record.FirstName }}</td>
          <td>{{ record.LastName }}</td>
          <td>{{ record.Sporttype }}</td>
          <td>{{ record.ATProfileResult}}</td>
          <td>{{ record.HowHearResponse }}</td>
          <td>{{ record.HowhelpfulComments }}</td>
          <td>{{ record.RecommendComments }}</td>
          <td>{{ record.GeneralFeedback }}</td>
          
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
    name: "CustomerFeedback",
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
              const response = await axios.get("http://localhost:5000/CustFeedback");
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