<template>
  <div>
    <router-link :to="{ name: 'AddSport' }" class="button is-success mt-5"
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
        <tr v-for="sport in sports" :key="sport.sport_type_id">
         
         <td>{{ sport.sport_type_id }}</td>
          <td>{{ sport.name }}</td>
          
          
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'ViewSport', params: { id: sport.sport_type_id } }"
              class="button is-info is-small"
              >View</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteSport(sport.sport_type_id)"
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
  name: "SportList",
  data() {
    return {
      sports: [],
    };
  },
 
  created() {
    this.getSport();
  },
 
  methods: {
    // Get All Sport
    async getSport() {
      try {
        const response = await axios.get("http://localhost:5000/Sports");
        this.sports = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Sport
    async deleteSport(id) {
      try {
        await axios.delete(`http://localhost:5000/Sports/${id}`);
        this.getSport();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
