<template>
    <v-app>
        <v-app-bar app
        color="white"
        elevation="1">
        <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        color="#08CDFF"
        class="hidden-md-and-up"></v-app-bar-nav-icon>
        <v-app-bar-nav-icon
        @click.stop="mini = !mini"
        color="#08CDFF"
        class="hidden-sm-and-down"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer app
        v-model="drawer"
        class="drawerLeft"
        :mini-variant.sync="mini"
        mini-variant-width="80"
        width="250"
        color="white"
        :permanent="!$vuetify.breakpoint.smAndDown">
            <v-app-bar color="#08CDFF">
                <v-toolbar-title>
                    <v-avatar>

                    </v-avatar>
                </v-toolbar-title>
            </v-app-bar>
             <DrawerLeft :mini="mini"/>
        </v-navigation-drawer>
        <v-main class="main">
            <v-container>
                <v-layout justify-center class="mt-10">
                    <v-flex xs12 sm10 lg12 xl9>
                        <router-view></router-view>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import DrawerLeft from './layouts/main/DrawerLeft'
    export default {
        components: { DrawerLeft },
        data: () => ({
            drawer: false,
            mini: false,
            auth: false,
        }),
        watch: {
            group() {
                this.drawer = false;
            },
        },
    }
</script>
