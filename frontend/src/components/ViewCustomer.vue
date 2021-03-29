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
      <label class="label">Prospect Date</label>
      <div class="control">
        <input
          class="input"
          type="text"
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
          type="text"
          placeholder=" Actual Date"
          v-model="CustomerADate"
        />
      </div>
    </div>
 
    
    <div class="control">
      <button class="button is-success" @click="updateCustomer">UPDATE</button>
      <router-link :to="{name:'Home'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "EditCustomer",
  data() {
    return {
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
        CustomerPDate:"",
        CustomerADate:""
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
        this.CustomerPDate = response.data.prospect_date;
        this.CustomerADate = response.data.actual_date;

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
            mobile_phone: this.CustomerMPhone,
            office_phone: this.CustomerOPhone,
            home_phone: this.CustomerHPhone,
            email: this.CustomerEmail,
            hear_about_us: this.CustomerHeard,
            prospect_date: this.CustomerPDate,
            actual_date: this.CustomerADate
          }
        );
        this.CustomerFName = "";
        this.CustomerLName = "";
        this.CustomerAddress="";
        this.CustomerCity="";
        this.CustomerZip= 0;
        this.CustomerMPhone="";
        this.CustomerOPhone="";
        this.CustomerHPhone="";
        this.CustomerEmail = "";
        this.CustomerHeard="";
        this.CustomerPDate="";
        this.CustomerADate="";
        
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>