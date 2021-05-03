import {createRouter, createWebHashHistory} from 'vue-router';
import PeuImporte from '../components/Peuimporte.vue';
import HelloWorld from '../components/HelloWorld.vue';
import Accueil from '../components/Accueil.vue';

const routes = [
    {
        path: '/peuimporte/:id',
        name: 'peuimporte',
        component: PeuImporte,
    },
    {
        path: '/peuimporte2',
        component: PeuImporte,
    },
    {
        path: '/helloworld',
        component: HelloWorld,
    },
    {
        path: '/accueil',
        component: Accueil,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;