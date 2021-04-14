<template>
  <div>
    <h1>Edit AT Profile</h1>
    <b-form v-if="show">

      <!-- <b-form-group id="input-group">
        <CustomerNameDrop @changeCustomerName="selectedCustomerName=$event" v-model="selectedCustomerName"/>
      </b-form-group>

      <b-form-group id="input-group" >
        <ATDrop @changeAT="selectedAT=$event" v-model="selectedAT" />
      </b-form-group>

      <b-form-group id="input-group" >
        <ProfileStatusDrop @changeProfileStatus="currentProfileStatus=$event" v-model="currentProfileStatus" />
      </b-form-group>

      <b-form-group id="input-group" >
        <SportTypeDrop @changeSportType="selectedSportType=$event" v-model="selectedSportType" />
      </b-form-group> -->

      <b-form-group id="input-group">
        <label class="label-1">Customer name: </label>
        <span> {{customerFirstName}} {{customerLastName}}</span>
      </b-form-group>  

      <b-form-group id="input-group">
        <label class="label-1">Action Type: </label>
        <span> {{selectedAT}}</span>
      </b-form-group>  

      <b-form-group id="input-group">
        <label class="label-1">Sport Type: </label>
        <span> {{selectedSportType}} </span>
      </b-form-group>

      <b-form-group id="input-group">
        <label class="label-1">Date: </label>
        <span> {{date | formatDate}}</span>
      </b-form-group>  

      <b-form-group id="input-group">
        <label class="label-1">Current Profile Status: </label>
        <span> {{currentProfileStatus}} </span>
      </b-form-group>        


      <b-form-group>
        <label class="label">Orientation details:</label>
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
        <label class="label">Defense/Ball Control:</label>
        <!-- <b-form-radio v-model="selectedBall_Def" :aria-describedby="ariaDescribedby" name="some-radios" value="DEFENSE & SERVE RECEIVE MOVEMENT:">DEFENSE & SERVE RECEIVE MOVEMENT:</b-form-radio>
        <b-form-radio v-model="selectedBall_Def" :aria-describedby="ariaDescribedby" name="some-radios" value="BALL CONTROL/FIRST CONTACT">BALL CONTROL/FIRST CONTACT:</b-form-radio> -->
        <b-form-textarea
          v-model="ball_defense"
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
          rows="10"
          cols="25"
          required
        ></b-form-textarea>
      </b-form-group>
      <b-button @click="updateProfile" variant="primary">Submit</b-button>
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
    name: "EditProfile",
    data () {
        return {
          customerFirstName: "",
          customerLastName: "",
          selectedAT: "",
          currentProfileStatus: "",
          selectedProfileStatus: "",
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
          ball_defense: "",
          physical_training: "",
        show: true,
        selectedBall_Def: '',
        selectedOrientation: '',
        show: true
      }
    },
    created: function () {
        this.getProfileById();
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },

        // Get Profile By Id
        async getProfileById() {
        try {
            const response = await axios.get(
            `http://localhost:5000/Profiles/${this.$route.params.id}`
            );
            this.customerFirstName = response.data.first_name;
            this.customerLastName = response.data.last_name;
            this.selectedAT = response.data.profile_type;
            this.selectedSportType = response.data.sport;
            this.date = response.data.date;
            this.currentProfileStatus = response.data.profile_status;
            this.orientation_details = response.data.orientation;
            this.key_aspects_attacking = response.data.key_aspects_attacking;
            this.vig_backswing = response.data.vig_backswing;
            this.patience = response.data.patience;
            this.jump_style = response.data.jump_style;
            this.approach_style = response.data.approach_style;
            this.ball_defense = response.data.ball_defense;
            this.physical_training = response.data.physical_training;
        } catch (err) {
            console.log(err);
            }
        },
        
        // Update Profile
        async updateProfile() {
            try {
                await axios.put(
                    `http://localhost:5000/Profiles/${this.$route.params.id}`,
                    {
                    orientation: this.orientation_details,
                    key_aspects_attacking: this.key_aspects_attacking,
                    vig_backswing: this.vig_backswing,
                    patience: this.patience,
                    jump_style: this.jump_style,
                    approach_style: this.approach_style,
                    ball_defense: this.ball_defense,
                    physical_training: this.physical_training
                    }
                );
                this.orientation_details = "";
                this.key_aspects_attacking = "";
                this.vig_backswing="";
                this.jump_style="";
                this.approach_style= "";
                this.ball_defense="";
                this.physical_training="";

                this.$router.push("/profile/all-profiles")
            } catch (err) {
                console.log(err);
            }
        }
    }
}
</script>

<style lang = "scss">
    .label-1 {
        display: inline-block;
        font-weight: 700;
    }

</style>