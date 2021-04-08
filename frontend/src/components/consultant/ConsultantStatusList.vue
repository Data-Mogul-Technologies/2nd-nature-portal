<template>
  <div>
    <router-link :to="{ name: 'AddConsultantStatus' }" class="button is-success mt-5"
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
        <tr v-for="conStat in consultantStatus" :key="conStat.sport_consultant_status_id">
          <td>{{conStat.sport_consultant_status_id}}
          <td>{{conStat.name}}</td>
          
          
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'ViewConsultantStatus', params: { id: conStat.sport_consultant_status_id } }"
              class="button is-info is-small"
              >View</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteConsultantStatus(conStat.sport_consultant_status_id)"
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
  name: "ConsultantStatusList",
  data() {
    return {
      consultantStatus: [],
    };
  },
 
  created() {
    this.getConsultantStatus();
  },
 
  methods: {
    // Get All ConsultantStatus
    async getConsultantStatus() {
      try {
        const response = await axios.get("http://localhost:5000/ConsultantStatus");
        this.consultantStatus = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete ConsultantStatus
    async deleteConsultantStatus(id) {
      try {
        await axios.delete(`http://localhost:5000/ConsultantStatus/${id}`);
        this.getConsultantStatus();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
