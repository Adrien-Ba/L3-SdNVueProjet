<template>
  <div>
    <p>

    <router-link to="/peuimporte2">Aller à peuimporte   </router-link>
    <router-link to="/helloworld">Aller à helloworld   </router-link>
    <router-link to="/accueil">Aller à l'accueil   </router-link>
    <router-link to="/pokemon">Aller à pokemon   </router-link>


  </p>
    <router-view/>
  </div>
</template>



<script lang="ts">


import {useStore} from 'vuex';


import { defineComponent } from 'vue'
import PeuImporte from './components/PeuImporte.vue'

export default defineComponent({
  name: 'App',
  components: {
    PeuImporte,
  }
})



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