/**
 *  CardModel.js
 *  Create By rehellinen
 *  Create On 2018/9/17 20:28
 */
export class CardModel {
  constructor () {
    this._storageKey = 'CARD'
  }

  /**
   * 获取缓存中的数据
   */
  getStorage () {
    return wx.getStorageSync(this._storageKey)
  }

  /**
   * 初始化缓存中卡片的数据
   */
  initialize () {
    let card = wx.getStorageSync(this._storageKey)
    if (card.electricity) {
      return
    }
    const data = {
      electricity: {
        order: 1,
        isShow: true
      },
      class: {
        order: 1,
        isShow: true
      },
      score: {
        order: 1,
        isShow: true
      }
    }
    wx.setStorageSync(this._storageKey, data)
  }
}
