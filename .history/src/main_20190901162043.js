import '@/styles/index.scss'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css/normalize.css'
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
