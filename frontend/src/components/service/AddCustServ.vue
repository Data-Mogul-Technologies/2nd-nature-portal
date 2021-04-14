 <template>
  <div>
    <h1>Add Customer Service</h1>
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
    <div class="field">
      <label class="label">date</label>
      <div class="control">
        <input
          class="input"
          type="date"
          placeholder="Customer Last Name"
          v-model="ServDate"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Amount</label>
      <div class="control">
        <input
          class="input"
          type="number"
          placeholder="Customer Last Name"
          v-model="Amount"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Confirmation Number</label>
      <div class="control">
        <input
          class="input"
          type="number"
          placeholder="Confirmation Number"
          v-model="ConfNum"
        />
      </div>
    </div>
    
   <PaymentStatusDrop @changePaymentStatus = "selectedPaymentStatus=$event"/>
    <PaymentSourceDrop @changePaymentSource = "selectedPaymentSource=$event"/>
    <div class="control">
      <button class="button is-success" @click="saveCustServ">Add</button>
      <router-link :to="{name:'CustomerList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";

import PaymentStatusDrop from '../dropdowns/PaymentStatusDrop'
import PaymentSourceDrop from '../dropdowns/PaymentSourceDrop'
export default {
  name: "ViewCustServ",
  components:{
    PaymentStatusDrop,
    PaymentSourceDrop
  },
 
  data() {
    
    return {
        
        CustomerFName:"",
        CustomerLName: "",
        ServDate: "",
        Amount: 0,
        ConfNum: 0,
        selectedPaymentStatus : 0,
        selectedPaymentSource : 0
    };
  },
  created: function () {
    this.getCustomerById();
  },
  
  methods: {
    async getCustomerById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/CustServ/${this.$route.params.id}`
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
        await axios.post("http://localhost:5000/CustPayment", {
            customer_service_type_id:this.$route.params.id,
            payment_status_id: this.selectedPaymentStatus,
            payment_source_id: this.selectedPaymentSource,
            date: this.ServDate,
            amount:this.Amount,
            confirmation_num:this.ConfNum,
        });
          this.selectedPaymentStatus = 0;
          this.selectedPaymentSource = 0;
          this.ServDate = "";
          this.Amount = 0;
          this.ConfNum = "";

        
        this.$router.push("/payment/service-payment");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
</style>