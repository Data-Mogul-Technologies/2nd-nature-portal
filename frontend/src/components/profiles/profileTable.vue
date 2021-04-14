<template>
   <div> 
       <h1>Profile Table</h1>
        <section class="profileTable">
            <table>
                <thead>
                    <tr>
                        <th v-for="(object, index) in config" :key="index"> 
                            {{object.title}}
                        </th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="(row, index) in allProfiles" 
                        :key="index" 
                        @click="setSelectedRow(row, index)" 
                        :class="{'highlight': (index == currentIndex)}"
                    >
                        <td v-for="(object, index) in config" :key="index">
                            <span v-if="object.type === 'text'">
                                {{row[object.key]}}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        
        <b-col>
            <b-card
                tag = "article"
                style="max-width:100rem"
                class = "mb-2"
            >
                <b-card-text> 
                    <div class="col-md-20">
            <div v-if="currentProfile">
                <h4>Profile Details
                <router-link
                    :to="{ name: 'EditProfile', params: { id: currentProfile.at_customer_report_id } }"
                        class="button is-info is-small"
                >Edit profile
                </router-link></h4>
                <div>
                    <label><strong>Name: </strong></label> 
                    {{ currentProfile.first_name }} {{ currentProfile.last_name }}
                    <label ><strong>Profile Status: </strong>
                    {{ currentProfile.profile_status }}  </label>
                </div> 
                    <ProfileStatusDrop  @changeProfileStatus="selectedProfileStatus=$event" v-model="selectedProfileStatus" /> 
                    <b-button variant="primary" size="sm" @click="updateProfileStatus">Update profile status</b-button>
                   
               <div>
                    <label><strong>Action Type:</strong></label>
                    {{ currentProfile.profile_type }}

                    <label><strong>Motor Eye:</strong></label>
                    {{ currentProfile.motor_eye }}

                    <label><strong>Directionality:</strong></label>
                    {{ currentProfile.directionality }}
                
                    <label><strong>Vision Frequency:</strong></label>
                    {{ currentProfile.vision_freq }}

                    <label><strong>Weight Distribution/Stance:</strong></label>
                    {{ currentProfile.weight_distribution_stance }}
                </div>
                <div> 
                    <label><strong>Ready Posture:</strong></label>
                    {{ currentProfile.ready_posture }}

                    <label><strong>Learning Style:</strong></label>
                    {{ currentProfile.learning_style }}
                
                    <label><strong>Internal Tempo:</strong></label>
                    {{ currentProfile.internal_tempo }}

                    <label><strong>Smooth/Percussive:</strong></label>
                    {{ currentProfile.smooth_percussive }}
                </div>
                <div>
                    <label><strong>Horizontal/Vertical:</strong></label>
                    {{ currentProfile.horizontal_vertical }}
                
                    <label><strong>Concentric/plyometric:</strong></label>
                    {{ currentProfile.concentric_polymetric }}
                
                    <label><strong>Torso Movement:</strong></label>
                    {{ currentProfile.torso_movement }}
              
                    <label><strong>Sport: </strong></label>
                    {{ currentProfile.sport }}
               
                    <label><strong>Date: </strong></label>
                    {{ currentProfile.date|formatDate }}
               
                   
                </div>
                <div>
                    <label><strong>Orientation: </strong></label>
                    {{ currentProfile.orientation }}
                    <label><strong>Key Aspects Attacking: </strong></label>
                    {{ currentProfile.key_aspects_attacking }}
                
                    <label><strong>Vigorous Backswing: </strong></label>
                    {{ currentProfile.vig_backswing }}
               
                    <label><strong>Patience: </strong></label>
                    {{ currentProfile.patience }}
                </div>
                <div>
                    <label><strong>Jump Style: </strong></label>
                    {{ currentProfile.jump_style }}
                </div>
                <div>
                    <label><strong>Approach Style: </strong></label>
                    {{ currentProfile.approach_style }}
                </div>
                <div>
                    <label><strong>Ball Defense: </strong></label>
                    {{ currentProfile.ball_defense }}
                </div>
                <div>
                    <label><strong>Physical training: </strong></label>
                    {{ currentProfile.physical_training }}
                </div>
                
                 </div>
            <div v-else>
                <br />
                <p>Please click on a Profile...</p>
            </div>
       
            </div>
                </b-card-text>
              
            </b-card>
        </b-col>

       
            
    </div>

</template>

<script>
import ProfileStatusDrop from '../dropdowns/ProfileStatusDrop';

import axios from "axios";
export default {
    name:"ProfileCard",
    components: {
      ProfileStatusDrop
    },
    props: ['allProfiles', 'config'],
    data() {
        return {
            // allprofiles: [],
            currentProfile: null,
            currentIndex: -1,

            //for hte b-card to update status
            selectedProfileStatus: 0
        }
    },
    methods: {

        setSelectedRow(profile, index) {
            this.currentProfile = profile;
            this.currentIndex = index;
        },

        // Update Profile Status
        async updateProfileStatus() {
            try {
                await axios.put(
                    `http://localhost:5000/ProfileStatus4Customer/${this.currentProfile.at_customer_report_id}`,
                    {
                    status_at_dmd_id: this.selectedProfileStatus
                    }
                );
                // this.selectedProfileStatus = 0;
                console.log(this.selectedProfileStatus)

                window.location.reload();
            } catch (err) {
                console.log(err);
            }
        }
    }
}
</script>


<style lang = "scss">

.profileTable {
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
            text-align: center;
            border-bottom: 1px solid #888
        }
        td {
            padding: 10px 5px;
            text-align: center;
        }
        .highlight {
            background-color: #93b9d0;
        }
        tr:hover td {
            background-color: #93b9d0;
            cursor: pointer;
        }
    }
}

</style>