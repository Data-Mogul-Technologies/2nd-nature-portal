<template>
  <div>
    <h1>Customer Status List</h1>
    <router-link :to="{ name: 'AddCustomerStatus' }" class="button is-success mt-5"
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
        <tr v-for="cStat in customerStatus" :key="cStat.customer_status_id">
          <td>{{cStat.customer_status_id}}
          <td>{{cStat.name}}</td>
          
          
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'ViewCustomerStatus', params: { id: cStat.customer_status_id } }"
              class="button is-info is-small"
              >View</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteCustomerStatus(cStat.customer_status_id)"
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
  name: "CustomerStatusList",
  data() {
    return {
      customerStatus: [],
    };
  },
 
  created() {
    this.getCustomerStatus();
  },
 
  methods: {
    // Get All CustomerStatus
    async getCustomerStatus() {
      try {
        const response = await axios.get("http://localhost:5000/StatusTypes");
        this.customerStatus = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete CustomerStatus
    async deleteCustomerStatus(id) {
      try {
        await axios.delete(`http://localhost:5000/StatusTypes/${id}`);
        this.getCustomerStatus();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
