import {createRouter, createWebHashHistory} from 'vue-router';
import PeuImporte from '../components/Peuimporte.vue';
import HelloWorld from '../components/HelloWorld.vue';
import Accueil from '../components/Accueil.vue';
import Pokemon from '../components/Pokemon.vue';

const routes = [
    {
        path: '/peuimporte',
        component: PeuImporte,
    },
    {
        path: '/helloworld',
        component: HelloWorld,
    },
    {
        path: '/accueil',
        component: Accueil,
    },
    {
        path: '/pokemon/:id',
        name: 'pokemon',
        component: Pokemon,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;