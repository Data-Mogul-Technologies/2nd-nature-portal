<template>
  <div>
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

    <!-- <div class="field">
      <label class="label">Helpful Rating</label>
      <div class="control">

        <label for="one"> 1 </label><input type="radio" :checked="radio===1" id="one" name="one" value="1" @change="radio = $event.target.value" v-model="FeedbackRecRate"/>
        <label for="two"> 2 </label><input type="radio" :checked="radio===2" id="two" name="two" value="2" @change="radio = $event.target.value" v-model="FeedbackRecRate"/>
        <label for="three"> 3 </label><input type="radio" :checked="radio===3" id="three" name="three" value="3" @change="radio = $event.target.value" v-model="FeedbackRecRate"/>
        <label for="four"> 4 </label><input type="radio" :checked="radio===4" id="four" name="four" value="4" @change="radio = $event.target.value" v-model="FeedbackRecRate"/>
        <label for="five"> 5 </label><input type="radio" :checked="radio===5" id="five" name="five" value="5" @change="radio = $event.target.value" v-model="FeedbackRecRate"/>
      </div>
    </div> -->

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

    <!-- <div class="field">
      <label class="label">Feedback Date</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Feedback Date"
          v-model="FeedbackDate"
        />
      </div>
    </div> -->

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
 
  data() {
    
    return {
        FeedbackDate : YYYY-MM-DD,
        FeedbackHear : "",
        FeedbackHelpRate: 0,
        FeedbackHelpCom: "",
        FeedbackRecRate: 0,
        FeedbackRecCom: "",
        FeedbackGen: ""
    };
  },
  
  methods: {
    // Create New Feedback
    async saveFeedback() {
      try { 
        await axios.post("http://localhost:5000/Feedback", {
            date: this.FeedbackDate,
            how_hear: this.FeedbackHear,
            how_helpful_rate: this.FeedbackHelpRate,
            how_helpful_comment: this.FeedbackHelpCom,
            recommend_rate: this.FeedbackRecRate,
            recommend_comment: this.FeedbackRecCom,
            gen_feedback: this.FeedbacFeedbackGenkDate,
        });
        
        this.FeedbackDate = "";
        this.FeedbackHear = "";
        this.FeedbackHelpRate= 0;
        this.FeedbackHelpCom= "";
        this.FeedbackRecRate= 0;
        this.FeedbackRecCom= "";
        this.FeedbackGen= "";
        
        
        this.$router.push("/FeedbackList");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
</style>