// import '@/styles/index.scss'
// import 'normalize.css/normalize.css'
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './http/index'
import './icons'
import store from './store'
import qs from 'qs';  

import datajs from '@/components/Fx/js/handle.js'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(api);
Vue.use(datajs);
Vue.prototype.$qs = qs;

// Vue.use(api)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
