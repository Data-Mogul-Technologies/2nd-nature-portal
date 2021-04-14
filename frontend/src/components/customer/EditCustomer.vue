<template>
  <div>
    <h1>Edit Customer</h1>
  <div class = "field is-horizontal">  
    <div class="field has-addons"> 
      <div class="control">
      <label class="label">Customer First Name: </label> 
     
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
      <label class="label">Customer Last Name: </label>
      
        <input
          class="input"
          type="text"
          placeholder="Customer Last Name"
          v-model="CustomerLName"
        />
      </div>
    </div>
  </div>

  <div class = "field is-horizontal">
 <div class="field has-addons">
   <div class="control">
      <label class="label">Address: </label>
      
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
      <label class="label">City: </label>
      
        <input
          class="input"
          type="text"
          
          v-model="CustomerCity"
        />
      </div>
    </div>

    <div class="field has-addons"> 
      <div class="control">
      <label class="label">Zip Code:</label>
     
        <input
          class="input"
          type="number"
          
          v-model="CustomerZip"
        />
      </div>
    </div>
  </div>
    <p><strong>State: </strong>{{customers.StateName}}</p>
<StateDrop @changeState="selectedState=$event"/>


 <div class = "field is-horizontal">   
    <div class="field has-addons">
      <div class="control">
      <label class="label">Mobile Phone:</label>
      
        <input
          class="input"
          type="text"
          placeholder="Mobile Phone"
          v-model="CustomerMPhone"
        />
      </div>
    </div>

    <div class="field has-addons">
       <div class="control">
      <label class="label">Office Phone:</label>
     
        <input
          class="input has-addons"
          type="text"
          placeholder="Office Phone"
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
          placeholder="Home Phone"
          v-model="CustomerHPhone"
        />
      </div>
    </div>

 </div>
    <div class="field">
      <p><strong>Current Customer Status:</strong> {{customers.StatusName}}</p>
    </div>
    <CustomerStatusDrop @changeStatusType="selectedCustomerStatus=$event"/>
    <div class="field">
      <p><strong>Current Customer Type:</strong> {{customers.CustomerType}}</p>
    </div>
    <CustomerTypeDrop @changeCustomerType="selectedCustomerType=$event"/>
    
    <div class="field has-addons">
      <div class="control">
      <label class="label">Email:</label>
      
        <input
          class="input"
          type="text"
          placeholder="Email"
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
      <div class="control">
      <label class="label">How Can 2NP Help:</label>
      
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
        <p>{{CustomerPDate | formatDate}}</p>
      </div>
    </div>

    <div class="field">
      <label class="label">Actual Date:</label>
      <div class="control">
        <p>{{CustomerADate | formatDate}}</p>
      </div>
    </div>

    <div class="field">
      <label class="label">Comments:</label>
      <div class="control">
       <textarea rows="4" cols="50" name="comment" form="usrform" v-model="CustomerComment">
</textarea>
      </div>
    </div>
 
    
    <div class="control">
      <button class="button is-success" @click="updateCustomer">UPDATE</button>
      <router-link :to="{name:'View', params: { id: this.$route.params.id }}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
import CustomerStatusDrop from '../dropdowns/CustomerStatusDrop'
import CustomerTypeDrop from '../dropdowns/CustomerTypeDrop' 
import StateDrop from '../dropdowns/StateDrop';
export default {
  name: "ViewCustomer",
  components:{
      CustomerStatusDrop,
      CustomerTypeDrop,
      StateDrop,
  },
  data() {
    return {
        customers: [],
        CustomerFName : "",
        CustomerLName : "",
        CustomerAddress:"",
        CustomerCity:"",
        CustomerZip : 0,
        CustomerMPhone:"",
        CustomerOPhone:"",
        CustomerHPhone:"",
        CustomerEmail :"",
        CustomerHeard:"",
        CustomerHelp:"",
        CustomerPDate: this.CustomerPDate,
        CustomerADate:"",
        CustomerComment:"",
        
        selectedState: 0,
        selectedCustomerStatus: 0,
        selectedCustomerType: 0
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
        this.CustomerFName = response.data.first_name;
        this.CustomerLName = response.data.last_name;
        this.CustomerAddress = response.data.address;
        this.CustomerCity = response.data.city;
        this.CustomerZip = response.data.zip_code;
        this.CustomerMPhone = response.data.mobile_phone;
        this.CustomerOPhone = response.data.office_phone;
        this.CustomerHPhone = response.data.home_phone;
        this.CustomerEmail = response.data.email;
        this.CustomerHeard = response.data.hear_about_us;
        this.CustomerHelp = response.data.how_can_help;
        this.CustomerPDate = response.data.prospect_date;
        this.CustomerADate = response.data.actual_date;
        this.CustomerComment = response.data.comments;
        this.StateName = response.data.StateName

      } catch (err) {
        console.log(err);
      }
    },
    
    // Update Customer
    async updateCustomer() {
      try {
        await axios.put(
          `http://localhost:5000/Customers/${this.$route.params.id}`,
          {
            first_name: this.CustomerFName,
            last_name: this.CustomerLName,
            address: this.CustomerAddress,
            city: this.CustomerCity,
            zip_code: this.CustomerZip,
            state_id: this.selectedState,
            mobile_phone: this.CustomerMPhone,
            office_phone: this.CustomerOPhone,
            home_phone: this.CustomerHPhone,
            email: this.CustomerEmail,
            customer_status_id: this.selectedCustomerStatus,
            customer_type_id: this.selectedCustomerType,
            hear_about_us: this.CustomerHeard,
            how_can_help:this.CustomerHelp,
            prospect_date: this.CustomerPDate,
            actual_date: this.CustomerADate,
            comments: this.CustomerComment
          }
        );
        
        console.log(this.selectedCustomerStatus)
        console.log(this.selectedCustomerType)
        console.log(this.selectedState)
        
        this.$router.push({name:'View', params: { id: this.$route.params.id }});
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>