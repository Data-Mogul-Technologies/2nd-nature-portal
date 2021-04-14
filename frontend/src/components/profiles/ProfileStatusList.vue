<template>
  <div>
    <h1>Profile Status List</h1>
    <router-link :to="{ name: 'AddProfileStatus' }" class="button is-success mt-5"
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
        <tr v-for="proStat in profileStatus" :key="proStat.status_at_dmd_id">
          <td>{{proStat.status_at_dmd_id}}
          <td>{{proStat.name}}</td>
          
          
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'ViewProfileStatus', params: { id: proStat.status_at_dmd_id } }"
              class="button is-info is-small"
              >View</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteProfileStatus(proStat.status_at_dmd_id)"
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
  name: "ProfileStatusList",
  data() {
    return {
      profileStatus: [],
    };
  },
 
  created() {
    this.getProfileStatus();
  },
 
  methods: {
    // Get All ProfileStatus
    async getProfileStatus() {
      try {
        const response = await axios.get("http://localhost:5000/ProfileStatus");
        this.profileStatus = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete ProfileStatus
    async deleteProfileStatus(id) {
      try {
        await axios.delete(`http://localhost:5000/ProfileStatus/${id}`);
        this.getProfileStatus();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
