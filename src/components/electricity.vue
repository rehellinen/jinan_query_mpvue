<template lang="pug">
  div.electricity-container.card
    img.background-img(src="__IMAGE__/theme/electricity.jpg")
    title(title="我的电量" img="__IMAGE__/icon/elec.png")
    div.detail
      div
        p.count 78
        p.comment 剩余电量
      div
        p.count 66
        p.comment 最近三天用电
    see-more
</template>

<script>
import SeeMore from '../base/see-more'
import Title from '../base/title'

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
    width: 100%
    padding: 20rpx 0
    div:first-child
      border-right: 1px solid $nav-color
    div
      width: 50%
      display: flex
      flex-direction: column
      align-items: center
      padding: 15rpx 0
    .count
      font-size: 38px
    .comment
      font-size: $small-font-size
      margin-top: 10rpx
</style>
