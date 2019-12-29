import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import jquery from 'jquery'

import 'bootstrap'
import './assets/css/bootstrap.css'

import Axios from 'axios'
Vue.prototype.$axios = Axios

Vue.config.productionTip = false
Axios.defaults.baseURL = '/api'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
