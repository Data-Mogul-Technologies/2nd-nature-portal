<template>
  <div>
    <router-link :to="{ name: 'AddATProfile' }" class="button is-success mt-5"
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
        <tr v-for="ATprof in ATProfile" :key="ATprof.at_profile_id">
          <td>{{ATprof.at_profile_id}}
          <td>{{ATprof.at_profile}}</td>
          
          
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'ViewATProfile', params: { id: ATprof.at_profile_id } }"
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
  name: "ATProfileList",
  data() {
    return {
      ATProfile: [],
    };
  },
 
  created() {
    this.getATProfile();
  },
 
  methods: {
    // Get All ATProfile
    async getATProfile() {
      try {
        const response = await axios.get("http://localhost:5000/ATProfileTypes");
        this.ATProfile = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
  },
};
</script>
 
<style>
</style>
