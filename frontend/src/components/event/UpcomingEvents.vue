<template>
  <div>
    
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Event Name</th>
          <th>Date</th>
          <th>City</th>
          <th>State</th>
          <th>Status</th>
          <th>Number of Attendees</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in events" :key="event.event_id">
          <td>{{ event.Name }}</td>
          <td>{{ event.Date | formatDate }}</td>
          <td>{{ event.City }}</td>
          <td>{{ event.State }}</td>
          <td>{{ event.Status}}</td>
          <td>{{ event.HowManyAttendees}}</td>
          
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'View', params: { id: event.event_id } }"
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
  name: "Events",
  data() {
    return {
      events: [],
    };
  },
 
  created() {
    this.getEvents();
  },


  methods: {
    // Get All events
    async getEvents() {
      try {
        const response = await axios.get("http://localhost:5000/UpcomingEvents");
        this.events = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Evenet
    async deleteEvent(id) {
      try {
        await axios.delete(`http://localhost:5000/UpcomingEvents/${id}`);
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