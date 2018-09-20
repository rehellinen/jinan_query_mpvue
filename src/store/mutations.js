/**
 *  mutations.js
 *  Create By rehellinen
 *  Create On 2018/8/15 15:44
 */
import {types} from './mutation-types'
import {CardModel} from '../model/CardModel'

let Cart = new CardModel()

export const mutations = {
  [types.SAVE_TO_STORE] (state, data) {
    state.card = data
  },
  [types.SAVE_TO_STORAGE] (state) {
    console.log(state.card)
    Cart.saveStorage(state.card)
  }
}
