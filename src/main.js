// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mockdata from './mock'
import axios from 'axios'

Vue.config.productionTip = false // axios http请求库

axios.defaults.baseURL = '' // 设置默认请求的url
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mockdata,
  components: { App },
  template: '<App/>'
})
