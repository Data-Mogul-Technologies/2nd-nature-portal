<template>
  <div>
    <div class="field">
     <p> <strong> Customer First Name: </strong> {{customers.first_name}}</p>
    </div>


    <div class="field">
      <p><strong>Customer Last Name:</strong> {{customers.last_name}}</p>
    </div>
    
     <div class="field">
      <label class="label">Feedback Date</label>
      <div class="control">
        <input
          class="input"
          type="date"
          placeholder="Feedback Date"
          v-model="FeedbackDate"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">How did you hear about us?</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Feedback Hear"
          v-model="FeedbackHear"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Rate How Helpful</label>
      <div class="control">
        <input
          class="input"
          type="number"
          placeholder="(1-5)"
          v-model="FeedbackHelpRate"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">How helpful</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Feedback"
          v-model="FeedbackHelpCom"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Recommendation Rate</label>
      <div class="control">
        <input
          class="input"
          type="number"
          placeholder="(1-5)"
          v-model="FeedbackRecRate"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Recommendation Comment</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Feedback "
          v-model="FeedbackRecCom"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">General Feedback</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Feedback"
          v-model="FeedbackGen"
        />
      </div>
    </div>

    
    <div class="control">
      <button class="button is-success" @click="saveFeedback">Add</button>
      <router-link :to="{name:'FeedbackList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";


export default {
  name: "AddFeedback",
 component:{
   
 },
  data() {
    
    return {
        customers:[],
        FeedbackDate : "",
        FeedbackHear : "",
        FeedbackHelpRate: "",
        FeedbackHelpCom: "",
        FeedbackRecRate: "",
        FeedbackRecCom: "",
        FeedbackGen: "",
        selectedCustomerName: "",
        
    };
  },
  created: function () {
    this.getFeedbackById();
  },
  methods: {

    async getFeedbackById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/Customers/${this.$route.params.id}`
        );
        this.customers = response.data
        
        
       

      } catch (err) {
        console.log(err);
      }
    },
    // Create New Feedback
    async saveFeedback() {
      try { 
        await axios.post("http://localhost:5000/Feedback", {
            customer_id: this.$route.params.id,
            date: this.FeedbackDate,
            how_hear: this.FeedbackHear,
            how_helpful_rate: this.FeedbackHelpRate,
            how_helpful_comment: this.FeedbackHelpCom,
            recommend_rate: this.FeedbackRecRate,
            recommend_comment: this.FeedbackRecCom,
            gen_feedback: this.FeedbackGen,
            
        });
        
       
        
        
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