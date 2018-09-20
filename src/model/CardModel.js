/**
 *  CardModel.js
 *  Create By rehellinen
 *  Create On 2018/9/17 20:28
 */
import {config} from '../utils/config'

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
    if (card.length !== 0) {
      return
    }

    let data = CardModel.initialData()

    wx.setStorageSync(this._storageKey, data)
  }

  static initialData () {
    let data = []
    for (let key in config.cardNames) {
      let newCards = {name: config.cardNames[key], isShow: true}
      data.push(newCards)
    }
    return data
  }
}
