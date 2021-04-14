<template>
  <div>
    <div class="field is-horizontal">
      <div class="field has-addons">
      <div class="control">
      <label class="label">Customer First Name:</label>
        <input
          class="input"
          type="text"
          placeholder="Customer First Name"
          v-model="CustomerFName"
        />
      </div>
    </div>

   <div class="field has-addons">
    <div class="control">
      <label class="label">Customer Last Name:</label>
      
        <input
          class="input"
          type="text"
          placeholder="Customer Last Name"
          v-model="CustomerLName"
        />
      </div>
    </div>
    </div>
 
    
    <div class="field is-horizontal">
    <CustomerTypeDrop @changeCustomerType="selectedCustomerType=$event"/>
    <SportTypeDrop @changeSportType="selectedSportType=$event"/>
    <BusinessDrop @changeBusiness="selectedBusiness=$event"/>
    
    </div>
 
    <div class = "field is-horizontal">
    <div class="field has-addons">
    <div class="control">
      <label class="label">Address:</label>
   
        <input
          class="input"
          type="text"
          placeholder="Address"
          v-model="CustomerAddress"
        />
      </div>
    </div>

    <div class="field has-addons">
      <div class="control">
      <label class="label">City:</label>
      
        <input
          class="input"
          type="text"
          
          v-model="CustomerCity"
        />
      </div>
    </div>

    <StateDrop @changeState="selectedState=$event"/>    

      <div class="field has-addons">
       <div class="control">
      <label class="label">Zip Code:</label>
     
        <input
          class="input"
          type="number"
          
          v-model="CustomerZip"
          placeholder="(5 digits ex. 77564)"
        />
      </div>
    </div>
    </div>

  <div class ="field is-horizontal">
    <div class="field has-addons">
       <div class="control">
      <label class="label">Mobile Phone:</label>
      
        <input
          class="input"
          type="text"
          placeholder="XXX-XXX-XXXX"
          v-model="CustomerMPhone"
        />
      </div>
    </div>

    <div class="field has-addons">
       <div class="control">
      <label class="label">Office Phone:</label>
      
        <input
          class="input"
          type="text"
          placeholder="XXX-XXX-XXXX"
          v-model="CustomerOPhone"
        />
      </div>
    </div>
 
      <div class="field has-addons">
       <div class="control">
      <label class="label">Home Phone:</label>
      
        <input
          class="input"
          type="text"
          placeholder="XXX-XXX-XXXX"
          v-model="CustomerHPhone"
        />
      </div>
    </div>
  </div>
      <div class="field has-addons">
       <div class="control">
      <label class="label">Email:</label>
      
        <input
          class="input"
          type="text"
          placeholder="example@mail.com"
          v-model="CustomerEmail"
        />
      </div>
    </div>

    <div class="field has-addons">
      <div class="control">
      <label class="label">Reference:</label>
      
        <input
          class="input"
          type="text"
          placeholder="Referenced Us"
          v-model="CustomerHeard"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">How Can 2NP Help:</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="How Can We Help"
          v-model="CustomerHelp"
        />
      </div>
    </div>

   <div class="field">
      <label class="label">Prospect Date:</label>
      <div class="control">
        <input
          class="input"
          type="date"
          placeholder="Prospect Date"
          v-model="CustomerPDate"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Actual Date:</label>
      <div class="control">
        <input
          class="input"
          type="date"
          placeholder="Actual Date"
          v-model="CustomerADate"
        />   
      </div>
    </div>
 <CustomerStatusDrop @changeStatusType="selectedCustomerStatus=$event"/>
    <div class="field">     
      <label class="label">Comments</label>
      <div class="control">
       <textarea rows="4" cols="50" name="comment" form="usrform" v-model="CustomerComment">
</textarea>
      </div>
    </div>
    

    <div class="control">
      <button class="button is-success" @click="saveCustomer ">Add</button>
      <router-link :to="{name:'CustomerList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>

  </div>  
  

  
</template>
<script>
// import axios
import axios from "axios";
import CustomerStatusDrop from '../dropdowns/CustomerStatusDrop';
import CustomerTypeDrop from '../dropdowns/CustomerTypeDrop';
import BusinessDrop from '../dropdowns/BusinessDrop';
import SportTypeDrop from '../dropdowns/SportTypeDrop';
import StateDrop from '../dropdowns/StateDrop';


export default {
  name: "AddCustomer",
  components:{
    CustomerStatusDrop,
    CustomerTypeDrop,
    BusinessDrop,
    SportTypeDrop,
    StateDrop,
    // ServiceStatusDrop,
    // ServiceTypeDrop,

  },
  data() {
    
    return {
        CustomerFName : "",
        CustomerLName : "",
        selectedCustomerStatus:0,
        selectedCustomerType:0,
        selectedBusiness:0,
        selectedSportType:0,
        CustomerAddress:"",
        CustomerCity:"",
        selectedState:0,
        CustomerZip : "",
        CustomerMPhone:"",
        CustomerOPhone:"",
        CustomerHPhone:"",
        CustomerEmail :"",
        CustomerHeard:"",
        CustomerHelp:"",
        CustomerPDate:"",
        CustomerADate:"",
        CustomerComment:"",
        // selectedServiceType: 0,
        // selectedServiceStatus: 0
    };
  },
  
  methods: {
    // Create New Customer
    async saveCustomer() {
      try {
        await axios.post("http://localhost:5000/Customers", {
            first_name: this.CustomerFName,
            last_name: this.CustomerLName,
            customer_status_id:this.selectedCustomerStatus,
            customer_type_id:this.selectedCustomerType,
            business_id:this.selectedBusiness,
            sport_type_id:this.selectedSportType,
            address: this.CustomerAddress,
            city: this.CustomerCity,
            state_id:this.selectedState,
            zip_code: this.CustomerZip,
            mobile_phone: this.CustomerMPhone,
            office_phone: this.CustomerOPhone,
            home_phone: this.CustomerHPhone,
            email: this.CustomerEmail,
            hear_about_us: this.CustomerHeard,
            how_can_help: this.CustomerHelp,
            prospect_date: this.CustomerPDate,
            actual_date: this.CustomerADate,
            comments: this.CustomerComment
        });
        this.CustomerFName = "";
        this.CustomerLName = "";
        this.selectedCustomerStatus=0;
        this.selectedCustomerType=0;
        this.selectedBusiness=0;
        this.selectedSportType=0;
        this.CustomerAddress="";
        this.CustomerCity="";
        this.selectedState=0;
        this.CustomerZip= 0;
        this.CustomerMPhone="";
        this.CustomerOPhone="";
        this.CustomerHPhone="";
        this.CustomerEmail = "";
        this.CustomerHeard="";
        this.CustomerHelp="";
        this.CustomerPDate="";
        this.CustomerADate="";
        this.CustomerComment="";
        this.$router.push("/view/list-customers")
      } catch (err) {
        console.log(err);
      }
    },
    
  },
};
</script>


<style>
</style>