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
        <p>{{EventDate | formatDate}}</p>
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
      <button class="button is-success" @click="updateEvent">Add</button>
      <router-link :to="{name:'EventList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  </div>
</template>
<script>
// import axios
import axios from "axios";


import StateDrop from '../dropdowns/StateDrop';

export default {
  name: "ViewEvent",
  components:{
    
    StateDrop
  },
  data() {
    
    return {
        EventName : "",
        EventDate:"",
        EventAddress:"",
        EventCity:"",
        selectedState:0,
        EventZip : 0,
        // selectedEventType: 0,
        // selectedEventStatus: 0,
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
            comments: this.EventComment
          }
        );
        this.EventName = "";
        this.EventDate="";
        this.EventAddress="";
        this.EventCity="";
        this.EventZip= 0;
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