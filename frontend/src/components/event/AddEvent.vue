<template>
  <div>
    <h1>Add Event</h1>
    
    <div class="field has-addons">
      <div class="control">
      <label class="label">Event Name</label>
      
        <input
          class="input"
          type="text"
          placeholder="Event Name"
          v-model="EventName"
        />
      </div>
    </div>
    

    
     <div class="field has-addons">
       <div class="control">
      <label class="label">Date</label>
      
        <input
          class="input"
          type="date"
          placeholder="Actual Date"
          v-model="EventDate"
        />   
      </div>
    </div>
    
<div class="field is-horizontal">
 <div class="field"><div class="control">
      <label class="label">Address</label>
      
        <input
          class="input"
          type="text"
          placeholder="Address"
          v-model="EventAddress"
        />
      </div>
    </div>

    <div class="field"><div class="control">
      <label class="label">City</label>
      
        <input
          class="input"
          type="text"
          
          v-model="EventCity"
        />
      </div>
    </div>

<StateDrop @changeState="selectedState=$event"/>    

    <div class="field"><div class="control">
      <label class="label">Zip Code</label>
      
        <input
          class="input"
          type="number"
          placeholder="(5 digits ex. 77564)"
          v-model="EventZip"
        />
      </div>
    </div>
</div>
<EventTypeDrop @changeEventType="selectedEventType=$event"/>   
<EventStatusDrop @changeEventStatus="selectedEventStatus=$event"/>       
 
    <div class="field"><div class="control">
      <label class="label">Comments</label>
      
       <textarea rows="4" cols="50" name="comment" form="usrform" v-model="EventComment">
</textarea>
      </div>
    </div>
    
    <div class="control">
      <button class="button is-success" @click="saveEvent">Add</button>
      <router-link :to="{name:'EventList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  </div>
</template>
<script>
// import axios
import axios from "axios";


import StateDrop from '../dropdowns/StateDrop';
import EventStatusDrop from '../dropdowns/EventStatusDrop';
import EventTypeDrop from '../dropdowns/EventTypeDrop';

export default {
  name: "AddEvent",
  components:{
    
    StateDrop,
    EventStatusDrop,
    EventTypeDrop
  },
  data() {
    
    return {
        EventName : "",
        EventDate:YYYY-MM-DD,
        EventAddress:"",
        EventCity:"",
        selectedState:0,
        EventZip : 0,
        selectedEventType: 0,
        selectedEventStatus: 0,
        EventComment:"",
    };
  },
  
  methods: {
    // Create New Event
    async saveEvent() {
      try {
        await axios.post("http://localhost:5000/Events", {
            name: this.EventName,
            date: this.EventDate,
            address: this.EventAddress,
            city: this.EventCity,
            state_id:this.selectedState,
            zip_code: this.EventZip,
            event_type_id: this.selectedEventType,
            event_status_id: this.selectedEventStatus,
            comments: this.EventComment
        });
        this.EventName = "";
        this.EventDate="";
        this.EventAddress="";
        this.EventCity="";
        this.selectedState=0;
        this.EventZip= 0;
        this.selectedEventType = 0;
        this.selectedEventStatus = 0;
        this.EventComment="";
        this.$router.push("/event/list-event");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
</style>