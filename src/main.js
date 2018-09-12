import Vue from 'vue'
import App from './app'
import conf from './utils/config'

Vue.config.productionTip = false
Vue.prototype.$config = conf

App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    window: {
      'navigationBarTitleText': '校园易乎',
      'navigationBarTextStyle': '#FFFFFF',
      'navigationBarBackgroundColor': '#a9936e',
      'backgroundColor': '#f9f9f9',
      'backgroundTextStyle': 'dark',
      'enablePullDownRefresh': false
    },
    pages: [
      '^pages/index/main'
    ]
  }
}
