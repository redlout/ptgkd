import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);
import collapse from './modules/collapse.js'
const store = new vuex.Store({
    modules: {
        collapseState: collapse,
        // menu: mymenu 
        // 其他
    }
})

export default store