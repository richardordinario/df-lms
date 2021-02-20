<template>
    <section id="myAccount">
        <v-card rounded="lg">
            <v-img src="/images/teacher/account-bg.png" max-height="270" class="align-end">
                <div class="d-flex flex-row">
                    <v-avatar size="170" tile color="ml-5">
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                    </v-avatar>
                    <v-card width="100%" class="mt-5" style="background:rgba(255, 255, 255, 0.49);">
                        <v-card-text class="ml-10 mt-5">
                            <h3 class="black--text">Maria Dela Cruz
                                <span class="white--text text-caption ml-10"><v-icon color="white">mdi-map-marker</v-icon>Quezon City</span>
                            </h3>
                            <h5 class="white--text">Virtual Assistant</h5>
                        </v-card-text>
                    </v-card>
                </div>
            </v-img>
            <v-card-text class="ma-5">
                <h5>About Me: </h5>
                <v-card-text>
                    <v-row no-gutters>
                        <v-col cols="12" md="8">
                            <p class="mt-5 black--text">Hard-working and self-motivated virtual assistant with 2+ years experience in website content administration, record-keeping, and various personal assistance tasks. Able to focus on work without need for supervision. Current IVAA and GAVA member. Uploaded and edited content for 5 websites with more than 100,000 monthly visitors each in 2018. Seeking to become the remote webmaster and virtual assistant for Tim Jones, LLC.</p>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-list dense>
                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon>mdi-phone</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <p>+639 01 234 567 8</p>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon>mdi-email</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <p>mariadelacuz@gmail.com</p>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon>mdi-map-marker</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <p>Central Ave., Quezon City</p>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card-text>
        </v-card>

        <v-card rounded="lg" max-width="700" class="my-16">
            <v-card-title class="text-primary">
               <v-icon color="#08CDFF" class="mr-5">mdi-lightning-bolt</v-icon> Skills
            </v-card-title>
            <v-card-text>
                <v-list dense>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon color="#08CDFF">mdi-power-on</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content class="black--text">
                           <p>Organizational Skills</p>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon color="#08CDFF">mdi-power-on</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content class="black--text">
                            <p>Great Communication Abilities</p>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>

        <v-card rounded="lg" max-width="700" class="my-16">
            <v-card-title class="text-primary">
               <v-icon color="#08CDFF" class="mr-5">mdi-briefcase</v-icon> Work Experience
            </v-card-title>
            <v-card-text>
                <v-timeline dense align-top >
                    <v-timeline-item small color="#08CDFF">
                        <v-row class="pt-1">
                            <v-col cols="3">
                                <strong>June 2018–July 2019</strong>
                            </v-col>
                            <v-col cols="1">
                                <v-icon>mdi-briefcase</v-icon>
                            </v-col>
                            <v-col>
                                <p>Webmaster & Virtual Assistant </p>
                            </v-col>
                        </v-row>
                    </v-timeline-item>
                    <v-timeline-item small color="#08CDFF">
                        <v-row class="pt-1">
                            <v-col cols="3">
                                <strong>June 2018–July 2019</strong>
                            </v-col>
                            <v-col cols="1">
                                <v-icon>mdi-briefcase</v-icon>
                            </v-col>
                            <v-col>
                                <p>Webmaster & Virtual Assistant </p>
                            </v-col>
                        </v-row>
                    </v-timeline-item>
                    <v-timeline-item small color="#08CDFF">
                        <v-row class="pt-1">
                            <v-col cols="3">
                                <strong>June 2018–July 2019</strong>
                            </v-col>
                            <v-col cols="1">
                                <v-icon>mdi-briefcase</v-icon>
                            </v-col>
                            <v-col>
                                <p>Webmaster & Virtual Assistant </p>
                            </v-col>
                        </v-row>
                    </v-timeline-item>
                </v-timeline>
            </v-card-text>
        </v-card>

        <v-card rounded="lg" max-width="700" class="my-16">
            <v-card-title class="text-primary">
               <v-icon color="#08CDFF" class="mr-5">mdi-book</v-icon> Education
            </v-card-title>
            <v-card-text>
                <v-timeline dense align-top >
                    <v-timeline-item small color="#08CDFF">
                        <v-row class="pt-1">
                            <v-col cols="3">
                                <strong>JGraduation: 2017</strong>
                            </v-col>

                            <v-col>
                                <p>Advanced Virtual Assistant Certificate Vallejo Community College, Vallejo, CA</p>
                            </v-col>
                        </v-row>
                    </v-timeline-item>
                    <v-timeline-item small color="#08CDFF">
                        <v-row class="pt-1">
                            <v-col cols="3">
                                <strong>JGraduation: 2017</strong>
                            </v-col>

                            <v-col>
                                <p>Advanced Virtual Assistant Certificate Vallejo Community College, Vallejo, CA</p>
                            </v-col>
                        </v-row>
                    </v-timeline-item>
                    <v-timeline-item small color="#08CDFF">
                        <v-row class="pt-1">
                            <v-col cols="3">
                                <strong>JGraduation: 2017</strong>
                            </v-col>

                            <v-col>
                                <p>Advanced Virtual Assistant Certificate Vallejo Community College, Vallejo, CA</p>
                            </v-col>
                        </v-row>
                    </v-timeline-item>
                </v-timeline>
            </v-card-text>
        </v-card>

    </section>
</template>

<script>
    export default {

    }
</script>
