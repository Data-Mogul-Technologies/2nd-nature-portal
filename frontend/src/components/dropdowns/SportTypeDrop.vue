<template>
    <div class="field">
      <label class="label">Sport Type</label>
      <select name ="sportTypeSelect" v-model="selectedSportType">
          <option  v-for="sportType in SportTypes" v-bind:key="sportType.id" v-bind:value="sportType.id" >{{sportType.id}} {{sportType.name}}</option>
      </select>
      
    </div>
    
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "SportTypeDrop",
  data: function(){
    return {
        selectedSportType: 0,
        SportTypes: [],

    }

  },
  mounted(){
      axios.get('http://localhost:5000/SportTypes').then(response =>{
          this.SportTypes = response.data;
      }).catch(e =>{

      })
  },
  
};
</script>
 
<style>
</style>