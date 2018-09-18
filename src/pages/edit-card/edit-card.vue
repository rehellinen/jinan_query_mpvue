<template lang="pug">
div.container.card-container
  div.single
    div.small-card
      img.select(src="__IMAGE__/icon/delete.png")
      p 电 费 查 询
    div.img-container
      img(src="__IMAGE__/icon/arrow@up.png")
      img.down(src="__IMAGE__/icon/arrow@up.png")
  div.single.small-card
    img.select(src="__IMAGE__/icon/delete.png")
    p 课程表查询
    div
      img(src="__IMAGE__/icon/arrow@up.png")
      img.down(src="__IMAGE__/icon/arrow@up.png")
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
  .card-container
    background-color: #ececec

  .single
    display: flex
    height: 70rpx
    align-items: center
    .small-card
      width: 620rpx
      margin-left: $card-margin
      border-radius: 8px
      margin-top: 10rpx
      background-color: white
      overflow: hidden
      display: flex
      height: 80rpx
      align-items: center
    img
      width: 30rpx
      height: 30rpx
    .select
      margin-left: 30rpx
    p
      font-size: $small-font-size
      margin-left: 25rpx
      color: #474d5d
    .img-container
      height: 100%
      display: flex
      align-items: center
      flex: 1
      img
        width: 35rpx
        height: 35rpx
        margin-left: 15rpx
      .down
        transform: rotate(180deg)
  .de
</style>
