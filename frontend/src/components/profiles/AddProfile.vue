<template>
  <div>
    <b-form @reset="onReset" v-if="show">

      <b-form-group id="input-group">
        <CustomerNameDrop @changeCustomerName="selectedCustomerName=$event" v-model="form.selectedCustomerName"/>
      </b-form-group>

      <b-form-group id="input-group" >
        <ATDrop @changeAT="selectedAT=$event" v-model="form.selectedAT" />
      </b-form-group>

      <b-form-group id="input-group" >
        <ProfileStatusDrop @changeProfileStatus="selectedProfileStatus=$event" v-model="form.selectedProfileStatus" />
      </b-form-group>

      <b-form-group id="input-group" >
        <SportTypeDrop @changeSportType="selectedSportType=$event" v-model="form.selectedSportType" />
      </b-form-group>

      <b-form-group id="input-group">
        <label class="label">Choose Date:</label>
        <b-form-input
          v-model="form.date"
          type="date"
          placeholder="Enter date"
          required
        ></b-form-input>
      </b-form-group>      

      <b-form-group v-slot="{ ariaDescribedby }">
        <label class="label">Choose orientation:</label>
        <b-form-radio v-model="form.selectedOrientation" :aria-describedby="ariaDescribedby" name="some-radios2" value="Horizontal">Horizontal</b-form-radio>
        <b-form-radio v-model="form.selectedOrientation" :aria-describedby="ariaDescribedby" name="some-radios2" value="Vertical">Vertical</b-form-radio>
        <b-form-textarea
          v-model="form.orientation_details"
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
          v-model="form.key_aspects_attacking"
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
          v-model="form.vig_backswing"
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
          v-model="form.patience"
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
          v-model="form.jump_style"
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
          v-model="form.approach_style"
          type="text"
          placeholder="Type in details about Approach Style"
          rows="10"
          cols="25"
          required
        ></b-form-textarea>
      </b-form-group>

      <b-form-group v-slot="{ ariaDescribedby }">
        <label class="label">Choose one:</label>
        <b-form-radio v-model="form.selectedBall_Def" :aria-describedby="ariaDescribedby" name="some-radios" value="DEFENSE & SERVE RECEIVE MOVEMENT:">DEFENSE & SERVE RECEIVE MOVEMENT:</b-form-radio>
        <b-form-radio v-model="form.selectedBall_Def" :aria-describedby="ariaDescribedby" name="some-radios" value="BALL CONTROL/FIRST CONTACT">BALL CONTROL/FIRST CONTACT:</b-form-radio>
        <b-form-textarea
          v-model="form.ball_def"
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
          v-model="form.physical_training"
          type="text"
          placeholder="Type in details about Physical Training"
          rows="10"
          cols="25"
          required
        ></b-form-textarea>
      </b-form-group>


      <b-button @click="saveProfile" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
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
        form: {
          selectedCustomerName: '',
          selectedAT: '',
          selectedProfileStatus: '',
          selectedSportType: '',
          date: '',
          selectedOrientation: '',
          orientation_details: '',
          key_aspects_attacking: '',
          vig_backswing: '',
          patience: '',
          jump_style: '',
          approach_style: '',
          selectedBall_Def: '',
          ball_def: '',
          physical_training: ''
        },
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
            status_id: this.selectedProfileStatus,
            sport_type_id: this.selectedSportType,
            date: this.date,
            orientation: this.selectedOrientation,
            key_aspects_attacking: this.key_aspects_attacking,
            vig_backswing: this.vig_backswing,
            patience: this.patience,
            jump_style: this.jump_style,
            approach_style: this.approach_style,
            ball_defense: this.selectedBall_Def,
            physical_training: this.physical_training
          });
            this.selectedCustomerName = 0;
            this.selectedAT = 0;
            this.selectedProfileStatus = 0;
            this.selectedSportType = 0;
            this.date = "";
            this.selectedOrientation = "";
            this.orientation_details = "";
            this.key_aspects_attacking = "";
            this.vig_backswing = "";
            this.patience = "";
            this.jump_style = "";
            this.approach_style = "";
            this.selectedBall_Def = "";
            this.ball_def = "";
            this.physical_training = "";
            this.$router.push("/profile/all-profiles")
          } catch (err) {
              console.log(err);
          }
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style lang="scss">

</style>