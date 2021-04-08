<template>
  <div>
    <router-link :to="{ name: 'AddEventStatus' }" class="button is-success mt-5"
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
        <tr v-for="eStat in eventStatus" :key="eStat.event_status_id">
          <td>{{eStat.event_status_id}}
          <td>{{eStat.name}}</td>
          
          
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'ViewEventStatus', params: { id: eStat.event_status_id } }"
              class="button is-info is-small"
              >View</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteEventStatus(eStat.event_status_id)"
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
  name: "EventStatusList",
  data() {
    return {
      eventStatus: [],
    };
  },
 
  created() {
    this.getEventStatus();
  },
 
  methods: {
    // Get All EventStatus
    async getEventStatus() {
      try {
        const response = await axios.get("http://localhost:5000/EventStatus");
        this.eventStatus = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete EventStatus
    async deleteEventStatus(id) {
      try {
        await axios.delete(`http://localhost:5000/EventStatus/${id}`);
        this.getEventStatus();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
