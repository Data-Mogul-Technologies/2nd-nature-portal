<template>
    <div class="field">
      <label class="label">Event Type:</label>
      <span class="select">
      <select name ="EventTypeSelect" v-model="selectedEventType" @change="changeEventType()">
          <option v-for="EventType in EventType" v-bind:key="EventType.event_type_id" :value="EventType.event_type_id">
              {{EventType.name}}
              </option>
      </select>
      </span>
    </div>
    
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "EventTypeDrop",
  data: function(){
    return {
        selectedEventType: 6,
        EventType: [],
    }

  },
  methods:{
    changeEventType(){
      this.$emit('changeEventType', this.selectedEventType)
    }

  },
  mounted(){
      axios.get('http://localhost:5000/EventType').then(response =>{
          this.EventType = response.data;
          console.log(response.data);
      }).catch(e =>{

      })
  },
  
};
</script>
 
<style>
</style>