<template lang="pug">
  div.title
    img(:src="img")
    p {{title}}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '信息'
    },
    img: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~sass/base"
  .title
    z-index: 10
    height: 60rpx
    display: flex
    align-items: center
    p
      font-size: $normal-font-size
    img
      width: 40rpx
      height: 40rpx
      margin-right: 20rpx
</style>
