<template>
  <div>
    <h1>View Consultant</h1>
    
    <div class="field">
     <p> <strong> Consultant First Name: </strong> {{consultants.first_name}}</p>
    </div>


    <div class="field">
      <p><strong>Consultant Last Name:</strong> {{consultants.last_name}}</p>
    </div>

 <div class="field">
  
      <p><strong>Address: </strong>{{consultants.address}}    {{consultants.city}}, {{consultants.StateName}} {{consultants.zip_code}}</p>
      
    </div>

    <div class="field">
      
      <p><strong>Phone #:</strong> {{consultants.phone}}</p>
    </div>



    <div class="field">
      <p><strong>Alt Phone #:</strong> {{consultants.alt_phone}}</p>
    </div>

    


 <div class="field">
      <p><strong>Email:</strong> {{consultants.email}}</p>
    </div>

    

    <div class="field">
      <p><strong>Prospect Date:</strong> {{consultants.start_date | formatDate}}</p>
    </div>

    <div class="field">
     <p><strong>Actual Date:</strong> {{consultants.end_date | formatDate}}</p>
    </div>

    <div class="field">
      <p><strong>Status:</strong> {{consultants.StatusName}}</p>
    </div>

    <div class="field">
      <p><strong>Comments:</strong> {{consultants.comments}}</p>
    </div>
 
    
    <div class="control">
     
      <router-link :to="{name:'EditConsultant',params: { id: this.$route.params.id }}"><button class="button is-info">Edit</button></router-link>
      <router-link :to="{name:'ConsultantList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  </div>
</template>


<script>
// import axios
import axios from "axios";
 
export default {
  name: "ViewConsultant",
  data() {
    return {
        consultants: [],
        
    };
  },
  created: function () {
    this.getConsultantById();
  },
  methods: {
    // Get Consultant By Id
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
    
  },
};
</script>
 
<style>
</style>