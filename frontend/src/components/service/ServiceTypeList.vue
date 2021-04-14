<template>
  <div>
    <h1>Service Type List</h1>
    <router-link :to="{ name: 'AddServiceType' }" class="button is-success mt-5"
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
        <tr v-for="sType in serviceType" :key="sType.service_type_id">
          <td>{{sType.service_type_id}}
          <td>{{sType.name}}</td>
          
          
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'ViewServiceType', params: { id: sType.service_type_id } }"
              class="button is-info is-small"
              >View</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteServiceType(sType.service_type_id)"
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
  name: "ServiceTypeList",
  data() {
    return {
      serviceType: [],
    };
  },
 
  created() {
    this.getServiceType();
  },
 
  methods: {
    // Get All ServiceType
    async getServiceType() {
      try {
        const response = await axios.get("http://localhost:5000/ServiceType");
        this.serviceType = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete ServiceType
    async deleteServiceType(id) {
      try {
        await axios.delete(`http://localhost:5000/ServiceType/${id}`);
        this.getServiceType();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
