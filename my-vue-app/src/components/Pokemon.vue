<template>
  <div>
  <p>Page Pokemon</p>

  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
//import { useStore } from 'vuex'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    
  },
  computed: {

  },
})
</script>
