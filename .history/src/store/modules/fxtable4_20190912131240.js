export default {
  state: {
    speed: 7, //速度
    strike: 2, //先攻
    defense: 1, //防御
    life: 6,//生命值
    willpower: 2, //意志力池
    will: 1, //意志
    reflection: 1, //反射
    strong: 1, //强韧
    investigation: 1, //侦察
    sensitiverange: 20 //敏感范围
  },
  getters:{
      getspeed(state){
          return state.speed;
      }
  },
  mutations: {
    setDerivative(state, payload) {
        state = payload
    },
    setSpeed(state){
        state.speed = state.speed
    }
  },
  actions: {

  }
}
