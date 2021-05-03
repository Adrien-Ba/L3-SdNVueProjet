<template>
  <div>
    <ul>
      <li v-for="item in store.getters.getCollection" :key="item.id">
        {{ item.id }} {{ item.name }} <img :src="item.sprite" /><router-link
          :to="{ name: 'pokemon', params: { id: item.id } }"
          >more..</router-link
        >
      </li>
    </ul>
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
    var nbr = 0;

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
    },
    suivant() {
      this.nbr += 10;
      this.aled(this.store, this.nbr);
    },
  },

  beforeMount() {
    console.log(this.nbr);
    this.aled(this.store, this.nbr);
  },
});
</script>

<style scoped>
</style>