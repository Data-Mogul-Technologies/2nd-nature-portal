<template>
    <div class="field">
      <label class="label">Status:</label>
      <span class="select">
      <select name ="ConsultantStatusTypeSelect" v-model="selectedConsultantStatus" @change="changeConsultantStatusType()">
          <option v-for="consultantStatusType in ConsultantStatusTypes" v-bind:key="consultantStatusType.sport_consultant_status_id" :value="consultantStatusType.sport_consultant_status_id">
              {{consultantStatusType.name}}
              </option>
      </select>
      </span>
      
    </div>
    
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ConsultantStatusDrop",
  data: function(){
    return {
        selectedConsultantStatus: 0,
        ConsultantStatusTypes: [],
    }

  },
  methods:{
    changeConsultantStatusType(){
      this.$emit('changeConsultantStatusType', this.selectedConsultantStatus)
    }

  },
  mounted(){
      axios.get('http://localhost:5000/ConsultantStatus').then(response =>{
          this.ConsultantStatusTypes = response.data;
          console.log(response.data);
      }).catch(e =>{

      })
  },
  
};
</script>
 
<style>
</style>