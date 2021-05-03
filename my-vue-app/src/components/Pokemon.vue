<template>
  <div>
  <p>Page Pokemon</p>
  {{msg}}
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
//import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const msg = 0;
    return {
      msg,
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
    this.msg =  this.$route.params.id
    }
  }
});
</script>

<style scoped>
</style>