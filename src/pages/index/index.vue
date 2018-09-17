<template lang="pug">
div.container
  // 顶部饭卡余额
  div.top-info
    img(src="__IMAGE__/theme/top_image.jpg")
    div.card-info
      p.thin 饭卡余额
      p.bold 208
      p.thin RMB
  // 四项icon
  div.card.four-icon
    div
      img(src="__IMAGE__/icon/english.png")
      p 四六级查询
    div
      img(src="__IMAGE__/icon/score.png")
      p 成绩查询
    div
      img(src="__IMAGE__/icon/car.png")
      p 校车咨询
    div
      img(src="__IMAGE__/icon/profile.png")
      p 个人资料
  // 卡片
  div.card-container
    electricity
    class
</template>

<script>
import Electricity from 'components/electricity'
import Class from 'components/class'

export default {
  components: {
    Electricity,
    Class
  }
}
</script>

<style scoped lang="sass">
  @import "~sass/base"
  .top-info
    height: 320rpx
    width: 750rpx
    img
      height: 100%
      width: 100%

  .card-info
    color: $nav-color
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    position: absolute
    top: 50rpx
    left: 270rpx
    width: 210rpx
    height: 210rpx
    padding-top: 10rpx
    .thin
      font-size: $smaller-font-size
    .bold
      font-size: 32px
      margin: 10rpx 0
  .four-icon
    height: 180rpx
    padding-top: 10rpx
    display: flex
    align-items: center
    justify-content: space-around
    div
      width: 150rpx
      display: flex
      flex-direction: column
      align-items: center
    p
      font-size: $smaller-font-size
      margin-top: 15rpx
    img
      width: 110rpx
      height: 110rpx
  .card-container
</style>
