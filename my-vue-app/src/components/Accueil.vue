<template>
  <div>
    <main role="main " class="container">
      <div class="jumbotron">
        <h1>Bienvenue dans le Pokédex</h1>
        <p>
          Ce pokédex à été développé à l'aide du framework Vue js.<br />
          Il fait appel à l'api PokéApi. Les requêtes sont gérées avec Axios et
          les pokémon déjà chargés sont stockés dans un store. <br />
          Le site dispose d'une page d'accueil (celle-ci), une page qui apporte
          plus de détails sur un pokémon choisi, ainsi que la possibilité
          d'effecuter des recherches sur un pokémon en particulier.<br />
          Le front à été réalisé grace à Bootstrap. <br />
          Nous vous souhaitons une agréable visite.<br />
        </p>
        <p>Réalisé par Adrien Bassail et Henri Boulnois<br /></p>
      </div>
    </main>

    <div class="container my-5">
      <div class="row">
        <div
          v-for="item in store.getters.getCollection"
          :key="item.id"
          class="card col-sm-3"
        >
          <img :src="item.sprite" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ item.id }} : {{ item.name }}</h5>
            <router-link
              class="btn btn-primary"
              :to="{ name: 'pokemon', params: { id: item.id } }"
              >Détails ...</router-link
            >
          </div>
        </div>
      </div>

      <button @click="suivant">Suivant</button>
    </div>
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
    async cherche(store, nbr) {
      for (let i = nbr + 1; i < nbr + 11; i++) {
        const newPokemon = { id: null, name: null, sprite: null, types: [] };
        await axios
          .get("https://pokeapi.co/api/v2/pokemon/" + i)
          .then(function (response) {
            newPokemon.sprite =
              response.data.sprites.other?.["official-artwork"].front_default;
            newPokemon.height = response.data.height;
            newPokemon.weight = response.data.weight;
            newPokemon.types = response.data.types;
            console.log("type" + response.data.types);
            console.log("type" + newPokemon.types[0].type.name);
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
            newPokemon.location = response.data.habitat.name;
          })
          .catch(function (error) {
            console.error(error);
          });
        axios
          .get(
            "https://pokeapi.co/api/v2/pokemon-habitat/" + newPokemon.location
          )
          .then(function (response) {
            newPokemon.habitat = response.data.names[0].name;
          })
          .catch(function (error) {
            console.error(error);
          });

        store.commit("ajout", newPokemon);

        console.log("store" + store.getters.getCollection);
      }
      store.commit("ajoutNbr");
    },
    suivant() {
      this.cherche(this.store, this.store.getters.getNbr);
    },
  },

  created() {
    console.log(this.store.getters.getNbr);
    if (this.store.getters.getNbr == 0) {
      this.cherche(this.store, this.store.getters.getNbr);
    }
  },
});
</script>

<style scoped>
</style>