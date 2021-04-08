<template>
  <div>
    <div class="field">
      <label class="label">Event Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Event Name"
          v-model="EventName"
        />
      </div>
    </div>

     <div class="field">
      <label class="label">Date</label>
      <div class="control">
        <input
          class="input"
          type="date"
          placeholder="Actual Date"
          v-model="EventDate"
        />   
      </div>
    </div>

 <div class="field">
      <label class="label">Address</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Address"
          v-model="EventAddress"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">City</label>
      <div class="control">
        <input
          class="input"
          type="text"
          min="1" max="5"
          v-model="EventCity"
        />
      </div>
    </div>

<StateDrop @changeState="selectedState=$event"/>    

    <div class="field">
      <label class="label">Zip Code</label>
      <div class="control">
        <input
          class="input"
          type="number"
          min="1" max="5"
          v-model="EventZip"
        />
      </div>
    </div>
 
    <div class="field">
      <label class="label">Comments</label>
      <div class="control">
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

export default {
  name: "AddEvent",
  components:{
    
    StateDrop
  },
  data() {
    
    return {
        EventName : "",
        EventDate:YYYY-MM-DD,
        EventAddress:"",
        EventCity:"",
        selectedState:0,
        EventZip : 0,
        // selectedEventType: 0,
        // selectedEventStatus: 0,
        EventComment:"",
    };
  },
  
  methods: {
    // Create New Event
    async saveEvent() {
      try {
        await axios.post("http://localhost:5000/Events", {
            name: this.EventFName,
            date: this.EventDate,
            address: this.EventAddress,
            city: this.EventCity,
            state_id:this.selectedState,
            zip_code: this.EventZip,
            comments: this.EventComment
        });
        this.EventName = "";
        this.EventDate="";
        this.EventAddress="";
        this.EventCity="";
        this.selectedState=0;
        this.EventZip= 0;
        this.EventComment="";
        this.$router.push("/EventList");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
</style>