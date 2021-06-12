<template>
    <div>
        <h2>Feedback Report</h2>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
            <th>Rating</th>
            <th>How helpful</th>
            <th>How likely Recommend 2NP</th>
          <!-- <th class="has-text-centered">Actions</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in report" :key="record.dmd_customer_report_id">
            <td>{{record.Rating}}</td>
            <td>{{ record.HowHelpfulwas2NP }}</td>
            <td>{{ record.HowlikelyRecommend2NP }}</td>
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
    name: "FeedbackReport",
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
              const response = await axios.get("http://localhost:5000/CountRecHelp");
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