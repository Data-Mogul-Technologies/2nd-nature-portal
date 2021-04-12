<template>
    <b-container>
        <main>
            <Pagination 
                v-if="events"
                :totalRecords="events.length" 
                :perPageOptions="perPageOptions" 
                v-model="pagination"
            />
            <EventList
                v-if="events"
                :allEvents="computedEventData"
                :config="config" 
            />

        </main>
    </b-container>
    
</template>


<script>
import EventList from '../components/event/EventList.vue'
import Pagination from '../components/pagination.vue'
import axios from "axios";

const perPageOptions = [5, 10, 15]

export default {
    name: "Events",
    components: {
        EventList,
        Pagination
    },
    data: function () {
        return {
            perPageOptions,
            pagination: { page: 1, perPage: perPageOptions[0] },

            events: [],
            currentEvent: null,
            currentIndex: -1,
            config: [
                {
                    key: 'name',
                    title: 'Event Name',
                    type: 'text'
                },
                {
                    key: 'event_type',
                    title: 'Event Type',
                    type: 'text'
                }, 
                {
                    key: 'date',
                    title: 'Date',
                    type: 'date'
                },
                {
                    key: 'city',
                    title: 'City',
                    type: 'text'
                },
                {
                    key: 'state',
                    title: 'State',
                    type: 'text'
                },
                {
                    key: 'event_status',
                    title: 'Status',
                    type: 'text'
                }
            ]
        };
    },
    created() {
        this.getEvents();
    },
    methods: {
        // Get All Events
        async getEvents() {
        try {
            const response = await axios.get("http://localhost:5000/Events");
            this.events = response.data;
            console.log(response.data)
        } catch (err) {
            console.log(err);
            }
        },
        setActiveEvent(row, index) {
            this.selectedRow = row;
            this.currentIndex = index;

        }
    },
    computed: {
        computedEventData () {
        if (!this.events) return []
        else {
            const firstIndex = (this.pagination.page - 1) * this.pagination.perPage
            const lastIndex = this.pagination.page * this.pagination.perPage
            return this.events.slice(firstIndex, lastIndex)
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