<template>
  <div>
    <h1>Business List</h1>
    <router-link :to="{ name: 'AddBusiness' }" class="button is-success mt-5"
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
        <tr v-for="business in businesses" :key="business.business_id">
          <td>{{business.business_id}}
          <td>{{ business.name }}</td>
          
          
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'ViewBusiness', params: { id: business.business_id } }"
              class="button is-info is-small"
              >View</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteBusiness(business.business_id)"
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
  name: "BusinessList",
  data() {
    return {
      businesses: [],
    };
  },
 
  created() {
    this.getBusiness();
  },
 
  methods: {
    // Get All Businesses
    async getBusiness() {
      try {
        const response = await axios.get("http://localhost:5000/Businesses");
        this.businesses = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Businesses
    async deleteBusiness(id) {
      try {
        await axios.delete(`http://localhost:5000/Business/${id}`);
        this.getBusiness();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
