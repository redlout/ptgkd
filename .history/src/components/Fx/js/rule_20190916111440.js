import Vue from 'vue'
import Vuex from 'vuex'
import store from '../../../store/index.js';
Vue.use(Vuex)

export default {
  //还是得基于数值进行判定和计算 单纯的减1不是解决办法
  inputNumberRule(index, flag) {
    let add = 0;
    if (flag)
      add = 1; //增加事件
    else
      add = -1; //减少事件
    if (index <= 3) {
      //若是生理的点击事件
      if (store.state.fx3.physiological_max > 0) {
        //生理点还有剩余
        store.state.fx3.physiological_max -= add;
      } else if (store.state.fx3.free_max > 0) {
        //自由分配点还有剩余
        store.state.fx3.free_max -= add;
      }
    } else if (index > 3 && index <= 7) {
      //若是心智的点击事件
      if (store.state.fx3.mind_max_max > 0) {
        store.state.fx3.mind_max_max -= add;
      } else if (store.state.fx3.free_max > 0) {
        //自由分配点还有剩余
        store.state.fx3.free_max -= add;
      }
    } else {
      //若是互动的点击事件
      if (store.state.fx3.interactive_max > 0) {
        store.state.fx3.interactive_max -= add;
      } else if (store.state.fx3.free_max > 0) {
        //自由分配点还有剩余
        store.state.fx3.free_max -= add;
      }
    }
  }
}
