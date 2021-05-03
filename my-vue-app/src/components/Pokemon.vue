<template>
  <div>
  <p>Page Pokemon</p>
  {{msg}}
  <h1>{{store.getters.getCollection[msg].name}}</h1>
  <p><img :src="store.getters.getCollection[msg].sprite"></p>
  <p><button @click="collect">Test</button></p>
  <p>
      <ul>
          <li>Taille du pokémon : {{store.getters.getCollection[msg].heigth}}</li>
          <li>Poids du pokémon : {{store.getters.getCollection[msg].weight}}</li>
          <li v-for="item in store.getters.getCollection.types" :key="item.type">{{item.type}}</li>
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
        console.log(this.store.getters.getCollection[this.msg].sprite)
    }
  }
});
</script>

<style scoped>
</style>