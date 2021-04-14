<template>
  <div>
    <h1>Edit Consultant</h1>
   <div class="field is-horizontal"> 
    <div class="field has-addons">
      <div class="control">
      <label class="label">Consultant First Name:</label>
      
        <input
          class="input"
          type="text"
          placeholder="Consultant First Name"
          v-model="ConsultantFName"
        />
      </div>
    </div>
    <div class="field">
      <div class="control">
      <label class="label">Consultant Last Name:</label>
      
        <input
          class="input"
          type="text"
          placeholder="Consultant Last Name"
          v-model="ConsultantLName"
        />
      </div>
    </div>
   </div>
 <div class="field is-horizontal">   
 <div class="field">
   <div class="control">
      <label class="label">Address:</label>
      
        <input
          class="input"
          type="text"
          placeholder="Address"
          v-model="ConsultantAddress"
        />
      </div>
    </div>

    <div class="field">
      <div class="control">
      <label class="label">City:</label>
      
        <input
          class="input"
          type="text"
          
          v-model="ConsultantCity"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Zip Code:</label>
      <div class="control">
        <input
          class="input"
          type="number"
          
          v-model="ConsultantZip"
        />
      </div>
    </div>
    </div>
<p><strong>Current State: </strong> {{consultants.StateName}}</p>

<StateDrop @changeState="selectedState=$event"/>
 <div class="field is-horizontal">   
    <div class="field">
      <div class="control">
      <label class="label">Phone</label>
      
        <input
          class="input"
          type="text"
          placeholder="XXX-XXX-XXXX"
          v-model="ConsultantPhone"
        />
      </div>
    </div>

    <div class="field"> 
      <div class="control">
      <label class="label">Alternate Phone:</label>
     
        <input
          class="input"
          type="text"
          placeholder="XXX-XXX-XXXX"
          v-model="ConsultantAPhone"
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
          placeholder="Email"
          v-model="ConsultantEmail"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Start Date:</label>
      <div class="control">
        <p>{{ConsultantSDate | formatDate}}</p>
      </div>
    </div>

    <div class="field">
      <label class="label">End Date:</label>
      <div class="control">
        <p>{{ConsultantEDate | formatDate}}</p>
      </div>
    </div>

    <div class="field">
      <p><strong>Current Customer Status:</strong> {{consultants.StatusName}}</p>
    </div>
    <ConsultantStatusDrop @changeConsultantStatusType="selectedConsultantStatus=$event"/>
 
    <div class="field">
      <label class="label">Comments:</label>
      <div class="control">
       <textarea rows="4" cols="50" name="comment" form="usrform" v-model="ConsultantComment">
</textarea>
      </div>
    </div>

    <div class="control">
      <button class="button is-success" @click="updateConsultant">UPDATE</button>
      <router-link :to="{name:'ConsultantList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
import ConsultantStatusDrop from '../dropdowns/ConsultantStatusDrop.vue' 
import StateDrop from '../dropdowns/StateDrop.vue';
export default {
  name: "ViewConsultant",
  components:{
      ConsultantStatusDrop,
      
      StateDrop,
  },
  data() {
    return {
        consultants: [],
        ConsultantFName : "",
        ConsultantLName : "",
        ConsultantAddress:"",
        ConsultantCity:"",
        ConsultantZip : 0,
        ConsultantPhone:"",
        ConsultantAPhone:"",
        
        ConsultantEmail :"",
        
        ConsultantSDate:"",
        ConsultantEDate:"",
        ConsultantComment:"",
        selectedState: 0,
        selectedConsultantStatus: 0,
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
        this.ConsultantFName = response.data.first_name;
        this.ConsultantLName = response.data.last_name;
        this.ConsultantAddress = response.data.address;
        this.ConsultantCity = response.data.city;
        this.ConsultantZip = response.data.zip_code;
        this.ConsultantPhone = response.data.phone;
        this.ConsultantAPhone = response.data.alt_phone;
        
        this.ConsultantEmail = response.data.email;
        
        this.ConsultantSDate = response.data.start_date;
        this.ConsultantEDate = response.data.end_date;
        this.ConsultantComment = response.data.comments;

      } catch (err) {
        console.log(err);
      }
    },
    
    // Update Consultant
    async updateConsultant() {
      try {
        await axios.put(
          `http://localhost:5000/Consultants/${this.$route.params.id}`,
          {
            first_name: this.ConsultantFName,
            last_name: this.ConsultantLName,
            address: this.ConsultantAddress,
            city: this.ConsultantCity,
            zip_code: this.ConsultantZip,
            phone: this.ConsultantPhone,
            alt_phone: this.ConsultantAPhone,
            sport_consultant_status_id: this.selectedConsultantStatus,
            email: this.ConsultantEmail,
            state_id: this.selectedState,
            start_date: this.ConsultantSDate,
            end_date: this.ConsultantEDate,
            comments: this.ConsultantComment
            
          }
        );
        
        console.log(this.ConsultantFName)
        console.log(this.ConsultantLName)
        console.log(this.ConsultantAddress)
        console.log(this.ConsultantCity)
        console.log(this.ConsultantZip)
        console.log(this.ConsultantPhone)
        console.log(this.ConsultantAPhone)
        console.log(this.selectedConsultantStatus)
        console.log(this.ConsultantEmail)
        console.log(this.selectedState)
        console.log(this.ConsultantSDate)
        console.log(this.ConsultantEDate)
        console.log(this.ConsultantComment)
        
        
        this.$router.push({name:'ViewConsultant', params: { id: this.$route.params.id }});
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>