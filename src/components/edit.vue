<template lang="pug">
  div.container.card-container
    // 标题
    div.title-container
      p(@click="toIndex").cancel 取消
      p.title 我的卡片
      p.save 保存

    // 展示中的卡片
    div.show(v-if="selectedCards.length !== 0")
      div.small-title
        p 已添加
      div.single(v-for="(item, index) in selectedCards" :key="index")
        div.small-card
          img.select(src="__IMAGE__/icon/delete.png"
          @click="deleteCard(index)")
          p {{item.name}}
        div.img-container
          img(src="__IMAGE__/icon/arrow@up.png"
          @click="up(index)")
          img.down(src="__IMAGE__/icon/arrow@up.png"
          @click="down(index)")

    // 未展示的卡片
    div.no-show(v-if="noSelectedCards.length !== 0")
      div.small-title
        p 待添加
      div.single(v-for="(item, index) in noSelectedCards" :key="index")
        div.small-card
          p {{item.name}}
          img(src="__IMAGE__/icon/add@card.png"
          @click="addCard(index)")
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import {toast} from '../utils/utils'

  export default {
    methods: {
      toIndex () {
        this.$emit('toIndex')
      },
      up (index) {
        if (index === 0) {
          toast('无法上升', this.$config.iconType.FAIL)
          return
        }
        this.upCard(index)
        toast('上升成功', this.$config.iconType.SUCCESS)
      },
      down (index) {
        if (index === this.selectedCards.length - 1) {
          toast('无法下降', this.$config.iconType.FAIL)
          return
        }
        this.downCard(index)
        toast('下降成功', this.$config.iconType.SUCCESS)
      },
      ...mapActions([
        'upCard',
        'downCard',
        'deleteCard',
        'addCard'
      ])
    },
    computed: {
      ...mapGetters([
        'selectedCards',
        'noSelectedCards'
      ])
    }
  }
</script>

<style scoped lang="sass">
  @import "~sass/base"
  .card-container
    background-color: #ececec
  .title-container
    height: 70rpx
    background-color: white
    display: flex
    align-items: center
    position: fixed
    width: 750rpx
    .cancel
      flex-basis: 15%
      color: #9c9c9c
      font-size: $smaller-font-size
      display: flex
      justify-content: center
    .title
      flex: 1
      display: flex
      justify-content: center
      color: #1e1e1e
      font-size: $small-font-size
      font-weight: bold
    .save
      flex-basis: 15%
      color: #ec647c
      font-size: $smaller-font-size
      display: flex
      justify-content: center
  .small-title
    margin-top: 15rpx
    margin-bottom: 5rpx
    text-align: center
    color: #848484
    font-size: $smaller-font-size
  .show
    margin-top: 70rpx
    .single
      display: flex
      height: 70rpx
      align-items: center
      margin-top: 10rpx
      .small-card
        width: 620rpx
        margin-left: $card-margin
        border-radius: 8px
        margin-top: 10rpx
        background-color: white
        overflow: hidden
        display: flex
        height: 100%
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
          width: 37rpx
          height: 37rpx
          margin-left: 13rpx
        .down
          transform: rotate(180deg)
  .no-show
    margin-top: 30rpx
    .single
      display: flex
      height: 70rpx
      align-items: center
      margin-top: 10rpx
      .small-card
        width: 710rpx
        margin-left: $card-margin
        border-radius: 8px
        margin-top: 10rpx
        background-color: white
        overflow: hidden
        display: flex
        height: 100%
        align-items: center
        justify-content: space-between
      p
        margin-left: 30rpx
        font-size: $small-font-size
        color: #474d5d
      img
        width: 40rpx
        height: 40rpx
        margin-right: 30rpx
  .no-more
    text-align: center
    font-size: $normal-font-size
    margin-top: 30rpx
    color: $grey
</style>
