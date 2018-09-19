/**
 *  actions.js
 *  Create By rehellinen
 *  Create On 2018/8/15 15:43
 */
import {types} from './mutation-types'
import {copyObjArr, order} from '../utils/utils'
import {config} from '../utils/config'

const actions = {
  upCard ({commit, state}, index) {
    let newData = copyObjArr(state.card)
    order(index, newData)
    commit(types.SAVE_TO_STORE, newData)
  },
  downCard ({commit, state}, index) {
    let newData = copyObjArr(state.card)
    order(index, newData, config.orderType.DOWN)
    commit(types.SAVE_TO_STORE, newData)
  },
  deleteCard ({commit, state}, index) {
    let newData = copyObjArr(state.card)
    newData[index].isShow = false
    console.log(index, newData[index].isShow)
    commit(types.SAVE_TO_STORE, newData)
  }
}

export {actions}
