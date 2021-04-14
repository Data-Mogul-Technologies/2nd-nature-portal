<template>
  <div>

      <div class="field">
     <p> <strong> Consultant First Name: </strong> {{consultants.first_name}}</p>
    </div>


    <div class="field">
      <p><strong>Consultant Last Name:</strong> {{consultants.last_name}}</p>
    </div>

     
   
    
    <ConsultantNameDrop @changeConsultantName ="selectedConsultantName=$event"/> 

  <CustomerNameDrop @changeCustomerName ="selectedCustomerName=$event"/> 
   
    <div class="control">
      <button class="button is-success" @click="addCustCons">Add</button>
      <router-link :to="{name:'ConsultantList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";

import ConsultantNameDrop from '../dropdowns/ConsultantNamesDrop';
import CustomerNameDrop  from '../dropdowns/CustomerNamesDrop';

export default {
  name: "EditService",
  components:{
      
      ConsultantNameDrop,
     CustomerNameDrop,
      
  },
  data() {
    return {
        consultants: [],
       selectedConsultantName: 0,
       selectedCustomerName: 0,
       
    };
  },
  created: function () {
    this.getConsultantById();
  },
  methods: {
    // Get Event By Id
    async getConsultantById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/Consultants/${this.$route.params.id}`
        );
        this.consultants = response.data;
        
        
        

      } catch (err) {
        console.log(err);
      }
    },
    
    
    async addCustCons() {
      try {
        await axios.post(
          `http://localhost:5000/CustToConsult`,{
            customer_id: this.selectedCustomerName,
            sport_consultant_id: this.$route.params.id,
            secondary_consultant: this.selectedConsultantName
            
            });
        
        
        console.log(this.selectedCustomerName)
        console.log(this.$route.params.id)
        console.log(this.selectedConsultantName)
        this.$router.push("/report/customers-per-consultant");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>