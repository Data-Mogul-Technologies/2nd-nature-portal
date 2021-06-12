<template>
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
                            <span v-if="object.type === 'date'">
                                {{new Date(row[object.key]).toLocaleDateString()}} 
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
                <!-- <router-link
                    :to="{ name: 'EditProfile', params: { id: currentProfile.at_customer_report_id } }"
                        class="button is-info is-small"
                >Edit profile
                </router-link> -->
                </h4>
                <div>
                    <label><strong>Name: </strong></label> 
                    {{ currentProfile.first_name }} {{ currentProfile.last_name }}
                    <label ><strong>Profile Status: </strong>
                    {{ currentProfile.profile_status }}  </label>
                </div> 
                    <ProfileStatusDrop  @changeProfileStatus="selectedProfileStatus=$event" v-model="selectedProfileStatus" /> 
                    <b-button variant="primary" size="sm" @click="updateProfileStatus">Update profile status</b-button>
                   
               <div>
                    <label><strong>Dominant Drive</strong></label>
                    {{ currentProfile.dom_driver }}

                    <label><strong>Secondary Driver</strong></label>
                    {{ currentProfile.sec_driver }}

                </div>

                <div>
                    <label><strong>Report date:</strong></label>
                    {{ currentProfile.date | formatDate }}
                
                    <label><strong>Status of profile:</strong></label>
                    {{ currentProfile.profile_status }}
               </div>
               <!-- <div>
                    <label><strong>About the drivers:</strong></label>
                    {{ currentProfile.about_drivers }}
                </div> -->


                <!-- <div class="field">
                    <label class="label">About the drivers:</label>
                    <div class="control">
                        <textarea rows="4" cols="50" name="comment" form="usrform" v-model="about_drivers">
                        </textarea>
                    </div>
                    <b-button @click="updateProfile" variant="primary">Submit</b-button>
                </div> -->

                <div>
                    <label><strong>Current drivers info:</strong></label>
                    <p>{{currentProfile.about_drivers}}</p>
                </div>


                <div>
                    <b-form>
                        <b-form-group>
                            <label><strong>Add/Update drivers:</strong></label>
                            <b-form-textarea
                                v-model="about_drivers"
                                type-="text"
                                aria-placeholder="type in details about the profile drivers"
                            >hello</b-form-textarea>
                        </b-form-group>
                        <b-button @click="updateProfile" variant="primary">Update</b-button>
                    </b-form>
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
    name:"DmdProfileTable",
    components: {
      ProfileStatusDrop
    },
    props: ['allProfiles', 'config'],
    data() {
        return {
            allprofiles: [],
            currentProfile: null,
            currentIndex: -1,

            //for hte b-card to update status
            selectedProfileStatus: 0,

            about_drivers: ""
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
                    `http://localhost:5000/DmdProfilesStatus/${this.currentProfile.dmd_customer_report_id}`,
                    {
                    status_id: this.selectedProfileStatus
                    }
                );
                // this.selectedProfileStatus = 0;
                console.log(this.selectedProfileStatus)

                window.location.reload();
            } catch (err) {
                console.log(err);
            }
        },

        //update profile about drivers
        async updateProfile() {
            try {
                await axios.put(
                    `http://localhost:5000/UpdateAboutDriver/${this.currentProfile.dmd_customer_report_id}`,
                    {
                    about_drivers: this.about_drivers
                    }
                );
                console.log(this.about_drivers)
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