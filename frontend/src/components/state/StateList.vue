<template>
  <div>
    <h1>State List</h1>
    <router-link :to="{ name: 'AddState' }" class="button is-success mt-5"
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
        <tr v-for="state in states" :key="state.state_id">
         
         <td>{{ state.state_id }}</td>
          <td>{{ state.name }}</td>
          
          
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'ViewState', params: { id: state.state_id }}"
              class="button is-info is-small"
              >View</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deletestate(state.state_id)"
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
  name: "StateList",
  data() {
    return {
      states: [],
    };
  },
 
  created() {
    this.getState();
  },
 
  methods: {
    // Get All state
    async getState() {
      try {
        const response = await axios.get("http://localhost:5000/State");
        this.states = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete state
    async deletestate(id) {
      try {
        await axios.delete(`http://localhost:5000/State/${id}`);
        this.getState();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
