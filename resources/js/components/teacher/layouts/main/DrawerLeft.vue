<template>
   <section id="drawerLeft">
        <div class="d-flex flex-column justify-center align-center my-10" v-if="!mini">
            <v-avatar :size="mini ? '62' : '92'">
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-avatar>
            <h6 class=" mt-3 mb-0 pb-0">Teacher Almalyn</h6>
            <small class="font-weight-thin text-caption mt-0 pt-0">SKILL TRAINER</small>
        </div>
          <div class="text-center mt-10">
            <v-btn color="#08CDFF" rounded class="white--text text-normal">
                <v-icon :left="!mini">mdi-plus</v-icon>
                <span v-if="!mini">Upload a Course</span>
            </v-btn>
        </div>
        <v-list :dense="!mini" rounded :class="{mini} ? 'my-5' : ''">
            <router-link to="/dashboard">
                <v-list-item :class="$route.name == 'Dashboard' ? 'nav__list-active' : ''">
                    <v-list-item-icon>
                        <v-icon color="#08C4FF" :small="!mini">mdi-view-dashboard</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="nav__list">
                            Dashboard
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>
            <router-link to="/my-courses">
                <v-list-item :class="$route.name == 'My Courses' ? 'nav__list-active' : ''">
                    <v-list-item-icon>
                        <v-icon color="#08C4FF" :small="!mini">mdi-book</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="nav__list">
                            My Courses
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>

            <router-link to="/my-students">
                <v-list-item :class="$route.name == 'My Students' ? 'nav__list-active' : ''">
                    <v-list-item-icon>
                        <v-icon color="#08C4FF" :small="!mini">mdi-account-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="nav__list">
                            My Students
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>

            <v-subheader v-if="!mini">ACCOUNT</v-subheader>
            <router-link to="/my-account">
                <v-list-item :class="$route.name == 'My Account' ? 'nav__list-active' : ''">
                    <v-list-item-icon>
                        <v-icon color="#08C4FF" :small="!mini">mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="nav__list">
                            My Account
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>





            <v-list-item>
                <v-list-item-icon>
                    <v-icon color="#08C4FF" :small="!mini">mdi-logout</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title class="nav__list">
                        Logout
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
   </section>
</template>

<script>
    export default {
         props: { mini: Boolean},
    }
</script>
