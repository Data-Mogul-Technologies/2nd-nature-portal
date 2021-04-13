<template>
  <div>
    
    
    <div class="field">
     <p> <strong> Customer First Name: </strong> {{customers.first_name}}</p>
    </div>


    <div class="field">
      <p><strong>Customer Last Name:</strong> {{customers.last_name}}</p>
    </div>

 <div class="field">
  
      <p><strong>Address: </strong>{{customers.address}}    {{customers.city}}, {{customers.StateName}} {{customers.zip_code}}</p>
      
    </div>

    <div class="field">
      
      <p><strong>Mobile Phone:</strong> {{customers.mobile_phone}}</p>
    </div>



    <div class="field">
      <p><strong>Office Phone:</strong> {{customers.office_phone}}</p>
    </div>

    <div class="field">
      <p><strong>Home Phone:</strong> {{customers.home_phone}}</p>
    </div>
 
    <div class="field">
      <p><strong>Business:</strong> {{customers.BusinessName}}</p>
    </div>

    <div class="field">
      <p><strong>Type:</strong> {{customers.CustomerType}}</p>
    </div>


 <div class="field">
      <p><strong>Email:</strong> {{customers.email}}</p>
    </div>

    <div class="field">
     <p><strong>How did they hear about us?:</strong> {{customers.hear_about_us}}</p>
    </div>

    <div class="field">
      <p><strong>Comments:</strong> {{customers.comments}}</p>
    </div>


    <div class="field">
      <p><strong>Prospect Date:</strong> {{customers.prospect_date | formatDate}}</p>
    </div>

    <div class="field">
     <p><strong>Actual Date:</strong> {{customers.actual_date | formatDate}}</p>
    </div>

    <div class="field">
      <p><strong>Status:</strong> {{customers.StatusName}}</p>
    </div>

     <div class="field">
      <p><strong>Comments:</strong> {{customers.comments}}</p>
    </div>

    
 
    
    <div class="control">
     
      <router-link :to="{name:'EditCustomer',params: { id: this.$route.params.id }}"><button class="button is-info">Edit</button></router-link>
      <router-link :to="{name:'CustomerList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ViewCustomer",
  data() {
    return {
        customers: [],
        
    };
  },
  created: function () {
    this.getCustomerById();
  },
  methods: {
    // Get Customer By Id
    async getCustomerById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/Customers/${this.$route.params.id}`
        );
        this.customers = response.data;
      

      } catch (err) {
        console.log(err);
      }
    },
    
  },
};
</script>
 
<style>
</style>