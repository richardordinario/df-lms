<template>
    <section>
        <v-layout align-center justify-center>
            <v-flex sm12 lg11>
                <v-row no-gutters>
                    <v-col cols="12" md="6" class="d-flex flex-column justify-content-center">
                        <h5 class="text-secondary">Dashboard</h5>
                        <h2 class="text-primary">Welcome Teacher!</h2>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-img src="/images/teacher/tour.png">
                            <h6 class="mx-10 mt-10">Hello, Teacher Maria!</h6>
                            <h5 class="ml-10">Would you like to take a tour first?</h5>
                            <div class="ml-14 mb-10">
                                <v-btn small text>Skip</v-btn>
                                <v-btn small color="#FFC464" class="white--text" rounded>Start</v-btn>
                            </div>
                        </v-img>
                    </v-col>
                </v-row>
            </v-flex>
        </v-layout>

        <v-row class="my-16">
            <v-col cols="6" md="3">
                <v-card class="bg-primary mx-auto" rounded="xl" max-width="250">
                    <v-card-text class="text-center">
                        <h1 class="white--text">8</h1>
                        <p class="white--text mb-0 pb-0">Total Subjects</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="6" md="3">
                <v-card class="bg-primary mx-auto" rounded="xl" max-width="250">
                    <v-card-text class="text-center">
                        <h1 class="white--text">150</h1>
                        <p class="white--text mb-0 pb-0">Total Students</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="6" md="3">
                <v-card class="bg-primary mx-auto" rounded="xl" max-width="250">
                    <v-card-text class="text-center">
                        <h1 class="white--text">140</h1>
                        <p class="white--text mb-0 pb-0">Total Active Students</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="6" md="3">
                <v-card class="bg-primary mx-auto" rounded="xl" max-width="250">
                    <v-card-text class="text-center">
                        <h1 class="white--text">10</h1>
                        <p class="white--text mb-0 pb-0">Total Active Courses</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-layout align-center justify-center>
            <v-flex sm12 lg11>
                <h2>My Courses</h2>
                <v-row class="my-10 justify-center">
                    <v-col cols="12" lg="10">
                        <v-tabs background-color="transparent" fixed-tabs color="#5CBEFF">
                            <v-tab>All</v-tab>
                            <v-tab>Recent</v-tab>
                            <v-tab>Draft</v-tab>
                            <v-tab>Upcoming</v-tab>
                        </v-tabs>
                    </v-col>
                </v-row>
            </v-flex>
        </v-layout>
        <v-row>
            <v-col cols="12" lg="3" md="6" sm="6">
                <v-card rounded="lg" max-width="250" class="mx-auto">
                    <v-card-text>
                        <v-img src="/images/subject.png" height="200"></v-img>
                        <h5 class="mt-2">Science</h5>
                        <v-rating
                        :value="4"
                        background-color="orange lighten-3"
                        color="orange"
                        ></v-rating>
                        <v-btn small elevation="0" rounded
                        class="bg-primary-1 text-primary mt-2">View Course</v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" lg="3" md="6" sm="6">
                <v-card rounded="lg" max-width="250" class="mx-auto">
                    <v-card-text>
                        <v-img src="/images/subject.png" height="200"></v-img>
                        <h5 class="mt-2">Science</h5>
                        <v-rating
                        :value="4"
                        background-color="orange lighten-3"
                        color="orange"
                        ></v-rating>
                        <v-btn small elevation="0" rounded
                        class="bg-primary-1 text-primary mt-2">View Course</v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" lg="3" md="6" sm="6">
                <v-card rounded="lg" max-width="250" class="mx-auto">
                    <v-card-text>
                        <v-img src="/images/subject.png" height="200"></v-img>
                        <h5 class="mt-2">Science</h5>
                        <v-rating
                        :value="4"
                        background-color="orange lighten-3"
                        color="orange"
                        ></v-rating>
                        <v-btn small elevation="0" rounded
                        class="bg-primary-1 text-primary mt-2">View Course</v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" lg="3" md="6" sm="6">
                <v-card rounded="lg" max-width="250" class="mx-auto">
                    <v-card-text>
                        <v-img src="/images/subject.png" height="200"></v-img>
                        <h5 class="mt-2">Science</h5>
                        <v-rating
                        :value="4"
                        background-color="orange lighten-3"
                        color="orange"
                        ></v-rating>
                        <v-btn small elevation="0" rounded
                        class="bg-primary-1 text-primary mt-2">View Course</v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </section>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

</style>
