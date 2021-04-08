<template>
  <div>
    <router-link :to="{ name: 'AddCustomerType' }" class="button is-success mt-5"
      >Add New</router-link>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cType in customerType" :key="cType.customer_Type_id">
          <td>{{cType.customer_type_id}}
          <td>{{cType.name}}</td>
          
          
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'ViewCustomerType', params: { id: cType.customer_type_id } }"
              class="button is-info is-small"
              >View</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteCustomerType(cType.customer_type_id)"
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
  name: "CustomerTypeList",
  data() {
    return {
      customerType: [],
    };
  },
 
  created() {
    this.getCustomerType();
  },
 
  methods: {
    // Get All CustomerType
    async getCustomerType() {
      try {
        const response = await axios.get("http://localhost:5000/CustomerTypes");
        this.customerType = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete CustomerType
    async deleteCustomerType(id) {
      try {
        await axios.delete(`http://localhost:5000/CustomerTypes/${id}`);
        this.getCustomerType();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>
