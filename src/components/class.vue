<template lang="pug">
  div.electricity-container.card
    img.background-img(src="__IMAGE__/theme/class.jpg")
    title(title="最近的课" img="__IMAGE__/icon/class.png")
    div.detail
      p.class 中国近代史
      p.place 珠海校区实验楼C105
    see-more(text="查 看 完 整 课 表")
</template>

<script>
  import SeeMore from './see-more'
  import Title from './title'

  export default {
    components: {
      SeeMore,
      Title
    }
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~sass/base"

  .electricity-container
    display: flex
    flex-direction: column
    align-items: center
    position: relative
    .background-img
      width: 100%
      height: 100%
      position: absolute
      top: 0
      z-index: 0
  .detail
    z-index: 10
    display: flex
    flex-direction: column
    align-items: center
    width: 100%
    padding: 10rpx 0 15rpx 0
    .class
      font-size: 32px
    .place
      font-size: 18px
      margin-top: 10rpx
</style>
