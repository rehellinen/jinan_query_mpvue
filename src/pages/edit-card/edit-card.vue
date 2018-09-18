<template lang="pug">
div.container
  div.single.card
    img.select(src="__IMAGE__/icon/selected.png")
    p 电费查询
    div
      img(src="__IMAGE__/icon/arrow@up.png")
      img.down(src="__IMAGE__/icon/arrow@up.png")
  div.single.card
    img.select(src="__IMAGE__/icon/noSelected.png")
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

  .single
    display: flex
    height: 100rpx
    align-items: center
    img
      width: 40rpx
      height: 40rpx
    .select
      margin-left: 20rpx
    p
      font-size: $normal-font-size
      margin-left: 40rpx
      color: $pink
    div
      display: flex
      justify-content: flex-end
      flex: 1
      .down
        transform: rotate(180deg)
        margin: 0 20rpx
  .de
</style>
