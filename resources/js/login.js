require('./bootstrap');

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import App from './components/auth/Login.vue'

Vue.use(Vuetify)

const opts = {}

new Vue({
    vuetify: new Vuetify(opts),
    'el': '#app',
    render: h => h(App),
})


