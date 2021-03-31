<template>
    <div class="field">
      <label class="label">State:</label>
      <select name ="StateSelect" v-model="selectedState">
          <option v-for="stateList in StateLists" v-bind:key="stateList._id" v-bind:value="stateList.name">{{stateList.name}}</option>
      </select>
      
    </div>
    
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "StateDrop",
  data: function(){
    return {
        selectedState: 0,
        StateLists: [],
    }

  },
  mounted(){
      axios.get('http://localhost:5000/State').then(response =>{
          this.StateLists = response.data;
      }).catch(e =>{

      })
  },
  
};
</script>
 
<style>
</style>