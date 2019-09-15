import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);
import collapse from './modules/collapse.js'
import fx1 from './modules/fxtable1.js'
import fx2 from './modules/fxtable2.js'
const store = new vuex.Store({
    strict: false,
    modules: {
        collapseState: collapse,
        fx1: fx1,
        fx2: fx2
        // menu: mymenu 
        // 其他
    }
})

export default store