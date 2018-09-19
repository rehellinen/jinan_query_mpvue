import {config} from './config'

let {iconType, orderType, color} = config

// 对“对象数组”进行深拷贝
function copyObjArr (arr) {
  return [].concat(JSON.parse(JSON.stringify(arr)))
}

/**
 * 封装微信Toast
 * @param title 标题文字
 * @param icon 图片类型
 */
function toast (title, icon = iconType.SUCCESS) {
  return new Promise(resolve => {
    wx.showToast({
      title,
      image: icon,
      success: (res) => {
       resolve(res)
      }
    })
  })
}

/**
 * 封装微信Modal
 * @param title 标题文字
 * @param content 内容
 * @param showCancel 是否展示取消按钮
 */
function modal (title = '', content = '', showCancel = true) {
  return new Promise(resolve => {
    wx.showModal({
      title,
      content,
      showCancel,
      confirmColor: color.THEME,
      success (res) {
        resolve(res)
      }
    })
  })
}

/**
 * 封装微信分享函数
 * @param title 标题
 * @param path 页面路径
 */
function share (title, path) {
  return {
    title,
    path,
    success: (res) => {
      toast('分享成功')
    },
    fail: (res) => {
      toast('分享失败', iconType.FAIL)
    }
  }
}

/**
 * 调整数组中的某一项前进或后退一个位置
 * @param index 数组中的索引
 * @param arr 数组
 * @param type UP代表前进，DOWN代表后退
 * @return {*}
 */
function order (index, arr, type) {
  let upValue = arr[index]
  if (index > arr.length - 1 || index < 0) {
    return
  }

  if (type === orderType.UP) {
    if (index === 0) {
      return
    }
    arr.splice(index, 1)
    arr.splice(index - 1, 0, upValue)
  } else {
    if (index  > arr.length - 2) {
      return
    }
    arr.splice(index, 1)
    arr.splice(index + 1, 0, upValue)
  }
}

export {copyObjArr, toast, modal, share}
