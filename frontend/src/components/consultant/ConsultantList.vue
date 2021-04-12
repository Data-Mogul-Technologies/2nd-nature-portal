<template>
  <div>
    <router-link :to="{ name: 'AddConsultant' }" class="button is-success mt-5"
      >Add New</router-link>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Start Date</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="consultant in consultants" :key="consultant.sport_consultant_id">
          <td>{{ consultant.first_name }}</td>
          <td>{{ consultant.last_name }}</td>
          <td>{{ consultant.email }}</td>
          <td>{{ consultant.phone}}</td>
          <td>{{ consultant.start_date | formatDate }}</td>
          
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'EditConsultant', params: { id: consultant.sport_consultant_id } }"
              class="button is-info is-small"
              >View</router-link
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
  name: "ConsultantList",
  data() {
    return {
      consultants: [],
    };
  },
 
  created() {
    this.getConsultants();
  },
 
  methods: {
    // Get All Consultants
    async getConsultants() {
      try {
        const response = await axios.get("http://localhost:5000/Consultants");
        this.consultants = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Consultant
    async deleteConsultant(id) {
      try {
        await axios.delete(`http://localhost:5000/Consultants/${id}`);
        this.getConsultants();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
