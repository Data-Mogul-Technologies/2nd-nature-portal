<template>
  <div>

      <div class="field">
     <p> <strong> Customer First Name: </strong> {{services.first_name}}</p>
    </div>


    <div class="field">
      <p><strong>Customer Last Name:</strong> {{services.last_name}}</p>
    </div>

     <div class="field">
      <p><strong>Current Service Status:</strong> {{services.StatusName}}</p>
    </div>
    <ServiceStatusDrop @changeServiceStatus="selectedServiceStatus=$event"/>

    
     <div class="field">
      <p><strong>Current Service Type:</strong> {{services.ServiceName}}</p>
    </div>
    <ServiceTypeDrop @changeServiceType = "selectedServiceType=$event"/>
    
    
   
    <div class="control">
      <button class="button is-success" @click="updateEvent">UPDATE</button>
      <router-link :to="{name:'AllCustServ'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
import ServiceStatusDrop from '../dropdowns/ServiceStatusDrop'
import ServiceTypeDrop from '../dropdowns/ServiceTypeDrop'

export default {
  name: "EditService",
  components:{
      ServiceStatusDrop,
      ServiceTypeDrop
      
  },
  data() {
    return {
        services: [],
       selectedServiceStatus: 0,
       ServiceName: "",
       selectedServiceType : 0
    };
  },
  created: function () {
    this.getEventById();
  },
  methods: {
    // Get Event By Id
    async getEventById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/CustServ/${this.$route.params.id}`
        );
        this.services = response.data;
        this.EventFName = response.data.first_name;
        this.EventLName = response.data.last_name;
        this.ServiceName = response.data.ServiceName;
        this.StatusName = response.data.StatusName
        

      } catch (err) {
        console.log(err);
      }
    },
    
    // Update Event
    async updateEvent() {
      try {
        await axios.put(
          `http://localhost:5000/CustServ/${this.$route.params.id}`,{
            service_status_id: this.selectedServiceStatus,
            service_type_id: this.selectedServiceType
            });
        
        
        
        this.$router.push("/AllCustServ");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>