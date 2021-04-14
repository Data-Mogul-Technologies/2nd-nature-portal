<template>
    <div class="field">
      <label class="label">Action Type:</label>
      <span class="select">
      <select name ="ATSelect" v-model="selectedAT" @change="changeAT()">
          <option v-for="actionType in actionTypes" v-bind:key="actionType.at_profile_id" v-bind:value="actionType.at_profile_id">{{actionType.at_profile}}</option>
      </select>
      </span>
      
    </div>
    
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ATDrop",

  data: function(){
    return {
        selectedAT: 1,
        actionTypes: [],
    }

  },

  methods:{
    changeAT(){
      this.$emit('changeAT', this.selectedAT)
    }
  },

  mounted(){
      axios.get('http://localhost:5000/ATProfileTypes').then(response =>{
          this.actionTypes = response.data;
      }).catch(e =>{
      })
  },
  
};
</script>
 
<style>
</style>