<template>
  <div>
    <p>

    <router-link to="/peuimporte">Aller à peuimporte</router-link>
    <router-link to="/helloworld">Aller à helloworld</router-link>
  </p>
    <router-view/>
  </div>
</template>



<script lang="ts">

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