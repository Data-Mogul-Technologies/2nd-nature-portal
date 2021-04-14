<template>
  <div>
    <h1>View Feedback</h1>
    <div class="field">
     <p> <strong> Customer First Name: </strong> {{customers.first_name}}</p>
    </div>


    <div class="field">
      <p><strong>Customer Last Name:</strong> {{customers.last_name}}</p>
    </div>

    <div class="field has-addons"><div class="control">
      <label class="label">How did you hear about us?</label>
      
        <input
          class="input"
          type="text"
          placeholder="Feedback Hear"
          v-model="FeedbackHear"
        />
      </div>
    </div>

     <div class="field has-addons"><div class="control">
      <label class="label">Recommend Rate</label>
      
        <input
          class="input"
          type="number"
          placeholder="Feedback help Rate"
          v-model="FeedbackRecRate"
        />
      </div>
    </div>


      <div class="field"><div class="control">
      <label class="label">How helpful</label>
      
       <textarea rows="4" cols="50" name="comment" form="usrform" v-model="FeedbackHelpCom">
</textarea>
      </div>
    </div>
    

     <div class="field has-addons"><div class="control">
      <label class="label">Help Rating</label>
      
        <input
          class="input"
          type="number"
          placeholder="Feedback help Rate"
          v-model="FeedbackHelpRate"
        />
      </div>
    </div>

     <div class="field">
      <label class="label">Recommendation Comment</label>
      <div class="control">
       <textarea rows="4" cols="50" name="comment" form="usrform" v-model="FeedbackRecCom">
</textarea>
      </div>
    </div>
 
    
     <div class="field">
      <label class="label">General Feedback</label>
      <div class="control">
       <textarea rows="4" cols="50" name="comment" form="usrform" v-model="FeedbackGen">
</textarea>
      </div>
    </div>

    <div class="field">
      <label class="label">Feedback Date</label>
      <div class="control">
        <p>{{FeedbackDate | formatDate}}</p>
      </div>
    </div>

    <div class="control">
      <button class="button is-success" @click="updateFeedback">Update</button>
      <router-link :to="{name:'FeedbackList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ViewFeedback",
  data() {
    return {
        customers: [],
        CustomerFName: "",
        CustomerLName:"",
        FeedbackDate : "",
        FeedbackHear : "",
        FeedbackHelpRate: 0,
        FeedbackHelpCom: "",
        FeedbackRecRate: 0,
        FeedbackRecCom: "",
        FeedbackGen: ""
        
    };
  },
  created: function () {
    this.getFeedbackById();
  },
  methods: {
    // Get Feedback By Id
    async getFeedbackById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/Feedback/${this.$route.params.id}`
        );
        this.customers = response.data
        this.CustomerFName = response.data.first_name,
        this.CustomerLName = response.data.last_name,
        this.FeedbackDate= response.data.date,
        this.FeedbackHear = response.data.how_hear,
        this.FeedbackHelpRate= response.data.how_helpful_rate,
        this.FeedbackHelpCom= response.data.how_helpful_comment,
        this.FeedbackRecRate= response.data.recommend_rate,
        this.FeedbackRecCom=response.data.recommend_comment,
        this.FeedbackGen= response.data.gen_feedback
        
       

      } catch (err) {
        console.log(err);
      }
    },
    
    // Update Customer
    async updateFeedback() {
      try {
        await axios.put(
          `http://localhost:5000/Feedback/${this.$route.params.id}`,
          {
            date: this.FeedbackDate,
            how_hear: this.FeedbackHear,
            how_helpful_rate: this.FeedbackHelpRate,
            how_helpful_comment: this.FeedbackHelpCom,
            recommend_rate: this.FeedbackRecRate,
            recommend_comment: this.FeedbackRecCom,
            gen_feedback: this.FeedbackGen,
          }
        );
      
        this.$router.push("/feedback/feedback");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>



<style>
</style>