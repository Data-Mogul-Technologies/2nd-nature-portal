<template>
  <div>
    <h1>View Event</h1>
    <div class="field has-addons"><div class="control">
      <label class="label">Event Name</label>
      
        <input
          class="input"
          type="text"
          placeholder="Event Name"
          v-model="EventName"
        />
      </div>
    </div>
    <div class="field">
      <p><strong>Current Event Status:</strong> {{events.event_status}}</p>
    </div>
<EventStatusDrop @changeEventStatus="selectedEventStatus=$event"/>  

<div class="field">
      <p><strong>Current Event Type:</strong> {{events.event_type}}</p>
    </div>
<EventTypeDrop @changeEventType="selectedEventType=$event"/>  
     <div class="field">
     <div class="field has-addons"><div class="control">
      <label class="label">Date</label>
      
        <p>{{EventDate | formatDate}}</p>
      </div>
    </div>

 <div class="field has-addons"><div class="control">
      <label class="label">Address</label>
      
        <input
          class="input"
          type="text"
          placeholder="Address"
          v-model="EventAddress"
        />
      </div>
    </div>

    <div class="field has-addons"><div class="control">
      <label class="label">City</label>
      
        <input
          class="input"
          type="text"
          min="1" max="5"
          v-model="EventCity"
        />
      </div>
    </div>

<StateDrop @changeState="selectedState=$event"/>    

    <div class="field has-addons"><div class="control">
      <label class="label">Zip Code</label>
      
        <input
          class="input"
          type="number"
          min="1" max="5"
          v-model="EventZip"
        />
      </div>
    </div>
 
    <div class="field"><div class="control">
      <label class="label">Comments</label>
      
       <textarea rows="4" cols="50" name="comment" form="usrform" v-model="EventComment">
</textarea>
      </div>
    </div>
    
    <div class="control">
      <button class="button is-success" @click="updateEvent">Add</button>
      <router-link :to="{name:'EventList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  </div>
</template>
<script>
// import axios
import axios from "axios";
import EventTypeDrop from '../dropdowns/EventTypeDrop';
import EventStatusDrop from '../dropdowns/EventStatusDrop';

import StateDrop from '../dropdowns/StateDrop';

export default {
  name: "ViewEvent",
  components:{
    EventTypeDrop,
    EventStatusDrop,
    StateDrop
  },
  data() {
    
    return {
        events: [],
        EventName : "",
        EventDate:"",
        EventAddress:"",
        EventCity:"",
        selectedState:0,
        EventZip : 0,
        selectedEventType: 0,
        selectedEventStatus: 0,
        EventComment:"",
    };
  },
  created: function () {
    this.getEventById();
  },
   methods: {
    // Get Event By Id
    async getEventById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/Events/${this.$route.params.id}`
        );
        this.events = response.data;
        this.EventName = response.data.name;
        this.EventDate = response.data.date;
        this.EventAddress = response.data.address;
        this.EventCity = response.data.city;
        this.EventZip = response.data.zip_code;
        this.EventComment = response.data.comments;

      } catch (err) {
        console.log(err);
      }
    },
    
    // Update Event
    async updateEvent() {
      try {
        await axios.put(
          `http://localhost:5000/Events/${this.$route.params.id}`,
          {
            name: this.EventName,
            date: this.EventDate,
            address: this.EventAddress,
            city: this.EventCity,
            zip_code: this.EventZip,
            comments: this.EventComment,
            event_type_id: this.selectedEventType,
            event_status_id: this.selectedEventStatus,
            state_id: this.selectedState
          }
        );
       
        this.$router.push("/event/list-events");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
</style>