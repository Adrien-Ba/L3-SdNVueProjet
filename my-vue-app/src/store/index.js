import { ref } from '@vue/reactivity';
import { createStore } from 'vuex'


const store = createStore({
  state () {
    return {
      count: 0,
      collection: ref([]),
      nbr: 0,
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    ajout (state, newPokemon) {
      state.collection.push(newPokemon)
    },
    ajoutNbr (state) {
      state.nbr+=10;
    }
  },
  getters: {
      getcount:(state) => state.count,
      getCollection:(state) => state.collection,
      getNbr:(state) => state.nbr
  },

})

export default store;
