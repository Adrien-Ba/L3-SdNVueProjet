<template>
  <div>
    <input type="test" v-model="nomPkmn"/>
    <table>
      <tr>{{listeNomPkmn?.name}}</tr>
      <tr>{{listeNomPkmn?.url}}</tr>
    </table>
    <button @click="description">Afficher info</button>
    <span v-if="showInfo">
        <h1>{{ pokemonDesc?.name }}</h1>
        <img :src="sprite"/>
        <table>
        <tr>{{ pokemonDesc?.id }}</tr>
        <!--<tr>{{ type }}</tr>-->
        </table>
    </span>
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
      .get('https://pokeapi.co/api/v2/pokemon?limit=898')
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
      showInfo: false,
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
    description() {
      const pokemon = ref({});
      const spriteTmp = ref('');

      axios
      .get(this.listeNomPkmn?.url)
      .then(function (response) {
        pokemon.value = response.data;
        spriteTmp.value = response.data.sprites.other?.['official-artwork'].front_default;
        //typeTmp.value = response.data.types?.[0].type.name;
      })
      .catch(function (error) {
        console.error(error);
      });
      this.sprite = spriteTmp;
      this.pokemonDesc = pokemon;
      //this.type = typeTmp;

      this.showInfo = true;
    },
  },
});
</script>

<style scoped>
</style>