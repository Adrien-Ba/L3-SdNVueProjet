<template>
  <div>
      <li v-for="pokemon in collection" :key="pokemon">{{pokemon.id}} {{pokemon.name}} {{pokemon.nom}} {{pokemon.genus}}</li>
   </div>   
</template>

<script>

import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  setup() {
    const nom = "dedenne";

    return {
      nom,
    };
  },
  data: function() {
    return {
      pokemon: { id: String, name: String, sprite: String},
      collection: ref([]),
    }
  },
  methods: {
    async creerTableau() {
        for(let i = 1; i <= 898; i++) {
        const newPokemon = { id: null, name: null, sprite: null };
        await axios
            .get("https://pokeapi.co/api/v2/pokemon/" + i)
            .then(function (response) {
            newPokemon.id = response.data.id;
            newPokemon.name = response.data.name;
            })
            .catch(function (error) {
            console.error(error);
            });
        await axios
            .get("https://pokeapi.co/api/v2/pokemon-species/" + i)
            .then(function (response) {
            newPokemon.nom = response.data.names[4].name;
            newPokemon.genus = response.data.genera[3].genus;
            })
            .catch(function (error) {
            console.error(error)
            });
            this.collection.push(newPokemon);
        }
    },
  },
  beforeMount() {
   this.creerTableau();
  },
});
</script>

<style scoped>
</style>