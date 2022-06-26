import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/iview.js'

import './assets/css/global.css'

import axios from 'axios'

Vue.prototype.$http = axios
//配置请求的根路径
axios.defaults.baseURL = 'http://api.tianapi.com/ncov/'

//配置请求拦截器
axios.interceptors.request.use(config => {
  console.log(config)
 //模拟为请求添加令牌信息
 config.headers.Authorization = window.sessionStorage.getItem('token')

 console.log(config)

  return config
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
