<template>
  <div>
    {{ cards }}
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  setup() {
    const cards = ref[{}]

    axios
      .get('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then(function (response) {
        cards = response;
      })
      .catch(function (error) {
        console.error(error);
      });

    return {
      cards,
    };
  },
});
</script>

<style scoped>
</style>