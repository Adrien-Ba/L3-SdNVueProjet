<template>
  <div>
    <input type="text" v-model="pkmnName"/>
    <table>
      <tr>
        <td>{{ pkmnName.name }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  setup() {
    const cards = ref({});
    const pkmnName = ref('');

    axios
      .get('https://pokeapi.co/api/v2/pokemon/')
      .then(function (response) {
        cards.value = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });

    return {
      cards,
      pkmnName,
    };
  },
  /*computed: {
    collectionCards() {
      // {Basic: [], Classic: [], AutreCollection: [] }
      // [{cardId, name}, {cardId, name}, {cardId, name}]
      return this.cards[this.collection]?.slice(0, 10);
    },
    selectedCard() {
      return this.collectionCards?.find(card => card.name.toLowerCase() === this.pkmnName.toLowerCase());
    }
  },*/
});
</script>

<style scoped>
</style>