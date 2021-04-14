<template>
    <div class="field">
      <label class="label">Choose Secondary Consultant:</label>
      <span class="select">
      <select name ="ConsultantNameSelect" v-model="selectedConsultantName" @change="changeConsultantName()">
          <option v-for="consultantName in ConsultantNames" v-bind:key="consultantName.sport_consultant_id" :value="consultantName.sport_consultant_id">{{consultantName.first_name }} {{consultantName.last_name}}</option>
      </select>
      </span>
      
    </div>
    
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ConsultantNameDrop",
  data: function(){
    return {
        selectedConsultantName: 0,
        ConsultantNames: [],
    }

  },
  methods:{
    changeConsultantName(){
      this.$emit('changeConsultantName', this.selectedConsultantName)
    }

  },
  mounted(){
      axios.get('http://localhost:5000/Consultants').then(response =>{
          this.ConsultantNames = response.data;
          console.log(response.data);
      }).catch(e =>{

      })
  },
  
};
</script>
 
<style>
</style>