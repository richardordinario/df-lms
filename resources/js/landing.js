require('./bootstrap');

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import App from './components/landing/App.vue'

Vue.use(Vuetify)

const opts = {}

new Vue({
    vuetify: new Vuetify(opts),
    'el': '#app',
    render: h => h(App),
})


