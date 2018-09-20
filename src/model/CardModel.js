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

  saveStorage (data) {
    wx.setStorageSync(this._storageKey, data)
  }

  /**
   * 初始化缓存中卡片的数据
   */
  initialize () {
    let card = wx.getStorageSync(this._storageKey)
    if (card.electricity) {
      return
    }
    const data = [
      {
        name: '电 费 查 询',
        isShow: true
      },
      {
        name: '我 的 课 表',
        isShow: true
      },
      {
        name: '我 的 成 绩',
        isShow: true
      },
      {
        name: '我 的 考 试 表',
        isShow: true
      }
    ]
    wx.setStorageSync(this._storageKey, data)
  }
}
