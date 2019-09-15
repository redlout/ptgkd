import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

import AppStore from './modules/AppStore.js';
import mymenu from './modules/menu'

const store = new vuex.Store({
    modules: {
        app: AppStore,
        menu: mymenu 
        // 其他
    }
})

export default store