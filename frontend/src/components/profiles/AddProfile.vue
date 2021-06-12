<template>
  <div>
    <h1>Add Profile</h1>
    <b-form v-if="show">

      <b-form-group id="input-group">
        <CustomerNameDrop @changeCustomerName="selectedCustomerName=$event" v-model="selectedCustomerName"/>
      </b-form-group>

      <b-form-group id="input-group" >
        <ATDrop @changeAT="selectedAT=$event" v-model="selectedAT" />
      </b-form-group>

      <b-form-group id="input-group" >
        <label ><strong>Profile Status: </strong></label>
        <ProfileStatusDrop @changeProfileStatus="selectedProfileStatus=$event" v-model="selectedProfileStatus" />
      </b-form-group>

      <b-form-group id="input-group" >
        <SportTypeDrop @changeSportType="selectedSportType=$event" v-model="selectedSportType" />
      </b-form-group>
      <div class="field has-addons">
      <b-form-group id="input-group">
        <label class="label">Choose Date:</label>
        <b-form-input
          v-model="date"
          type="date"
          placeholder="Enter date"
          required
        ></b-form-input>
      </b-form-group>
      </div>      

      <b-form-group>
        <label class="label">Orientation:</label>
        <!-- <b-form-radio v-model="selectedOrientation" :aria-describedby="ariaDescribedby" name="some-radios2" value="Horizontal">Horizontal</b-form-radio>
        <b-form-radio v-model="selectedOrientation" :aria-describedby="ariaDescribedby" name="some-radios2" value="Vertical">Vertical</b-form-radio> -->
        <b-form-textarea
          v-model="orientation_details"
          type="text"
          placeholder="Type in orientation details"
          rows="10"
          cols="25"
          required
        ></b-form-textarea>
      </b-form-group>

      <b-form-group id="input-group" >
        <label class="label">key aspects attacking:</label>
        <b-form-textarea
          v-model="key_aspects_attacking"
          type="text"
          placeholder="Type in key aspects attacking details"
          rows="10"
          cols="25"
          required
        ></b-form-textarea>
      </b-form-group>

      <b-form-group id="input-group" >
        <label class="label">Vigorous backswing:</label>
        <b-form-textarea
          v-model="vig_backswing"
          type="text"
          placeholder="Type in Vigorous backswing details"
          rows="10"
          cols="25"
          required
        ></b-form-textarea>
      </b-form-group>

      <b-form-group id="input-group" >
        <label class="label">Patience:</label>
        <b-form-textarea
          v-model="patience"
          type="text"
          placeholder="Type in details about patience"
          rows="10"
          cols="25"
          required
        ></b-form-textarea>
      </b-form-group>

      <b-form-group id="input-group" >
        <label class="label">Jump Style:</label>
        <b-form-textarea
          v-model="jump_style"
          type="text"
          placeholder="Type in details about jump style"
          rows="10"
          cols="25"
          required
        ></b-form-textarea>
      </b-form-group>

      <b-form-group id="input-group" >
        <label class="label">Approach Style:</label>
        <b-form-textarea
          v-model="approach_style"
          type="text"
          placeholder="Type in details about Approach Style"
          rows="10"
          cols="25"
          required
        ></b-form-textarea>
      </b-form-group>

      <b-form-group>
        <label class="label">Movement details:</label>
        <!-- <b-form-radio v-model="selectedBall_Def" :aria-describedby="ariaDescribedby" name="some-radios" value="DEFENSE & SERVE RECEIVE MOVEMENT:">DEFENSE & SERVE RECEIVE MOVEMENT:</b-form-radio>
        <b-form-radio v-model="selectedBall_Def" :aria-describedby="ariaDescribedby" name="some-radios" value="BALL CONTROL/FIRST CONTACT">BALL CONTROL/FIRST CONTACT:</b-form-radio> -->
        <b-form-textarea
          v-model="ball_def"
          type="text"
          placeholder="Type in details"
          rows="10"
          cols="25"
          required
        ></b-form-textarea>
      </b-form-group>

      <b-form-group id="input-group" >
        <label class="label">Physical Training:</label>
        <b-form-textarea
          v-model="physical_training"
          type="text"
          placeholder="Type in details about Physical Training"
          rows="10"
          cols="25"
          required
        ></b-form-textarea>
      </b-form-group>
      <b-button @click="saveProfile" variant="primary">Submit</b-button>
      <router-link :to="{name:'Home'}"><b-button class="button is-danger">Cancel</b-button></router-link>
    </b-form>
  </div>
</template>

<script>
import CustomerNameDrop from '../dropdowns/CustomerNamesDrop';
import ATDrop from '../dropdowns/ATprofileDrop';
import ProfileStatusDrop from '../dropdowns/ProfileStatusDrop';
import SportTypeDrop from '../dropdowns/SportTypeDrop';
import axios from "axios";

  export default {
    name: "AddProfile",
    components: {
      CustomerNameDrop,
      ATDrop,
      ProfileStatusDrop,
      SportTypeDrop
    },
    data() {
      return {
          selectedCustomerName: "",
          selectedAT: "",
          selectedProfileStatus: "",
          selectedSportType: "",
          date: "",
          // selectedOrientation: "",
          orientation_details: "",
          key_aspects_attacking: "",
          vig_backswing: "",
          patience: "",
          jump_style: "",
          approach_style: "",
          // selectedBall_Def: "",
          ball_def: "",
          physical_training: "",
        show: true,
        selectedBall_Def: '',
        selectedOrientation: ''
      }
    },
    methods: {
      async saveProfile() {
        try {
          await axios.post("http://localhost:5000/Profiles", {
            customer_id: this.selectedCustomerName,
            action_type_id: this.selectedAT,
            status_at_dmd_id: this.selectedProfileStatus,
            sport_type_id: this.selectedSportType,
            date: this.date,
            orientation: this.orientation_details,
            key_aspects_attacking: this.key_aspects_attacking,
            vig_backswing: this.vig_backswing,
            patience: this.patience,
            jump_style: this.jump_style,
            approach_style: this.approach_style,
            ball_defense: this.ball_def,
            physical_training: this.physical_training
          });
            this.selectedCustomerName = 0;
            this.selectedAT = 0;
            this.selectedProfileStatus = 0;
            this.selectedSportType = 0;
            this.date = "";
            // this.selectedOrientation = "";
            this.orientation_details = "";
            this.key_aspects_attacking = "";
            this.vig_backswing = "";
            this.patience = "";
            this.jump_style = "";
            this.approach_style = "";
            // this.selectedBall_Def = "";
            this.ball_def = "";
            this.physical_training = "";
            this.$router.push("/profile/all-action-type-profiles")
          } catch (err) {
              console.log(err);
          }
      }
    }
  }
</script>

<style lang="scss">

</style>