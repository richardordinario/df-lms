<template>
    <section>
        <v-layout align-center justify-center>
            <v-flex sm12 lg11>
                <v-row no-gutters>
                    <v-col cols="12" md="6" class="d-flex flex-column justify-content-center">
                        <h5 class="text-secondary">Dashboard</h5>
                        <h2 class="text-primary">Welcome Student!</h2>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-img src="/images/teacher/tour.png">
                            <h6 class="mx-10 mt-10">Hello, Juan!</h6>
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

        <v-layout align-center justify-center>
            <v-flex sm12 lg10>
                 <v-card class="my-16" rounded="lg">
                    <v-card-text>
                        <v-data-table
                            :headers="headers"
                            :items="courses"
                            :items-per-page="10"
                            class="dt-dashboard elevation-0"
                        >
                            <template v-slot:[`item.progress`]="{ item }">
                                <v-progress-linear height="15" :value="item.progress"
                                :color="item.progress == 100 ? 'success' : '#08C4FF' ">
                                    <template v-slot:default="{ value }">
                                        <small>{{ Math.ceil(value) }}%</small>
                                    </template>
                                </v-progress-linear>
                            </template>

                            <template v-slot:[`item.action`]="{ item }">
                                <v-btn
                                rounded
                                small
                                color="#08C4FF"
                                class="white--text"
                                >{{ item.progress == 0 ? 'Start Course' : (item.progress != 100 ? 'Continue' : 'View') }}</v-btn>
                            </template>
                        </v-data-table>
                    </v-card-text>
                </v-card>
                 <v-card rounded="lg">
                    <v-row no-gutters>
                        <v-col cols="12" md="6" style="border-right: 2px solid #EFEFEF">
                            <v-card elevation="0">
                                <v-card-text>
                                    <v-data-table
                                        :headers="header_quizzes"
                                        :items="quiz_scores"
                                        :items-per-page="10"
                                        class="dt-dashboard elevation-0"
                                    >
                                        <template v-slot:[`item.score`]="{ item }">
                                            <v-avatar size="40" color="#08C4FF">
                                                <span class="white--text">{{ item.score }}</span>
                                            </v-avatar>
                                        </template>
                                    </v-data-table>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-card elevation="0">
                                <v-card-text>
                                    <v-data-table
                                        :headers="header_assessments"
                                        :items="assessment_scores"
                                        :items-per-page="10"
                                        class="dt-dashboard elevation-0"
                                    >
                                        <template v-slot:[`item.score`]="{ item }">
                                            <v-avatar size="40" color="#08C4FF">
                                                <span class="white--text">{{ item.score }}</span>
                                            </v-avatar>
                                        </template>
                                    </v-data-table>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>
            </v-flex>
        </v-layout>

    </section>
</template>

<script>
    export default {
        data () {
            return {
                headers: [
                    {
                        text: 'My Courses',
                        align: 'start',
                        sortable: false,
                        value: 'name',
                    },
                    { text: 'Instructor', value: 'teacher' },
                    { text: 'Progress', value: 'progress' },
                    {
                        text: 'Action',
                        value: 'action',
                        class: 'dt-action'
                    },
                ],
                courses: [
                    {
                        name: 'Course 1',
                        teacher: 'Teacher John Cena',
                        progress: 0
                    },
                    {
                        name: 'Course 1',
                        teacher: 'Teacher John Cena',
                        progress: 75
                    },
                    {
                        name: 'Course 1',
                        teacher: 'Teacher John Cena',
                        progress: 100
                    },
                ],
                header_quizzes: [
                    {
                        text: 'My Quizzes',
                        align: 'start',
                        sortable: false,
                        value: 'quiz_name',
                    },
                    {
                        text: 'Scores',
                        value: 'score',
                        sortable: false,
                        class: 'dt-action',
                    },
                ],
                quiz_scores: [
                    {
                        quiz_name: 'Quiz 1',
                        score: 100
                    },
                    {
                        quiz_name: 'Quiz 2',
                        score: 0
                    }
                ],
                header_assessments: [
                    {
                        text: 'My Assesments',
                        align: 'start',
                        sortable: false,
                        value: 'assessment_name',
                    },
                    {
                        text: 'Scores',
                        value: 'score',
                        sortable: false,
                        class: 'dt-action',
                    },
                ],
                assessment_scores: [
                    {
                        assessment_name: 'Assessment 1',
                        score: 100
                    },
                    {
                        assessment_name: 'Assessment 2',
                        score: 0
                    }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
