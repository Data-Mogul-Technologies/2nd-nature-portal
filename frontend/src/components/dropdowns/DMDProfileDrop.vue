<template>
    <div class="field">
      <label class="label">Choose Deep Motivation Driver:</label>
      <span class="select">
      <select name ="DMDSelect" v-model="selectedDMD" @change="changeDMD()">
          <option v-for="dmdType in dmdTypes" v-bind:key="dmdType.dmd_profile_id" v-bind:value="dmdType.dmd_profile_id">{{dmdType.dom_driver}} {{dmdType.sec_driver}}</option>
      </select>
      </span>

    </div>

</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "DMDProfileDrop",

  data: function(){
    return {
        selectedDMD: 1,
        dmdTypes: [],
    }

  },

  methods:{
    changeDMD(){
      this.$emit('changeDMD', this.selectedDMD)
    }
  },

  mounted(){
      axios.get('http://localhost:5000/dmdProfileTypes').then(response => {
          this.dmdTypes = response.data;
      }).catch(e =>{
      })
  },

};
</script>
 
<style>
</style>