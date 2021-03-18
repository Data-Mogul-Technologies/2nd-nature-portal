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
      <button class="button is-success" @click="updateCustomer">UPDATE</button>
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
      CustomerName: "",
      CustomerEmail: "",
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
        this.CustomerName = response.data.customer_name;
        this.CustomerEmail = response.data.customer_email;
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
            customer_name: this.CustomerName,
            customer_email: this.CustomerEmail,
          }
        );
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