<template>
  <div class="container my-5">

    <div class="row">
    <div v-for="item in store.getters.getCollection" :key="item.id" class="card col-sm-3" >
      <img :src="item.sprite" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">{{ item.id }} : {{ item.name }}</h5>
        <router-link class="btn btn-primary" :to="{ name: 'pokemon', params: { id: item.id } }">Détails ...</router-link>
      </div>
    </div>
    </div>


    <button @click="suivant">Suivant</button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const collection = ref([]);
    const store = useStore();
    const nbr = 0;

    return {
      collection,
      store,
      nbr,
    };
  },
  methods: {
    async aled(store, nbr) {
      for (let i = nbr + 1; i < nbr + 11; i++) {
        const newPokemon = { id: null, name: null, sprite: null };
        await axios
          .get("https://pokeapi.co/api/v2/pokemon/" + i)
          .then(function (response) {
            newPokemon.sprite =
              response.data.sprites.other?.["official-artwork"].front_default;
            newPokemon.height = response.data.height;
            newPokemon.weight = response.data.weight;
            newPokemon.types = response.data.types;
            newPokemon.id = response.data.id;
          })
          .catch(function (error) {
            console.error(error);
          });
        await axios
          .get("https://pokeapi.co/api/v2/pokemon-species/" + i)
          .then(function (response) {
            newPokemon.name = response.data.names[4].name;
            newPokemon.genus = response.data.genera[3].genus;
            newPokemon.generation = response.data.generation.name;
            newPokemon.habitat = response.data.habitat.name;
          })
          .catch(function (error) {
            console.error(error);
          });

        store.commit("ajout", newPokemon);
        //console.log(collection);

        console.log("store" + store.getters.getCollection);
        //this.type = typeTmp;
      }
      store.commit("ajoutNbr");
    },
    suivant() {
      this.aled(this.store, this.store.getters.getNbr);
    },
  },

  created() {
    console.log(this.store.getters.getNbr);
    if(this.store.getters.getNbr==0) {
      this.aled(this.store, this.store.getters.getNbr);
    }
  },
});
</script>

<style scoped>
</style>