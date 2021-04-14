<template>
  <div>
    <h1>Consultant List</h1>
    <router-link :to="{ name: 'AddConsultant' }" class="button is-link mt-5"
      >Add New</router-link>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Status</th>
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
          <td>{{consultant.StatusName}}</td>
          <td>{{ consultant.start_date | formatDate }}</td>
          
          
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'ViewConsultant', params: { id: consultant.sport_consultant_id } }"
              class="button is-info is-small"
              >View</router-link
            >

            <router-link
              :to="{ name: 'AssignCust', params: { id: consultant.sport_consultant_id } }"
              class="button is-info is-small"
              >Assign Customer</router-link
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
 
    
  },
};
</script>
 
<style>
.button{
 margin: 5px;
}
</style>
