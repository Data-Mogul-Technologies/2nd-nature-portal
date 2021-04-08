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
    <section class="profileTable">
        <table>
            <thead>
                <tr>
                    <th v-for="(object, index) in config" :key="index"> 
                        {{object.title}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in allProfiles" :key="index">
                    <td v-for="(object, index) in config" :key="index">
                        <span v-if="object.type === 'text'">
                            {{row[object.key]}}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
export default {
    name:"ProfileCard",
    props: ['allProfiles', 'config']
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
    }
}

</style>