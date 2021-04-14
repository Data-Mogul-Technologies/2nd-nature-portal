<template>
  <div>
    <router-link :to="{ name: 'AddEvent' }" class="button is-success mt-5"
      >Add New Event</router-link>

    <section class="eventTable">
        <table>
            <thead>
                <tr>
                    <th v-for="(object, index) in config" :key="index"> 
                        {{object.title}}
                    </th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody >
                <tr v-for="(row, index) in allEvents" 
                    :key="index" 
                    @click="setSelectedRow(row, index)" 
                    :class="{'highlight': (index == currentIndex)}"
                >
                    <td v-for="(object, index) in config" :key="index">
                        <span v-if="object.type === 'text'">
                            {{row[object.key]}}
                        </span>
                        <span v-if="object.type === 'date'">
                          {{new Date(row[object.key]).toLocaleDateString()}} 
                        </span>
                    </td>
                    <td>
                      <router-link
                        :to="{ name: 'ViewEvent', params: { id: row.event_id }}"
                        >
                          <b-button variant="primary" size="sm">Edit event </b-button>
                      </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>

    <b-col>
      <b-card>
        <b-card-text>
          <div class="col-md-20" v-if="currentEvent">
            <h4>Registered customers</h4>
            <div v-if="allCustomers">
              <div>
                <CustomerNameDrop @changeCustomerName = "selectedCustomerName=$event" v-model="selectedCustomerName"/> 
              <b-button variant="primary" size="sm" @click="addCustomerToEvent">Register cutomer</b-button>
              </div>

              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th>Customer name</th>
                    <th>Phone number</th>
                    <th>Email</th>
                    <th>Payment Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(customer, index) in allCustomers"
                      :key="index"
                  >
                    <td>{{customer.FirstName}} {{customer.LastName}}</td>
                    <td>{{customer.mobile_phone}}</td>
                    <td>{{customer.email}}</td>
                    <td>{{customer.PaymentStatus}}</td>
                    <td>
                      <router-link
                        :to="{ name: 'ViewRegPay', params: { id: customer.registration_payment_id }}"
                        >
                        <b-button variant="primary" >Edit payment info </b-button>
                        </router-link>
                    </td>
                    
                  </tr>
                </tbody>
              </table>             
            </div>
            <div v-else>
              <p>No customers registered for event. </p>
            </div>
          </div>
          <div v-else>
            <br />
            <p>Please click on an Event...</p>
          </div>
        </b-card-text>
      </b-card>
    </b-col>

  </div>
</template>
 
<script>
// import axios
import axios from "axios";
import CustomerNameDrop from '../dropdowns/CustomerNamesDrop.vue'
 
export default {
  name: "EventList",
  components: { CustomerNameDrop },
  props: ['allEvents', 'config'],
  data() {
    return {
      selectedCustomerName: 0,
      allCustomers: [],
      currentEvent: null,
      currentIndex: -1
    };
  },
 
  methods: {

    //get all customers for a single event
    async setSelectedRow(event, index) {
      this.currentEvent = event;
      this.currentIndex = index;
      try {
        const response = await axios.get(`http://localhost:5000/EventCustomers/${this.currentEvent.event_id}`);
        this.allCustomers = response.data;
        console.log(response.data)
      } catch (err) {
        console.log(err);
      }
    },

    //get all customers for single event
    async addCustomerToEvent () {
      try {
        await axios.post("http://localhost:5000/Registration", 
        {
          customer_id: this.selectedCustomerName,
          event_id: this.currentEvent.event_id
        });
      console.log(this.selectedCustomerName);
      console.log(this.currentEvent.event_id);
      } catch (err) {
        console.log(err);
      }

      try {
        await axios.post("http://localhost:5000/DefaultRegistrationPayment");
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
 
<style lang = "scss">

.eventTable {
    border: 1px solid #888;
    border-radius: 5px;
    overflow: auto;

    table {
        border-collapse: collapse;
        width: 100.1%;

        th {
            position: sticky;
            top: 0;
            background: #f1f1f1;
            padding: 10px 5px;
            text-align: left;
            border-bottom: 1px solid #888
        }
        td {
            padding: 10px 5px;
            text-align: left;
        }
        .highlight {
            background-color: #76c7dd;
        }
        tr:hover td {
            background-color: #93b9d0;
            cursor: pointer;
        }
    }
}

</style>
