/**
 *  getters.js
 *  Create By rehellinen
 *  Create On 2018/8/15 15:43
 */

function extract (data, flag = true) {
  let newData = []
  for (let item of data) {
    if (item.isShow === flag) {
      newData.push(item)
    }
  }
  return newData
}

const getters = {
  selectedCards (state) {
    return extract(state.card)
  },

  noSelectedCards (state) {
    return extract(state.card, false)
  }
}

export {getters}
