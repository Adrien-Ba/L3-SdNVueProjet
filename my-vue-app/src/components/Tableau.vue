<template>
  <div class="container">
    <br/>
    <div class="jumbotron">
      <p>
        Cette page a été réalisée afin de trouver les noms des pokémons en
        anglais, pour pouvoir utiliser le champ de recherche<br />
      </p>
    </div>

    <div class="row">
      <div class="col">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nom (anglais)</th>
              <th scope="col">Nom (français)</th>
              <th scope="col">Genre</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="pokemon in collection" :key="pokemon">
              <td>{{ pokemon.id }}</td>
              <td>{{ pokemon.name }}</td>
              <td>{{ pokemon.nom }}</td>
              <td>{{ pokemon.genus }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  data: function () {
    return {
      pokemon: { id: String, name: String, sprite: String },
      collection: ref([]),
    };
  },
  methods: {
    async creerTableau() {
      for (let i = 1; i <= 898; i++) {
        const newPokemon = { id: null, name: null, sprite: null };
        await axios
          .get("https://pokeapi.co/api/v2/pokemon/" + i)
          .then(function (response) {
            newPokemon.id = response.data.id;
          })
          .catch(function (error) {
            console.error(error);
          });
        await axios
          .get("https://pokeapi.co/api/v2/pokemon-species/" + i)
          .then(function (response) {
            newPokemon.nom = response.data.names[4].name;
            newPokemon.name = response.data.names[8].name;
            newPokemon.genus = response.data.genera[3].genus;
          })
          .catch(function (error) {
            console.error(error);
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