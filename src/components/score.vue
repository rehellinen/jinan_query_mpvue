<template lang="pug">
  div.electricity-container.card
    img.background-img(src="__IMAGE__/theme/score.jpg")
    title(title="我的成绩" img="__IMAGE__/icon/score@card.png")
    div.detail
      div
        p.comment GPA
        p.value 4.2
      div
        p.comment 最近一门
        p.value 马克思主义原理 99
    see-more(text="我 的 成 绩 单")
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
    .value
      font-size: $small-font-size
      margin-top: 30rpx
    .comment
      font-size: $normal-font-size
      font-weight: bold
      margin-top: 10rpx
</style>
