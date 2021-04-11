<template>

  <div>
    <ConsultantStatusDrop @changeConsultantStatusType="selectedConsultantStatus=$event"/>

    <div class="field">
      <label class="label">Consultant First Name</label>
        <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Consultant First Name"
          v-model="ConsultantFName"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Consultant Last Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Consultant Last Name"
          v-model="ConsultantLName"
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
          v-model="ConsultantAddress"
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
          v-model="ConsultantCity"
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
          v-model="ConsultantZip"
        />
      </div>
    </div>


    <div class="field">
      <label class="label">Phone</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Phone"
          v-model="ConsultantPhone"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Alternate Phone</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Alternate Phone"
          v-model="ConsultantAPhone"
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
          v-model="ConsultantEmail"
        />
      </div>
    </div>

    
    

   <div class="field">
      <label class="label">Start Date</label>
      <div class="control">
        <input
          class="input"
          type="date"
          placeholder="Start Date"
          v-model="ConsultantSDate"
        />
      </div>
    </div>

 
    <div class="field">
      <label class="label">Comments</label>
      <div class="control">
       <textarea rows="4" cols="50" name="comment" form="usrform" v-model="ConsultantComment">
</textarea>
      </div>
    </div>
    
    <div class="control">
      <button class="button is-success" @click="saveConsultant">Add</button>
      <router-link :to="{name:'CustomerList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  </div>
</template>
<script>
// import axios
import axios from "axios";
import StateDrop from '../dropdowns/StateDrop';
import ConsultantStatusDrop from '../dropdowns/ConsultantStatusDrop'

export default {
  name: "AddConsultant",
  components:{
    ConsultantStatusDrop,
    StateDrop
  },
  data() {
    return {
        selectedConsultantStatus:0,
        ConsultantFName : "",
        ConsultantLName : "",
        ConsultantAddress:"",
        ConsultantCity:"",
        selectedState:0,
        ConsultantZip : 0,
        ConsultantPhone:"",
        ConsultantAPhone:"",
        ConsultantEmail :"",
        ConsultantSDate:YYYY-MM-DD,
        ConsultantEDate:YYYY-MM-DD,
        ConsultantComment:"",
    };
  },
  
  methods: {
    // Create New Customer
    async saveConsultant() {
      try {
        await axios.post("http://localhost:5000/Consultants", {
            sport_consultant_status_id: this.selectedConsultantStatus,
            first_name: this.ConsultantFName,
            last_name: this.ConsultantLName,
            address: this.ConsultantAddress,
            city: this.ConsultantCity,
            state_id:this.selectedState,
            zip_code: this.ConsultantZip,
            phone: this.ConsultantPhone,
            alt_phone: this.ConsultantAPhone,
            email: this.ConsultantEmail,
            start_date: this.ConsultantSDate,
            end_date: this.ConsultantEDate,
            comments: this.ConsultantComment
        });
        this.selectedConsultantStatus=0;
        this.ConsultantFName = "";
        this.ConsultantLName = "";
        this.ConsultantAddress="";
        this.ConsultantCity="";
        this.selectedState="";
        this.ConsultantZip= 0;
        this.ConsultantPhone="";
        this.ConsultantAPhone="";
        
        this.ConsultantEmail = "";
        
        this.ConsultantSDate="";
        this.ConsultantEDate="";
        this.ConsultantComment="";
        this.$router.push("/page/list-consultants");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
</style>