<template>
  <p>{{count}}</p>
  <button @click="description">Toggle</button>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const store = useStore() 
    return {store}
    
  },
  computed: {
    count() {return this.store.getters.getcount}
  },
  methods: {
    description() {
      this.$store.commit('increment')
    }
  }
  
})
</script>
