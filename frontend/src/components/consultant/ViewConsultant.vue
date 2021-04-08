<template>
  <div>
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
        <p>{{ConsultantSDate | formatDate}}</p>
      </div>
    </div>

    <div class="field">
      <label class="label">End Date</label>
      <div class="control">
        <p>{{ConsultantEDate | formatDate}}</p>
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
      <button class="button is-success" @click="updateConsultant">UPDATE</button>
      <router-link :to="{name:'Home'}"><button class="button is-danger">Cancel</button></router-link>
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
        ConsultantComment:""
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
            
            email: this.ConsultantEmail,
            
            start_date: this.ConsultantSDate,
            end_date: this.ConsultantEDate,
            comments: this.ConsultantComment
          }
        );
        this.ConsultantFName = "";
        this.ConsultantLName = "";
        this.ConsultantAddress="";
        this.ConsultantCity="";
        this.ConsultantZip= 0;
        this.ConsultantPhone="";
        this.ConsultantAPhone="";
        
        this.ConsultantEmail = "";
        
        this.ConsultantSDate="";
        this.ConsultantEDate="";
        this.ConsultantComment="";
        
        this.$router.push("/ConsultantList");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>