<template>
<div>
  <h1>{{this.pokemon.value.name }}</h1>
  <p><img :src="this.pokemon.value.sprite" /></p>
  <!--<p><button @click="collect">Test</button></p>-->
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const pokemon = ref({});
    const nom = "pikachu";

    return {
      store,
      nom,
      pokemon,
    };
  },
  methods: {
    async rechercher(nom) {
      const newPokemon = { id: null, name: null, sprite: null };
      await axios
        .get("https://pokeapi.co/api/v2/pokemon/" + nom)
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
        .get("https://pokeapi.co/api/v2/pokemon-species/" + nom)
        .then(function (response) {
          newPokemon.name = response.data.names[4].name;
          newPokemon.genus = response.data.genera[3].genus;
          newPokemon.generation = response.data.generation.name;
          newPokemon.habitat = response.data.habitat.name;
        })
        .catch(function (error) {
          console.error(error);
        });
        this.pokemon = newPokemon;
    },
  },

  created() {
    this.recupId();
  },
  watch: {
    $route: "recupId",
  },
  methods: {
    recupId() {
      this.nom = this.$route.params.id 
    },
  },
});
</script>

<style scoped>
</style>