<template>
    <div class="field">
      
      <label class="label">State:</label>
      <span class="select">
        
      <select name ="StateSelect" v-model="selectedState"  @change="changeState()">
          <option v-for="state in StateLists" v-bind:key="state.state_id" :value="state.state_id">{{state.name}}</option>
      </select>
      </span>
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
  methods:{
    changeState(){
      this.$emit('changeState', this.selectedState)
    }},
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