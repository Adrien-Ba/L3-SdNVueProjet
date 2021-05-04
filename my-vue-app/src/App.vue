<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <router-link class="navbar-brand" to="/accueil">Pokédex</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/accueil">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/tableau">Index</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/peuimporte"
              >Peu Importe</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/helloworld"
              >Hello World</router-link
            >
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <button
            class="btn btn-outline-secondary mr-2 my-sm-2"
            @click="retourAccueil"
            type="reset"
          >
            X
          </button>
          <input
            class="form-control mr-sm-2"
            type="text"
            v-model="nomPokemon"
            placeholder="Nom de pokémon ..."
            aria-label="Search"
          />
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            @click="rechercher"
            type="submit"
          >
            Rechercher
          </button>
        </form>
      </div>
    </nav>

    <div>
      <div class="container">
        <router-view />
      </div>
    </div>
  </div>
</template>



<script lang="ts">
import { useStore } from "vuex";

import { defineComponent } from "vue";
import PeuImporte from "./components/PeuImporte.vue";

export default defineComponent({
  name: "App",
  components: {
    PeuImporte,
  },
  methods: {
    rechercher() {
      this.$router.push("/recherche/" + this.nomPokemon.toLowerCase());
    },
    retourAccueil() {
      this.$router.push("/accueil");
    },
  },
});
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>