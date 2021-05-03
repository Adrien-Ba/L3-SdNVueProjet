<template>
      <main role="main" class="container">
        <div class="jumbotron">
            <h1>{{store.getters.getCollection[msg].name}}</h1>
            <p><img :src="store.getters.getCollection[msg].sprite"></p>
            <!--<p><button @click="collect">Test</button></p>-->
            <p class="lead">
                    Id du pokémon : {{store.getters.getCollection[msg].id}}<br/>
                    Taille du pokémon : {{store.getters.getCollection[msg].height}}0 cm<br/>
                    Poids du pokémon : {{store.getters.getCollection[msg].weight}}0 g<br/>
                    <!--<li v-for="item in store.getters.getCollection.types" :key="item.type">{{item.type}}</li>-->
                    Genre du pokémon : {{store.getters.getCollection[msg].genus}}<br/>
                    Génération du pokémon : {{store.getters.getCollection[msg].generation}}<br/>
                    Habitat du pokémon : {{store.getters.getCollection[msg].habitat}}<br/>
            </p>
            <button type="button" class="btn btn-secondary"><router-link to="/accueil">Aller à l'accueil   </router-link></button>
        </div>
    </main>
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