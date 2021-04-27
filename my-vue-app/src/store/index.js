import {createStore} from 'vuex';

const store = createStore({
    state() {
        return {
            id: 3,
            count: 3,
        };
    },
    getters: {
        getId: (state) => state.id,
        getCount: (state) => state.count,
    },
    mutations: {
        increment(state) { 
            state.count ++;
        }
     }
});

export default store;