<template>
  <div>
    <div class="field">
      <label class="label">Customer First Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Customer First Name"
          v-model="CustomerFName"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Customer Last Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Customer Last Name"
          v-model="CustomerLName"
        />
      </div>
    </div>

<CustomerStatusDrop @changeStatusType="selectedCustomerStatus=$event"/>
<CustomerTypeDrop @changeCustomerType="selectedCustomerType=$event"/>
<BusinessDrop @changeBusiness="selectedBusiness=$event"/>
<SportTypeDrop @changeSportType="selectedSportType=$event"/>


 <div class="field">
      <label class="label">Address</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Address"
          v-model="CustomerAddress"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">City</label>
      <div class="control">
        <input
          class="input"
          type="text"
          min="1" max="5"
          v-model="CustomerCity"
        />
      </div>
    </div>

<StateDrop @changeState="selectedState=$event"/>    

    <div class="field">
      <label class="label">Zip Code</label>
      <div class="control">
        <input
          class="input"
          type="number"
          min="1" max="5"
          v-model="CustomerZip"
        />
      </div>
    </div>


    <div class="field">
      <label class="label">Mobile Phone</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Mobile Phone"
          v-model="CustomerMPhone"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Office Phone</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Office Phone"
          v-model="CustomerOPhone"
        />
      </div>
    </div>
 
 <div class="field">
      <label class="label">Home Phone</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Home Phone"
          v-model="CustomerHPhone"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Email"
          v-model="CustomerEmail"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Reference?</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Referenced Us"
          v-model="CustomerHeard"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">How Can 2NP Help</label>
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
      <label class="label">Prospect Date</label>
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
      <label class="label">Actual Date</label>
      <div class="control">
        <input
          class="input"
          type="date"
          placeholder="Actual Date"
          v-model="CustomerADate"
        />   
      </div>
    </div>
 
    <div class="field">
      <label class="label">Comments</label>
      <div class="control">
       <textarea rows="4" cols="50" name="comment" form="usrform" v-model="CustomerComment">
</textarea>
      </div>
    </div>
    
    <div class="control">
      <button class="button is-success" @click="saveCustomer">Add</button>
      <router-link :to="{name:'Home'}"><button class="button is-danger">Cancel</button></router-link>
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
    StateDrop
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
        CustomerZip : 0,
        CustomerMPhone:"",
        CustomerOPhone:"",
        CustomerHPhone:"",
        CustomerEmail :"",
        CustomerHeard:"",
        CustomerPDate:YYYY-MM-DD,
        CustomerADate:YYYY-MM-DD,
        CustomerComment:"",
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
        this.CustomerPDate="";
        this.CustomerADate="";
        this.CustomerComment="";
        this.$router.push("/view/list-customers");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
</style>