<template>
    <section id="myStudents">
        <h2 class="ml-10 mb-10">My Students</h2>
        <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="10"
            class="elevation-1"
        >
            <template v-slot:[`item.status`]="{ item }">
                <v-chip :color="item.status == 1 ? 'success' : ''">{{ item.status == 1 ? 'Active' : 'Not Active'}}</v-chip>
            </template>
        </v-data-table>
    </section>
</template>

<script>
    export default {
        data () {
            return {
                headers: [
                    {
                        text: 'Name',
                        align: 'start',
                        sortable: false,
                        value: 'name',
                    },
                    { text: 'Status', value: 'status' },
                    { text: 'Remarks', value: 'grade' },
                    { text: 'Actions', value: 'action' },
                ],
                desserts: [
                    {
                        name: 'Juan Dela Cruz',
                        status: 1
                    },
                    {
                        name: 'Juan Dela Cruz',
                        status: 0
                    },
                    {
                        name: 'Juan Dela Cruz',
                        status: 1
                    },
                    {
                        name: 'Juan Dela Cruz',
                        status: 0
                    },
                    {
                        name: 'Juan Dela Cruz',
                        status: 0
                    },
                    {
                        name: 'Juan Dela Cruz',
                        status: 1
                    },
                    {
                        name: 'Juan Dela Cruz',
                        status: 1
                    },
                    {
                        name: 'Juan Dela Cruz',
                        status: 1
                    },
                    {
                        name: 'Juan Dela Cruz',
                        status: 1
                    },
                    {
                        name: 'Juan Dela Cruz',
                        status: 0
                    },
                ],
            }
        },

    }
</script>
