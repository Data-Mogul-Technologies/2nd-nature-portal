<template>
    <div class="field">
      <span class="select">
      <select name ="ProfileStatusSelect" v-model="selectedProfileStatus" @change="changeProfileStatus()">
          <option v-for="ProfileStatus in ProfileStatus" v-bind:key="ProfileStatus.status_at_dmd_id" :value="ProfileStatus.status_at_dmd_id">
              {{ProfileStatus.name}}
            </option>
      </select>
      </span>
    </div>
    
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ProfileStatusDrop",
  data: function(){
    return {
        selectedProfileStatus: 2,
        ProfileStatus: [],
    }

  },
  methods:{
    changeProfileStatus(){
      this.$emit('changeProfileStatus', this.selectedProfileStatus)
    }

  },
  mounted(){
      axios.get('http://localhost:5000/ProfileStatus').then(response =>{
          this.ProfileStatus = response.data;
          console.log(response.data);
      }).catch(e =>{

      })
  },
  
};
</script>
 
<style>
</style>