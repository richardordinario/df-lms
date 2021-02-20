<template>
    <v-app>
        <v-main>
            <v-container fill-height>
                <v-row class="justif-content-center justify-center">
                    <v-col cols="12" sm="6">
                        <v-card>
                            <v-row no-gutters>
                                <v-col cols="12" md="6" class="info"></v-col>
                                <v-col cols="12" md="6">
                                    <v-card-text>
                                        <small class="text-overline">Email Address</small>
                                        <v-text-field
                                        dense
                                        outlined
                                        placeholder="Email"></v-text-field>
                                        <small class="text-overline">Password</small>
                                        <v-text-field
                                        dense
                                        outlined
                                        placeholder="Password"></v-text-field>
                                        <v-btn color="info">Login</v-btn>
                                    </v-card-text>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    export default {

    }
</script>
