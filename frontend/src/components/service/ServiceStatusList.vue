<template>
  <div>
    <router-link :to="{ name: 'AddServiceStatus' }" class="button is-success mt-5"
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
        <tr v-for="sStat in serviceStatus" :key="sStat.service_status_id">
          <td>{{sStat.service_status_id}}
          <td>{{sStat.name}}</td>
          
          
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'ViewServiceStatus', params: { id: sStat.service_status_id } }"
              class="button is-info is-small"
              >View</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteServiceStatus(sStat.service_status_id)"
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
  name: "ServiceStatusList",
  data() {
    return {
      serviceStatus: [],
    };
  },
 
  created() {
    this.getServiceStatus();
  },
 
  methods: {
    // Get All ServiceStatus
    async getServiceStatus() {
      try {
        const response = await axios.get("http://localhost:5000/ServiceStatus");
        this.serviceStatus = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete ServiceStatus
    async deleteServiceStatus(id) {
      try {
        await axios.delete(`http://localhost:5000/ServiceStatus/${id}`);
        this.getserviceStatus();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
