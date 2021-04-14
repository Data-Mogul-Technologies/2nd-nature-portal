<template>
    <div>
        <div>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th>Consultant</th>
                </tr>
            </thead>
            <tbody>
                <tr 
                v-for="(row, index) in consultants" 
                :key="index" 
                @click="setSelectedRow(row, index)" 
                :class="{'highlight': (index == currentIndex)}"
                >
                    <td>{{row.first_name}} {{row.last_name}}</td>
                </tr>
            </tbody>
        </table>
        <b-button-group>
            <b-button variant="success" @click="getReport">List all customers</b-button>
            <!-- <b-button variant="info">List all events</b-button>
            <b-button variant="warning">List all services</b-button> -->
        </b-button-group>
        </div>

    <!-- <b-button-group>
        <b-dropdown 
            variant="outline-primary" 
            right text="consultant"
            v-for="(row, index) in consultants" 
            :key="index" 
            @click="setSelectedButton(row, index)"
        >
             <b-dropdown-item  @click="getReport">Get all customers</b-dropdown-item> -->
            <!-- <b-dropdown-item @click="GetAllEvents">Get all events</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item @click="GetAllServices">Get all services</b-dropdown-item> -->
        <!-- </b-dropdown>
    </b-button-group> -->

    <div v-if="currentConsultant">
        <table class="table is-striped is-bordered mt-2 is-fullwidth">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name </th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Business</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="record in report" :key="record.sport_consultant_customer_id">
                <td>{{ record.CustomerFirstName }}</td>
                <td>{{ record.CustomerLastName }}</td>
                <td>{{ record.Email }}</td>
                <td>{{ record.MobilePhone}}</td>
                <td>{{ record.Business }}</td>
            </tr>
        </tbody>
        </table>
    </div>
    <div v-else>
        <br />
        <b-card>
            <b-card-text>
                <p>Please select a consultant and click list all customers...</p>
            </b-card-text>
        </b-card>
    </div> 

    </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
    name: "CustomersPerConsultant",
    data() {
    return {
        consultants: [],
        report: [],
        currentConsultant: null,
        currentIndex: -1,
    };
  },
 
  created() {
    this.getConsultants();
    this.getReport();
  },
 
  methods: {

      setSelectedRow(consultant, index) {
            this.currentConsultant = consultant;
            this.currentIndex = index;
            console.log(consultant.sport_consultant_id)
        },
    // Get All Consultants
    async getConsultants() {
      try {
        const response = await axios.get("http://localhost:5000/Consultants");
        this.consultants = response.data;
        console.log(response.data)
      } catch (err) {
        console.log(err);
      }
    },

    // Get all consultant customers 
    async getReport() {
        try {
        const response = await axios.get(`http://localhost:5000/ConsultantCust/${this.currentConsultant.sport_consultant_id}`);
        this.report = response.data;
        console.log(response.data)
        } catch (err) {
        console.log(err);
        }
    }
  }
}
</script>


<style>
.table{
    border: 1px solid #888;
    border-radius: 5px;
    overflow: auto;   
}
.highlight {
    background-color: #93b9d0;
}
tr:hover td {
    background-color: #93b9d0;
    cursor: pointer;
}
</style>