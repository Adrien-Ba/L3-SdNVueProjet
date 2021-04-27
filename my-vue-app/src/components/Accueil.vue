<template>
  <div>
      <ul>
        <li v-for="item in collection" :key="item.id">{{ item.id }} {{item.name}} <img :src="item.sprite"/></li>
      </ul>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  setup() {
    const collection = ref([]);
 


    for(let i = 1; i < 11; i++) {
            axios
            .get('https://pokeapi.co/api/v2/pokemon/'+i)
            .then(function (response) {
                const newPokemon = {id:null,name:null,sprite:null};
                newPokemon.sprite = response.data.sprites.other?.['official-artwork'].front_default;
                newPokemon.name = response.data.name;
                newPokemon.id= response.data.id;
                collection.value.push(newPokemon);
            })
            .catch(function (error) {
                console.error(error);
            });

        
        console.log(collection);
      //this.type = typeTmp;
    }


    return {
      collection,
    };
  },
});
</script>

<style scoped>
</style>