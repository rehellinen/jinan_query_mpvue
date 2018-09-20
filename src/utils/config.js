const config = {
  // 配置1：URL基地址
  restUrl: 'http://localhost/jinan_query/public/api/v1/',
  // restUrl: 'https://20298479.rehellinen.cn/fleamarket/public/api/v2/',

  // 配置2：关于toast图标
  iconType: {
    SUCCESS: '__IMAGE__/icon/success@white.png',
    FAIL: '__IMAGE__/icon/fail@white.png'
  },

  // 配置3：关于颜色
  color: {
    WHITE: 'white',
    BACKGROUND_COLOR: '#f9f9f9',
    THEME: '#92a1be'
  },

  // 配置4：关于上升或下降
  orderType: {
    UP: 'UP',
    DOWN: 'DOWN'
  },

  // 配置5：关于卡片名称
  cardNames: {
    ELECTRICITY: '电 费 查 询',
    CLASS_TABLE: '我 的 课 表',
    SCORE: '我 的 成 绩',
    EXAM_TABLE: '我 的 考 试 表'
  }
}

export {config}
