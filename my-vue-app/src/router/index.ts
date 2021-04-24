import {createRouter, createWebHashHistory} from 'vue-router';
import PeuImporte from '../components/Peuimporte.vue';
import HelloWorld from '../components/HelloWorld.vue';

const routes = [
    {
        path: '/peuimporte',
        component: PeuImporte,
    },
    {
        path: '/helloworld',
        component: HelloWorld,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;