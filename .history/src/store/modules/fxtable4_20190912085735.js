export default {
  state: {
    speed: 0, //速度
    strike: 0, //先攻
    defense: 0, //防御
    life: 0,//生命值
    willpower: 0, //意志力池
    will: 0, //意志
    reflection: 0, //反射
    strong: 0, //强韧
    investigation: 0, //侦察
    sensitiverange: 0 //敏感范围
  },

  mutations: {
    setDerivative(state, payload) {
        state.tableData = payload
    },
  },
  actions: {

  }
}
