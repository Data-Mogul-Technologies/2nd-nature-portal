<template>
    <!-- <div>
        <b-col>
            <b-card
                :title = "name"
                tag = "article"
                style="max-width:20rem"
                class = "mb-2"
            >
                <b-card-text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, autem.
                </b-card-text>
                <b-button variant = "primary">View</b-button>
            </b-card>
        </b-col>
    </div> -->

    <div>
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

        <div class="col-md-6">
            <div v-if="currentProfile">
                <h4>Profile Details</h4>
                <div>
                    <label><strong>Name: </strong></label> 
                    {{ currentProfile.first_name }} {{ currentProfile.last_name }}
                </div>
                <div >
                    <label ><strong>Profile Status: </strong></label>
                    {{ currentProfile.profile_status }}
                    <ProfileStatusDrop  @changeProfileStatus="selectedProfileStatus=$event" v-model="selectedProfileStatus" />
                    <b-button variant="primary" size="sm" @click="updateProfileStatus">Update profile status</b-button>
                </div>

                <div>
                    <label><strong>Action Type:</strong></label>
                    {{ currentProfile.profile_type }}
                </div>
                <div>
                    <label><strong>Motor Eye:</strong></label>
                    {{ currentProfile.motor_eye }}
                </div>
                <div>
                    <label><strong>Directionality:</strong></label>
                    {{ currentProfile.directionality }}
                </div>
                <div>
                    <label><strong>Vision Frequency:</strong></label>
                    {{ currentProfile.vision_freq }}
                </div>
                <div>
                    <label><strong>Weight Distribution/Stance:</strong></label>
                    {{ currentProfile.weight_distribution_stance }}
                </div>
                <div>
                    <label><strong>Ready Posture:</strong></label>
                    {{ currentProfile.ready_posture }}
                </div>
                <div>
                    <label><strong>Learning Style:</strong></label>
                    {{ currentProfile.learning_style }}
                </div>
                <div>
                    <label><strong>Internal Tempo:</strong></label>
                    {{ currentProfile.internal_tempo }}
                </div>
                <div>
                    <label><strong>Smooth/Percussive:</strong></label>
                    {{ currentProfile.smooth_percussive }}
                </div>
                <div>
                    <label><strong>Horizontal/Vertical:</strong></label>
                    {{ currentProfile.horizontal_vertical }}
                </div>
                <div>
                    <label><strong>Concentric/plyometric:</strong></label>
                    {{ currentProfile.concentric_polymetric }}
                </div>
                <div>
                    <label><strong>Torso Movement:</strong></label>
                    {{ currentProfile.torso_movement }}
                </div>
                <div>
                    <label><strong>Sport: </strong></label>
                    {{ currentProfile.sport }}
                </div>
                <div>
                    <label><strong>Date: </strong></label>
                    {{ currentProfile.date|formatDate }}
                </div>
                <div>
                    <label><strong>Orientation: </strong></label>
                    {{ currentProfile.orientation }}
                </div>
                <div>
                    <label><strong>Key Aspects Attacking: </strong></label>
                    {{ currentProfile.key_aspects_attacking }}
                </div>
                <div>
                    <label><strong>Vigorous Backswing: </strong></label>
                    {{ currentProfile.vig_backswing }}
                </div>
                <div>
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
                
                <router-link
                    :to="{ name: 'EditProfile', params: { id: currentProfile.at_customer_report_id } }"
                        class="button is-info is-small"
                >Edit
                </router-link>
                
            </div>
            <div v-else>
                <br />
                <p>Please click on a Profile...</p>
            </div>
        </div>
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
            allprofiles: [],
            currentProfile: null,
            currentIndex: -1,
            selectedProfileStatus: 0
        }
    },
    methods: {
        //Get all profiles 
        async getProfiles() {
            try {
                const response = await axios.get("http://localhost:5000/Profiles");
                this.allprofiles = response.data;
            } catch (err) {
                console.log(err);
            }
        },

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
                    status_id: this.selectedProfileStatus
                    }
                );
                this.selectedProfileStatus = 0;

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

/* .label-1 {
    display: inline-block;
    font-weight: 700;
} */
</style>