<template>
    <div class="field">
      <label class="label">Choose Event:</label>
      <select name ="EventSelect" v-model="selectedEvent" @change="changeEvent()">
          <option v-for="event in events" v-bind:key="event.event_id" v-bind:value="event.event_id">{{event.name}}</option>
      </select>
      
    </div>
    
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "EventDrop",

  data: function(){
    return {
        selectedEvent: 0,
        events: [],
    }

  },

  methods:{
    changeEvent(){
      this.$emit('changeEvent', this.selectedEvent)
    }

  },

  mounted(){
      axios.get('http://localhost:5000/Events').then(response =>{
          this.events = response.data;
      }).catch(e =>{

      })
  },
  
};
</script>
 
<style>
</style>