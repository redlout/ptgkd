import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);
import collapse from './modules/collapse.js'
import fx1 from './modules/fxtable1.js'
const store = new vuex.Store({
    modules: {
        collapseState: collapse,
        fx1: fx1
        // menu: mymenu 
        // 其他
    }
})

export default store