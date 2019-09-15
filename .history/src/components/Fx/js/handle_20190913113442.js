import Vue from 'vue'
import Vuex from 'vuex'
import store from '../../../store/index.js';
Vue.use(Vuex)

export default {
  handleSpeed() {
    //力量+敏捷+体积+敏捷附加×5
    store.state.fx4.speed =
      store.state.fx2.tableData[0].base +
      store.state.fx2.tableData[1].base +
      store.state.fx1.form.volume +
      store.state.fx2.tableData[1].additional * 5;
  },
  handleStrike() {
    //先攻 （敏捷+沉着+沉着附加×4）= 18
    store.state.fx4.strike =
      store.state.fx2.tableData[1].base +
      store.state.fx2.tableData[8].base +
      store.state.fx2.tableData[8].additional * 4;
  },
  handleDefense() {
    //防御 （敏捷与感知中较低者）=  1 +较高者的附加成功
    if (store.state.fx2.tableData[1].base > store.state.fx2.tableData[4].base) {
      store.state.fx4.defense =
        store.state.fx2.tableData[4].base + store.state.fx2.tableData[1].additional;
    } else {
      store.state.fx4.defense =
        store.state.fx2.tableData[1].base + store.state.fx2.tableData[4].additional;
    }
  },
  handleLife() {
    // 生命值 （耐力+体积+耐力附加×2）=6
    store.state.fx4.life =
      store.state.fx2.tableData[2].base +
      store.state.fx1.form.volume +
      store.state.fx2.tableData[2].additional * 2;
  },
  handleWillpower() {
    // 意志力池 （决心+沉着+决心附加×2）= 9
    store.state.fx4.willpower =
      store.state.fx2.tableData[5].base +
      store.state.fx2.tableData[8].base +
      store.state.fx2.tableData[5].additional * 2;
  },
  handleWill() {
    // 意志 （决心+专注+意志）=5
    for (var i = 0; i < store.state.fx3.tableData[7].data.length; i++) {
      if (store.state.fx3.tableData[7].data[i].professional == "意志") {
        store.state.fx4.will =
          store.state.fx2.tableData[5].base +
          store.state.fx3.tableData[7].base +
          store.state.fx3.tableData[7].data[i].level;
      } else {
        store.state.fx4.will =
          store.state.fx2.tableData[5].base + store.state.fx3.tableData[7].base;
      }
    }
  },
  handleReflection() {
    // 反射 （敏捷+运动+反射）= 12
    for (var i = 0; i < store.state.fx3.tableData[0].data.length; i++) {
      if (store.state.fx3.tableData[0].data[i].professional == "反射") {
        store.state.fx4.reflection =
          store.state.fx2.tableData[1].base +
          store.state.fx3.tableData[0].base +
          store.state.fx3.tableData[0].data[i].level;
      } else {
        store.state.fx4.reflection =
          store.state.fx2.tableData[1].base + store.state.fx3.tableData[0].base;
      }
    }
  },
  handleStrong() {
    // 强韧 （耐力+生存+强韧）= 2
    for (var i = 0; i < store.state.fx3.tableData[3].data.length; i++) {
      if (store.state.fx3.tableData[3].data[i].professional == "强韧") {
        store.state.fx4.investigation =
          store.state.fx2.tableData[2].base +
          store.state.fx3.tableData[3].base +
          store.state.fx3.tableData[3].data[i].level;
      } else {
        store.state.fx4.investigation =
          store.state.fx2.tableData[2].base + store.state.fx3.tableData[3].base;
      }
    }
  },
  handleInvestigation() {
    // 侦查 （感知+洞察+侦查）= 2
    if(store.state.fx3.tableData[8].data.length == 0){
      console.log("我进来了");
      store.state.fx4.investigation =
      store.state.fx2.tableData[4].base + store.state.fx3.tableData[8].base;
      console.log(store.state.fx4.investigation);
      console.log(store.state.fx2.tableData[4].base);
      console.log(store.state.fx3.tableData[8].base);
    }
    
    console.log(store.state.fx3.tableData[8].data[i]);
    for (var i = 0; i < store.state.fx3.tableData[8].data.length; i++) {
      if (store.state.fx3.tableData[8].data[i].professional =="侦察") {
        store.state.fx4.investigation =
          store.state.fx2.tableData[4].base +
          store.state.fx3.tableData[8].base +
          store.state.fx3.tableData[8].data[i].level;
      } else {
        store.state.fx4.investigation =
          store.state.fx2.tableData[4].base + store.state.fx3.tableData[8].base;
      }
    }
  },
  handleSensitiverange() {
    // 敏感范围 （感知*20米+感知上的附加成功*20米）= 20
    store.state.fx4.sensitiverange =
      store.state.fx2.tableData[4].base * 20 + store.state.fx2.tableData[4].additional * 20;
  },
}
