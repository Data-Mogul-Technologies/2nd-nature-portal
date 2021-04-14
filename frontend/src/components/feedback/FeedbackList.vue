<template>
  <div>
    <router-link :to="{ name: 'CustomerList' }" class="button is-link mt-5"
      >Customer List To Add Feedback</router-link>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date</th>
          <th>How did they hear about us?</th>
          <th>How helpful Rating</th>
          <th>How helpful Comment</th>
          <th>Recommendation Rating</th>
          <th>Recommendation Comment</th>
          <th>General Feedback</th>
          
          
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="feedback in feedbacks" :key="feedback.feedback_id">
          <td>{{feedback.first_name }}</td>
          <td>{{feedback.last_name }}</td>
          <td>{{feedback.date | formatDate }}</td>
          <td>{{feedback.how_hear }}</td>
          <td>{{feedback.how_helpful_rate }}</td>
          <td>{{feedback.how_helpful_comment }}</td>
          <td>{{feedback.recommend_rate}}</td>
          <td>{{feedback.recommend_comment}}</td>
          <td>{{feedback.gen_feedback}}</td>
          
          
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'ViewFeedback', params: { id: feedback.feedback_id } }"
              class="button is-info is-small"
              >View</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteFeedback(feedback.feedback_id)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "FeedbackList",
  data() {
    return {
     feedbacks: [],
    };
  },
 
  created() {
    this.getFeedback();
  },
 
  methods: {
    // Get All Feedback
    async getFeedback() {
      try {
        const response = await axios.get("http://localhost:5000/Feedback");
        this.feedbacks = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Feedback
    async deleteFeedback(id) {
      try {
        await axios.delete(`http://localhost:5000/Feedback/${id}`);
        this.getFeedback();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
