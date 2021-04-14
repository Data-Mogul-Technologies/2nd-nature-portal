<template>
  <div>
    <h1>View AT Profile</h1>
    <div class="field">
      <label class="label">AT Profile</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder=""
          v-model="ATProf"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Motor Eye</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder=""
          v-model="MotorEye"
        />
      </div>
    </div>

 <div class="field">
      <label class="label">Directionality</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Directionality"
          v-model="Directionality"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Vision Frequency</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Vision Frequency"
          v-model="VisionFreq"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Peripheral Vision</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Peripheral Vision"
          v-model="PeripheralVision"
        />
      </div>
    </div>


    <div class="field">
      <label class="label">Weight Distribution Stance</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder=""
          v-model="WeightDist"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Ready Posture</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder=""
          v-model="ReadyPosture"
        />
      </div>
    </div>
 
 <div class="field">
      <label class="label">Learning Style</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder=""
          v-model="LearningStyle"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Internal Tempo</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="internal_tempo"
          v-model="InternalTempo"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Smooth/Percussive</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder=""
          v-model="SmoothPerc"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Horizontal/Vertical</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder=""
          v-model="HoriVert"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Concentric/Polymetric</label>
      <div class="control">
          <input
          class="input"
          type="text"
          placeholder=""
          v-model="ConcPoly"
        />
        
      </div>
    </div>

    <div class="field">
      <label class="label">Torso Movement</label>
      <div class="control">
          <input
          class="input"
          type="text"
          placeholder="How Can We Help"
          v-model="TorsoMove"
        />
        
      </div>
    </div>

   
 
    
    <div class="control">
      <button class="button is-success" @click="updateATProfile">UPDATE</button>
      <router-link :to="{name:'ATProfileList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ViewATProfile",
  data() {
    return {
        ATProf : "",
        MotorEye : "",
        Directionality:"",
        VisionFreq:"",
        PeripheralVision : "",
        WeightDist:"",
        ReadyPosture:"",
        LearningStyle:"",
        InternalTempo :"",
        SmoothPerc:"",
        HoriVert:"",
        ConcPoly:"",
        TorsoMove:"",
        
    };
  },
  created: function () {
    this.getATProfileById();
  },
  methods: {
    // Get ATProfile By Id
    async getATProfileById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/ATProfile/${this.$route.params.id}`
        );
        this.ATProf = response.data.at_profile;
        this.MotorEye = response.data.motor_eye;
        this.Directionality = response.data.directionality;
        this.VisionFreq = response.data.vision_freq;
        this.PeripheralVision = response.data.peripheral_vision;
        this.WeightDist = response.data.weight_distribution_stance;
        this.ReadyPosture = response.data.ready_posture;
        this.LearningStyle = response.data.learning_style;
        this.InternalTempo = response.data.internal_tempo;
        this.SmoothPerc = response.data.smooth_percussive;
        this.HoriVert = response.data.horizontal_vertical;
        this.ConcPoly = response.data.concentric_polymetric;
        this.TorsoMove = response.data.torso_movement;
        

      } catch (err) {
        console.log(err);
      }
    },
    
    // Update ATProfile
    async updateATProfile() {
      try {
        await axios.put(
          `http://localhost:5000/ATProfile/${this.$route.params.id}`,
          {
            at_profile: this.ATProf,
            motor_eye: this.MotorEye,
            directionality: this.Directionality,
            vision_freq: this.VisionFreq,
            peripheral_vision: this.PeripheralVision,
            weight_distribution_stance: this.WeightDist,
            ready_posture: this.ReadyPosture,
            learning_style: this.LearningStyle,
            internal_tempo: this.InternalTempo,
            smooth_percussive: this.SmoothPerc,
            horizontal_vertical:this.HoriVert,
            concentric_polymetric: this.ConcPoly,
            torso_movement: this.TorsoMove,
            
          }
        );
        this.ATProf = "";
        this.MotorEye = "";
        this.Directionality="";
        this.VisionFreq="";
        this.PeripheralVision= "";
        this.WeightDist="";
        this.ReadyPosture="";
        this.LearningStyle="";
        this.InternalTempo = "";
        this.SmoothPerc="";
        this.HoriVert="";
        this.ConcPoly="";
        this.TorsoMove="";
        
        
        this.$router.push("/profile/manage-action-types");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>