<template lang="pug">
  div.more-container
    div
      p {{text}}
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '查 看 更 多'
    }
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~sass/base"

  .more-container
    z-index: 10
    width: 100%
    height: 75rpx
    display: flex
    justify-content: center
    align-items: center
    div
      border: 1px solid $nav-color
      border-radius: 20px
      width: 200rpx
      color: $nav-color
      font-size: $smaller-font-size
      display: flex
      align-items: center
      justify-content: center
      height: 35rpx
</style>
