<template>
    <div class="field">
      <label class="label">Sport: </label>
      <span class="select">
      <select name ="sportTypeSelect" v-model="selectedSportType" @change="changeSportType()">
          <option  v-for="sport_type in SportTypes" v-bind:key="sport_type.id" :value="sport_type.sport_type_id" >{{sport_type.name}}</option>
      </select>
      </span>
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
  methods:{
    changeSportType(){
      this.$emit('changeSportType', this.selectedSportType)
    }

  },
  mounted(){
      axios.get('http://localhost:5000/Sports').then(response =>{
          this.SportTypes = response.data;
          console.log(response.data);
      }).catch(e =>{
        
      })
  },
  
};
</script>
 
<style>
</style>