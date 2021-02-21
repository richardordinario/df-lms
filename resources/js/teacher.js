require('./bootstrap');

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import VueRouter from 'vue-router'
import App from './components/teacher/App.vue'
import routes from './components/teacher/router'

Vue.use(Vuetify)
Vue.use(VueRouter)

const opts = {}

const router = new VueRouter({
    hashbang: false,
    mode: 'history',
    base: '/teacher',
    routes
})

function nextCheck(context, middleware, index) {
    const nextMiddleware = middleware[index];

    if(!nextMiddleware) return context.next;

    return (...parameters) => {
        context.next(...parameters);
        const nextMidd = nextCheck(context, middleware, index + 1);

            nextMiddleware({...context, next: nextMidd});
    }
}

router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
        const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware];
        const ctx = {from, next, router, to};
        const nextMiddleware = nextCheck(ctx, middleware, 1);

        return middleware[0]({...ctx, next: nextMiddleware});
    }
    return next()
})

new Vue({
    router,
    vuetify: new Vuetify(opts),
    'el': '#app',
    render: h => h(App),
})


