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
      div(v-for="(item, index) in selectedCards" :key="index")
        div(v-if="cardNames.ELECTRICITY === item.name")
          electricity
        div(v-if="cardNames.SCORE === item.name")
          score
        div(v-if="cardNames.CLASS_TABLE === item.name")
          class
    div.add-container(@click="toEdit")
      div.icon-container
        img(src="__IMAGE__/icon/add.png")
      p 编辑卡片
</template>

<script>
import Electricity from 'components/electricity'
import Class from 'components/class'
import Score from 'components/score'
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      cardNames: this.$config.cardNames
    }
  },
  methods: {
    toEdit () {
      wx.navigateTo({
        url: '../edit/main'
      })
    }
  },
  computed: {
    ...mapGetters([
      'selectedCards'
    ])
  },
  components: {
    Electricity,
    Class,
    Score
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
  .add-container
    width: 100%
    display: flex
    flex-direction: column
    align-items: center
    margin-top: 20rpx
    margin-bottom: 20rpx
    .icon-container
      display: flex
      justify-content: center
      align-items: center
      width: 120rpx
      height: 120rpx
      background-color: white
      border-radius: 50%
      img
        width: 35rpx
        height: 35rpx
    p
      margin-top: 20rpx
      font-size: $small-font-size
</style>
