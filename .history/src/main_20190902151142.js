// import '@/styles/index.scss'
// import 'normalize.css/normalize.css'
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './http/index'
import './icons'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(api);

// Vue.use(api)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
