import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);
import collapse from './modules/collapse.js'
import fx1 from './modules/fxtable1.js'
import fx2 from './modules/fxtable2.js'
import fx3 from './modules/fxtable3.js'
import fx4 from './modules/fxtable4.js'
const store = new vuex.Store({
    strict: false,
    modules: {
        collapseState: collapse,
        fx1: fx1,
        fx2: fx2,
        fx3: fx3,
        fx4: fx4
        // menu: mymenu 
        // 其他
    }
})

export default store