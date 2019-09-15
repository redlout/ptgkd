import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

const store = new vuex.Store({
    modules: {
        app: AppStore,
        menu: mymenu 
        // 其他
    }
})

export default store