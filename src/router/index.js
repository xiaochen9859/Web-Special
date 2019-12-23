import VueRouter from 'vue-router';
import home from '../pages/Home/index.vue';

export default new VueRouter({
    routes: [
        { 
            path: '/', 
            redirect: { path: '/home' }
        },
        {
            path: '/home',
            component: home
        }
    ]
})
