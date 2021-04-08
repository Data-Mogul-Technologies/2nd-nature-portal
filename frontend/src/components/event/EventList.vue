<template>
  <div>
    <router-link :to="{ name: 'AddEvent' }" class="button is-success mt-5"
      >Add New</router-link>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Address</th>
          <th>City</th>
          <th>Comments</th>
          
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in events" :key="event.event_id">
          <td>{{ event.name }}</td>
          <td>{{ event.date | formatDate }}</td>
          <td>{{ event.address }}</td>
          <td>{{ event.city}}</td>
          <td>{{ event.comments}}</td>
          
          
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'ViewEvent', params: { id: event.event_id } }"
              class="button is-info is-small"
              >View</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteEvent(event.event_id)"
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
  name: "EventList",
  data() {
    return {
      events: [],
    };
  },
 
  created() {
    this.getEvents();
  },
 
  methods: {
    // Get All Events
    async getEvents() {
      try {
        const response = await axios.get("http://localhost:5000/Events");
        this.events = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Event
    async deleteEvent(id) {
      try {
        await axios.delete(`http://localhost:5000/Events/${id}`);
        this.getEvents();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
