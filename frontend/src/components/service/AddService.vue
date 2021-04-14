 <template>
  <div>
    <h1>Add Service</h1>
    <div class="field">
      <label class="label">Customer First Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Customer First Name"
          v-model="CustomerFName"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Customer Last Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Customer Last Name"
          v-model="CustomerLName"
        />
      </div>
    </div>
    <ServiceStatusDrop @changeServiceStatus = "selectedServiceStatus=$event"/>
    <ServiceTypeDrop @changeServiceType = "selectedServiceType=$event"/>
    <div class="control">
      <button class="button is-success" @click="saveCustServ">Add</button>
      <router-link :to="{name:'CustomerList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";
import ServiceStatusDrop from '../dropdowns/ServiceStatusDrop'
import ServiceTypeDrop from '../dropdowns/ServiceTypeDrop'

export default {
  name: "AddCustServ",
  components:{
    ServiceStatusDrop,
    ServiceTypeDrop
  },
 
  data() {
    
    return {
        CustomerFName : "",
        CustomerLName : "",
        selectedServiceStatus : 0,
        selectedServiceType : 0
    };
  },
  created: function () {
    this.getCustomerById();
  },
  
  methods: {
    async getCustomerById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/Customers/${this.$route.params.id}`
        );
        this.CustomerFName = response.data.first_name;
        this.CustomerLName = response.data.last_name;


      } catch (err) {
        console.log(err);
      }
    },
    // Create New ServiceStatus
    async saveCustServ() {
      try { 
        await axios.post("http://localhost:5000/CustServ", {
            customer_id: this.$route.params.id,
            service_status_id: this.selectedServiceStatus,
            service_type_id: this.selectedServiceType
        });
          this.selectedServiceStatus = 0;
          this.selectedServiceType = 0;
        
        this.$router.push("/AllCustServ");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
</style>