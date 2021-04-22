<template>
  <div>
    <input type="test" v-model="nomPkmn"/>
    <table>
      <tr>{{listeNomPkmn?.name}}</tr>
      <tr>{{listeNomPkmn?.url}}</tr>
    </table>
    {{ cards }}
    <button @click="description">Toggle</button>
    {{ pokemonDesc }}
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  setup() {
    const cards = ref({});
    const nomPkmn = ref('');
    const pokemonDesc = ref({});

    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(function (response) {
        cards.value = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });


    return {
      cards,
      nomPkmn,
      pokemonDesc,
    };
  },
  computed: {
    collectionCards() {
      return this.cards?.['results'];
    },
    listeNomPkmn() {
      return this.collectionCards?.find(card => card.name.toLowerCase() === this.nomPkmn.toLowerCase());
    },
    description() {
      const pokemon = ref({});

      axios
      .get(this.listeNomPkmn?.url)
      .then(function (response) {
        pokemon.value = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
      this.pokemonDesc = pokemon;
      console.log(this.pokemonDesc); 
    }
  }
});
</script>

<style scoped>
</style>