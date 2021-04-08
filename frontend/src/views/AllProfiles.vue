<template>
    <b-container>

        <!-- <b-row align-v="center">
            <ProfileCard 
                :class="{ active: index == currentIndex }"
                v-for="(profile, index) in profiles" 
                :key="index"
                :name="profile.first_name" 
                @click="setActiveProfile(profile, index)"
            />
        </b-row> -->

        <nav />
        <main>
            <Pagination 
                v-if="profiles"
                :totalRecords="profiles.length" 
                :perPageOptions="perPageOptions" 
                v-model="pagination"
            />
            <ProfileCard 
                v-if="profiles" 
                :allProfiles="computedProfileData" 
                :config="config" 
                :style="{height: '600px'}"
            />
        </main>
    </b-container>
</template>



<script>
// import axios
import axios from "axios";

import Pagination from '../components/pagination.vue'
import ProfileCard from "../components/profiles/profileCard.vue"

const perPageOptions = [5, 10, 15]

export default {
    name: "Profiles",
    components: {
        ProfileCard,
        Pagination
    },
    data: function () {
        return {
            perPageOptions,
            pagination: { page: 1, perPage: perPageOptions[0] },
            profiles: [],
            config: [
            {
                key: 'first_name',
                title: 'First Name',
                type: 'text'
            },
            {
                key: 'last_name',
                title: 'last Name',
                type: 'text'
            },
            {
                key: 'profile_type',
                title: 'Profile Type',
                type: 'text'
            },
            {
                key: 'sport',
                title: 'Sport',
                type: 'text'
            },
            {
                key: 'profile_status',
                title: 'Profile Status',
                type: 'text'
            }
        ]
        };
    },
    created() {
        this.getProfiles();
    },
    methods: {

        //Get all profiles 
        async getProfiles() {
            try {
                const response = await axios.get("http://localhost:5000/Profiles");
                this.profiles = response.data;
                // this.rows = this.profiles.length
                // const val = response.json;
                // console.log(val);
            } catch (err) {
                console.log(err);
            }
        } 
    },
    computed: {
        computedProfileData () {
        if (!this.profiles) return []
        else {
            const firstIndex = (this.pagination.page - 1) * this.pagination.perPage
            const lastIndex = this.pagination.page * this.pagination.perPage
            return this.profiles.slice(firstIndex, lastIndex)
            }
        }
    }
}
</script>

<style lang = "scss">

main {
  margin: 30px;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
nav {
  height: 10px;
  background: #222;
  font-size: 32px;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 20px;
}

</style>


<!-- :key="profile.at_customer_report_id"  -->