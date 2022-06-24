import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/iview.js'

import './assets/css/global.css'

import axios from 'axios'

Vue.prototype.$http = axios
//配置请求的根路径
axios.defaults.baseURL = 'http://api.tianapi.com/ncov/'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
