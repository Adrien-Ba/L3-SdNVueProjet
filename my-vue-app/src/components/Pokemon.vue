<template>
  <div>
  <p>Page Pokemon</p>
  {{msg}}
  <h1>{{store.getters.getCollection[msg].name}}</h1>
  <p><img :src="store.getters.getCollection[msg].sprite"></p>
  <p><button @click="collect">Test</button></p>
  <p>
      <ul>
          <li>Id du pokémon : {{store.getters.getCollection[msg].id}}</li>
          <li>Taille du pokémon : {{store.getters.getCollection[msg].height}}0 cm</li>
          <li>Poids du pokémon : {{store.getters.getCollection[msg].weight}}0 g</li>
          <li v-for="item in store.getters.getCollection.types" :key="item.type">{{item.type}}</li>
          <li>Genre du pokémon : {{store.getters.getCollection[msg].genus}}</li>
          <li>Génération du pokémon : {{store.getters.getCollection[msg].generation}}</li>
          <li>Habitat du pokémon : {{store.getters.getCollection[msg].habitat}}</li>
      </ul>
  </p>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const msg = 1;





    return {
      msg,
      store
    };
  },
  created() {
    this.recupId()
  },
  watch: {
    '$route':'recupId'
  },
  methods: {
    recupId () {
    this.msg =  this.$route.params.id -1
    },
    collect () {
        console.log(this.store.getters.getCollection[this.msg])
    }
  }
});
</script>

<style scoped>
</style>