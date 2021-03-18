<template>
  <div>
    <div class="field">
      <label class="label">Customer Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Customer Name"
          v-model="CustomerName"
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
 
    <div class="control">
      <button class="button is-success" @click="saveCustomer">SAVE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddCustomer",
  data() {
    return {
      CustomerName: "",
      CustomerEmail: "",
    };
  },
  methods: {
    // Create New Customer
    async saveCustomer() {
      try {
        await axios.post("http://localhost:5000/Customers", {
          Customer_name: this.CustomerName,
          Customer_Email: this.CustomerEmail,
        });
        this.CustomerName = "";
        this.CustomerEmail = "";
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