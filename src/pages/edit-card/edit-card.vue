<template lang="pug">
div.container
  p 123
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'cardState'
    ])
  }
}
</script>

<style scoped lang="sass">
  @import "~sass/base"
</style>
