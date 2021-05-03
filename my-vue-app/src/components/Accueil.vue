<template>
  <div>
      <ul>
        <li v-for="item in store.getters.getCollection" :key="item.id">{{ item.id }} {{item.name}} <img :src="item.sprite"/><router-link :to="{ name: 'PeuImporte', params: {id: item.id } }">more..</router-link>
</li>
      </ul>
      <button @click="suivant">Suivant</button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const collection = ref([]);
    const store = useStore();
    var nbr = 0;


   /* for(let i = 1; i < 11; i++) {
            axios
                  .get('https://pokeapi.co/api/v2/pokemon/'+i)
                  .then(function (response) {
                      const newPokemon = {id:null,name:null,sprite:null};
                      newPokemon.sprite = response.data.sprites.other?.['official-artwork'].front_default;
                      newPokemon.name = response.data.name;
                      newPokemon.id= response.data.id;
                      collection.value.push(newPokemon);
                      
            })
            .catch(function (error) {
                console.error(error);
            });

        
        console.log(collection);
        store.commit('ajout',newPokemon);
        console.log("store"+store.getters.getCollection)
      //this.type = typeTmp;
    }*/


    return {
      collection,
      store,
      nbr,
    };
  },
  methods: {
    async aled(store,nbr) {
      for(let i = nbr+1; i < nbr+11; i++) {
           await axios
                  .get('https://pokeapi.co/api/v2/pokemon/'+i)
                  .then(function (response) {
                      const newPokemon = {id:null,name:null,sprite:null};
                      newPokemon.sprite = response.data.sprites.other?.['official-artwork'].front_default;
                      newPokemon.name = response.data.name;
                      newPokemon.id= response.data.id;
                      console.log(newPokemon)
                      store.commit('ajout',newPokemon);               
            })
            .catch(function (error) {
                console.error(error);
            });

        
        //console.log(collection);
        
        console.log("store"+store.getters.getCollection)
      //this.type = typeTmp;
    }
    },
    suivant() {
      this.nbr += 10;
      this.aled(this.store, this.nbr);
    }
  },

  beforeMount() {
    this.aled(this.store, this.nbr);
  }
});
</script>

<style scoped>
</style>