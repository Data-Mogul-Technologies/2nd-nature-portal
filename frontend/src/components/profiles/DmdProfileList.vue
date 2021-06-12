<template>
  <div>
    <h1>DMD Profile List</h1>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Dominant Driver</th>
          <th>Secondary Driver</th>
          
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="Dmdprof in DmdProfile" :key="Dmdprof.dmd_profile_id">
          <td>{{Dmdprof.dmd_profile_id}}
          <td>{{Dmdprof.dom_driver}}</td>
          <td>{{Dmdprof.sec_driver}}</td>
          
          
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'ViewDmdProfile', params: { id: Dmdprof.dmd_profile_id }}"
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
  name: "DmdProfileList",
  data() {
    return {
      DmdProfile: [],
    };
  },
 
  created() {
    this.getDmdProfile();
  },
 
  methods: {
    // Get All DmdProfile
    async getDmdProfile() {
      try {
        const response = await axios.get("http://localhost:5000/dmdProfileTypes");
        this.DmdProfile = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete DmdProfile
    async deleteDmdProfile(id) {
      try {
        await axios.delete(`http://localhost:5000/DmdProfile/${id}`);
        this.getDmdProfile();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
