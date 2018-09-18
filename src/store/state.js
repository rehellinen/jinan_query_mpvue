/**
 *  state.js
 *  Create By rehellinen
 *  Create On 2018/8/15 15:44
 */
import {CardModel} from '../model/CardModel'

let Cart = new CardModel()

const state = {
  card: Cart.getStorage()
}

export {state}
