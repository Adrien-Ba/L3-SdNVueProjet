<template>
   <main role="main" class="container">
        <div class="jumbotron">
            <h1>{{pokemon.name}}</h1>
            <p><img :src="pokemon.sprite"></p>
            <!--<p><button @click="collect">Test</button></p>-->
           <li v-for="type in pokemon.types" :key="type.name">{{type.type.name}}</li>
            <div class="row">
            <div class="col-6">
            <table class="table">
              <tbody>
                <tr>
                  <th class="text-center">Id :</th>
                  <td>{{pokemon.id}}</td>
                </tr>
                <tr>
                  <th class="text-center">Taille :</th>
                  <td>{{pokemon.height}}0 cm</td>
                </tr>
                <tr>
                  <th class="text-center">Poids :</th>
                  <td>{{pokemon.weight}}0 g</td>
                </tr>
              </tbody>
            </table>
            </div>
            <div class="col-6">
            <table class="table">
              <tbody>
                <tr>
                  <th class="text-center">Genre :</th>
                  <td>{{pokemon.genus}}</td>
                </tr>
                <tr>
                  <th class="text-center">Génération :</th>
                  <td>{{pokemon.generation.toUpperCase()}}</td>
                </tr>
                <tr>
                  <th class="text-center">Habitat :</th>
                  <td>{{pokemon.habitat}}</td>
                </tr>
              </tbody>
            </table>
            </div>
            
            </div>

            <button type="button" class="btn btn-secondary"><router-link to="/accueil">Aller à l'accueil   </router-link></button>
        </div>
    </main>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const nom = "dedenne";

    return {
      store,
      nom,
    };
  },
  data: function() {
    return {
      pokemon: { id: String, name: String, sprite: String},
    }
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
          newPokemon.location = response.data.habitat.name;
        })
        .catch(function (error) {
          console.error(error);
        });
        await axios
          .get("https://pokeapi.co/api/v2/pokemon-habitat/"+newPokemon.location)
          .then(function (response) {
            newPokemon.habitat = response.data.names[0].name;
          })
          .catch(function (error) {
            console.error(error);
          });
        this.pokemon = newPokemon;
    },
     recupNom() {
      this.nom = this.$route.params.id 
    },
  },
  created() {
    this.recupNom();
    console.log(this.nom)
    this.rechercher(this.nom);
  },
  watch: {
    $route: "recupNom",
  },
});
</script>

<style scoped>
</style>