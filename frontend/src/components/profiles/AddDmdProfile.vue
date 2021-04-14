<template>
  <div>
    <b-form v-if="show">

      <b-form-group id="input-group">
        <CustomerNameDrop @changeCustomerName="selectedCustomerName=$event" v-model="selectedCustomerName"/>
      </b-form-group>

      <b-form-group id="input-group" >
        <label ><strong>Profile Status: </strong></label>
        <ProfileStatusDrop @changeProfileStatus="selectedProfileStatus=$event" v-model="selectedProfileStatus" />
      </b-form-group>

    <b-form-group id="input-group" >
        <DMDProfileDrop @changeDMD="selectedDMD=$event" v-model="selectedDMD" />
    </b-form-group>

      <b-form-group id="input-group">
        <label class="label">Choose Date:</label>
        <b-form-input
          v-model="date"
          type="date"
          placeholder="Enter date"
          required
        ></b-form-input>
      </b-form-group>      

      <b-form-group>
        <label class="label">About Drivers:</label>
        <!-- <b-form-radio v-model="selectedOrientation" :aria-describedby="ariaDescribedby" name="some-radios2" value="Horizontal">Horizontal</b-form-radio>
        <b-form-radio v-model="selectedOrientation" :aria-describedby="ariaDescribedby" name="some-radios2" value="Vertical">Vertical</b-form-radio> -->
        <b-form-textarea
          v-model="about_drivers"
          type="text"
          placeholder="Type in driver details"
          rows="10"
          cols="25"
          required
        ></b-form-textarea>
      </b-form-group>

      
      <b-button @click="saveProfile" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import CustomerNameDrop from '../dropdowns/CustomerNamesDrop';
import DMDProfileDrop from '../dropdowns/DMDProfileDrop';
import ProfileStatusDrop from '../dropdowns/ProfileStatusDrop';
import axios from "axios";

  export default {
    name: "AddDMDProfile",
    components: {
      CustomerNameDrop,
      DMDProfileDrop,
      ProfileStatusDrop,
      
    },
    data() {
      return {
          selectedCustomerName: "",
          selectedDMD: "",
          selectedProfileStatus: "",
          about_drivers: "",
          date: "",
        show: true
      }
    },
    methods: {
      async saveProfile() {
        try {
          await axios.post("http://localhost:5000/DmdProfiles", {
            customer_id: this.selectedCustomerName,
            dmd_action_type_id: this.selectedDMD,
            status_id: this.selectedProfileStatus,
            about_drivers: this.about_drivers,
            date: this.date,
          });
            this.$router.push("/profile/all-dmd-profiles")
          } catch (err) {
              console.log(err);
          }
      }
    }
  }
</script>

<style lang="scss">

</style>