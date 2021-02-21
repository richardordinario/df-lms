
import Dashboard from '../pages/Dashboard.vue'
import MyCourses from '../pages/MyCourses.vue'
import MyStudents from '../pages/MyStudents.vue'
import MyAccount from '../pages/MyAccount.vue'

import Middlewares from '../../../middlewares'

export default [
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            middleware: [Middlewares.student]
        }
    },
    {
        path: '/my-courses',
        name: 'My Courses',
        component: MyCourses,
        meta: {
            middleware: [Middlewares.student]
        }
    },
    {
        path: '/my-students',
        name: 'My Students',
        component: MyStudents,
        meta: {
            middleware: [Middlewares.student]
        }
    },
    {
        path: '/my-account',
        name: 'My Account',
        component: MyAccount,
        meta: {
            middleware: [Middlewares.teacher]
        }
    },
]
