<template>
  <div>
    <h1>View Consultant</h1>
    
    <div class="field">
      <p> <strong> Consultant First Name: </strong> {{consultants.first_name}}</p>
    </div>
    <div class="field">
      <p><strong>Consultant Last Name:</strong> {{consultants.last_name}}</p>
    </div>
    
    <div class="field">
      <p><strong>Address: </strong>{{consultants.address}}    {{consultants.city}}, {{consultants.StateName}} {{consultants.zip_code}}</p>    
    </div>

    <div class="field">
      <p><strong>Phone #:</strong> {{consultants.phone}}</p>
    </div>

    <div class="field">
      <p><strong>Alt Phone #:</strong> {{consultants.alt_phone}}</p>
    </div>

    <div class="field">
      <p><strong>Email:</strong> {{consultants.email}}</p>
    </div>

    <div class="field">
      <p><strong>Prospect Date:</strong> {{consultants.start_date | formatDate}}</p>
    </div>

    <div class="field">
     <p><strong>Actual Date:</strong> {{consultants.end_date | formatDate}}</p>
    </div>

    <div class="field">
      <p><strong>Status:</strong> {{consultants.StatusName}}</p>
    </div>

    <div class="field">
      <p><strong>Comments:</strong> {{consultants.comments}}</p>
    </div>
     
    <div class="control">    
      <router-link :to="{name:'EditConsultant',params: { id: this.$route.params.id }}"><button class="button is-info">Edit</button></router-link>
      <router-link :to="{name:'ConsultantList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>

    <b-col class = "events">
      <b-card>
        <b-card-text>
          <div class="col-md-20">
            <h4>{{consultants.first_name}}'s registered events</h4>
            <div v-if="events">
              <div class = "dropdown">
                <EventDrop @changeEvent = "selectedEvent=$event" v-model="selectedEvent"/> 
                <b-button variant="primary" size="sm" @click="addConsultantToEvent">Join event</b-button>
              </div>
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th>Event Name</th>
                    <th>Event Type</th>
                    <th>Event Date</th>
                    <th>Zip code</th>
                    <th>Event Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(event, index) in events"
                      :key="index"
                      :class="{'highlight': (index == currentIndex)}"
                  >
                    <td>{{event.eventName}}</td>
                    <td>{{event.eventType}}</td>
                    <td>{{event.eventDate | formatDate}}</td>
                    <td>{{event.zip_code}}</td>
                    <td>{{event.event_status}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else>
              <p>No events registered. </p>
            </div>
          </div>
        </b-card-text>
      </b-card>
    </b-col>
  </div>
</template>


<script>
// import axios
import axios from "axios";
import EventDrop from '../dropdowns/EventDrop';
 
export default {
  name: "ViewConsultant",
  components: {EventDrop},
  data() {
    return {
        consultants: [],
        events:[],
        selectedEvent: 0,
        currentIndex: -1
    };
  },
  created: function () {
    this.getConsultantById();
    this.getConsultantEvents();
  },
  methods: {
    // Get Consultant By Id
    async getConsultantById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/Consultants/${this.$route.params.id}`
        );
        this.consultants = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    //get all events for consultant from sport_consultant_event table
    async getConsultantEvents() {
      try {
        const response = await axios.get (`http://localhost:5000/EventsForConsultant/${this.$route.params.id}`);
        this.events = response.data;
        console.log(response.data)
      } catch (err) {
        console.log(err);
      }
    },

    //register consultant to event 
    async addConsultantToEvent() {
      try {
        await axios.post("http://localhost:5000/EventsForConsultant", {
            sport_consultant_id: this.$route.params.id,
            event_id: this.selectedEvent
        });

        window.location.reload();
        // this.$router.push("/page/list-consultants");
      } catch (err) {
        console.log(err);
      }
    },

  }
};
</script>
 
<style>
.events {
  padding-top: 20px;
}
.table{
    border: 1px solid #888;
    border-radius: 5px;
    overflow: auto;   
}
.highlight {
    background-color: #93b9d0;
}
tr:hover td {
    background-color: #93b9d0;
    cursor: pointer;
}
.dropdown {
  display: inline;
}
</style>