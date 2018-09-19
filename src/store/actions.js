/**
 *  actions.js
 *  Create By rehellinen
 *  Create On 2018/8/15 15:43
 */
import {types} from './mutation-types'
import {copyObjArr, order} from '../utils/utils'
import {config} from '../utils/config'

function findIndex (name, state) {
  let index = -1
  state.card.forEach((item, arrIndex) => {
    if (item.name === name) {
      index = arrIndex
    }
  })
  return index
}

const actions = {
  upCard ({commit, state, getters}, index) {
    let newData = copyObjArr(state.card)
    let i = findIndex(getters.selectedCards[index].name, state)
    order(i, newData)
    commit(types.SAVE_TO_STORE, newData)
  },
  downCard ({commit, state, getters}, index) {
    let newData = copyObjArr(state.card)
    let i = findIndex(getters.selectedCards[index].name, state)
    order(i, newData, config.orderType.DOWN)
    commit(types.SAVE_TO_STORE, newData)
  },
  deleteCard ({commit, state, getters}, index) {
    let newData = copyObjArr(state.card)
    let i = findIndex(getters.selectedCards[index].name, state)
    newData[i].isShow = false
    commit(types.SAVE_TO_STORE, newData)
  },
  addCard ({commit, state, getters}, index) {
    let newData = copyObjArr(state.card)
    let i = findIndex(getters.noSelectedCards[index].name, state)
    newData[i].isShow = true
    commit(types.SAVE_TO_STORE, newData)
  }
}

export {actions}
