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
        <tr v-for="(consultant, index) in consultants" 
            :key="index" 
            @click="setSelectedConsultant(consultant, index)" 
            :class="{'highlight': (index == currentIndex)}"
        >
          <td>{{ consultant.first_name }}</td>
          <td>{{ consultant.last_name }}</td>
          <td>{{ consultant.email }}</td>
          <td>{{ consultant.phone}}</td>
          <td>{{ consultant.start_date | formatDate }}</td>
          
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'ViewConsultant', params: { id: consultant.sport_consultant_id } }"
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
      currentConsultant: null,
      currentIndex: -1,
    };
  },
 
  created() {
    this.getConsultants();
  },
 
  methods: {
    setSelectedConsultant(consultant, index) {
            this.currentConsultant = consultant;
            this.currentIndex = index;
            console.log(this.currentConsultant.sport_consultant_id)
        },

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
.table{
    border: 1px solid #888;
    border-radius: 5px;
    overflow: auto;   
}
.highlight {
    background-color: #93b9d0;
}
tr:hover td {
    background-color: #93b9d0;
    cursor: pointer;
}
</style>
