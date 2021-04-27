<template>
  <div>
    <input type="test" v-model="nomPkmn"/>
    <table>
      <tr>{{listeNomPkmn?.name}}</tr>
      <tr>{{listeNomPkmn?.url}}</tr>
    </table>
    <button @click="description">Toggle</button>
    <h1>{{ pokemonDesc?.name }}</h1>
    <img :src="sprite"/>
     <table>
      <tr>{{ pokemonDesc?.id }}</tr>
      <tr>{{ pokemonDesc?.height}}</tr>
      <tr>{{ pokemonDesc?.weight}}</tr>
      <tr>{{ tmp }}</tr>
      <tr>{{ genera }}</tr>
      <tr>{{ type }}</tr>
    </table>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  setup() {
    const cards = ref({});
    const nomPkmn = ref('');
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=600')
      .then(function (response) {
        cards.value = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });


    return {
      cards,
      nomPkmn,
    };
  },
  data: function() {
    return {
      pokemonDesc: Object,
      sprite: String,
      genera: String,
      tmp: Object,
      type: String,
    }
  },
  computed: {
    collectionCards() {
      return this.cards?.['results'];
    },
    listeNomPkmn() {
      return this.collectionCards?.find(card => card.name.toLowerCase() === this.nomPkmn.toLowerCase());
    },
  },
  methods: {
    async description() {
      const pokemon = ref({});
      const spriteTmp = ref('');
      const speciesTmp = ref('');
      const generaTmp = ref('');
      const typeTmp = ref('');

      axios
      .get(this.listeNomPkmn?.url)
      .then(function (response) {
        pokemon.value = response.data;
        spriteTmp.value = response.data.sprites.other?.['official-artwork'].front_default;
        speciesTmp.value = response.data.species.url;
        typeTmp.value = response.data.types?.[0].type.name;
        axios
      .get(speciesTmp.value)
      .then(function (response) {
        generaTmp.value = response.data.genera?.['3'].genus;
      })
      .catch(function (error) {
        console.error(error);
      });
      })
      .catch(function (error) {
        console.error(error);
      });
      this.sprite = spriteTmp;
      this.pokemonDesc = pokemon;
      this.tmp = speciesTmp;
      this.genera = generaTmp;
      this.type = typeTmp;
    },
  },
});
</script>

<style scoped>
</style>