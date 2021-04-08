<template>
  <div>
    <router-link :to="{ name: 'AddEventType' }" class="button is-success mt-5"
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
        <tr v-for="eType in eventType" :key="eType.event_type_id">
          <td>{{eType.event_type_id}}
          <td>{{eType.name}}</td>
          
          
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'ViewEventType', params: { id: eType.event_type_id } }"
              class="button is-info is-small"
              >View</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteEventType(eType.event_type_id)"
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
  name: "EventTypeList",
  data() {
    return {
      eventType: [],
    };
  },
 
  created() {
    this.getEventType();
  },
 
  methods: {
    // Get All EventType
    async getEventType() {
      try {
        const response = await axios.get("http://localhost:5000/EventType");
        this.eventType = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete EventType
    async deleteEventType(id) {
      try {
        await axios.delete(`http://localhost:5000/EventType/${id}`);
        this.getEventType();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
