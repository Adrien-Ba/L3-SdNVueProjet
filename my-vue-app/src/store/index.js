import { ref } from '@vue/reactivity';
import { createStore } from 'vuex'


const store = createStore({
  state () {
    return {
      count: 0,
      collection: ref([])
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    ajout (state, newPokemon) {
      state.collection.push(newPokemon)
    }
  },
  getters: {
      getcount:(state) => state.count,
      getCollection:(state) => state.collection
  },

})

export default store;
