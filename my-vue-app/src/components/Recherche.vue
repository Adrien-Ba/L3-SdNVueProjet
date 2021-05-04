<template>
<div>
  <h1>{{this.pokemon.name }}</h1>
  <p><img :src="this.pokemon.sprite" /></p>
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
    const numero = 1;

    return {
      store,
      numero,
      pokemon,
    };
  },
  methods: {
    async rechercher(numero) {
      const newPokemon = { id: null, name: null, sprite: null };
      await axios
        .get("https://pokeapi.co/api/v2/pokemon/" + numero)
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
        .get("https://pokeapi.co/api/v2/pokemon-species/" + numero)
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
    suivant() {
      this.aled(this.store, this.store.getters.getNbr);
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
      this.msg = this.$route.params.id - 1;
      if (this.store.getters.getCollection[this.msg] != null) {
        this.$router.push({ name: "pokemon", params: { id: this.msg } });
      } else {
        rechercher(this.msg);
      }
    },
    collect() {
      console.log(this.store.getters.getCollection[this.msg]);
    },
  },
});
</script>

<style scoped>
</style>