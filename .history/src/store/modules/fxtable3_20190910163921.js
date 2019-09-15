export default {
  state: {
    tableData: [{
        species: "生理",
        name: "运动",
        base: 0,
        additional: 0,
        professional: [{value: "反射"}, {value: "平衡"}, {value: "攀爬"},{value: "投掷武器攻击"}, {value: "跳跃"}, {value: "游泳"}],
        data: []
      },
      {
        name: "射击",
        base: 0,
        additional: 0,
        professional: ["弓", "弩", "手枪", "散弹枪", "狙击枪"],
        data: []
      },
      {
        name: "武技",
        base: 0,
        additional: 0,
        professional: ["拳", "脚", "剑", "刀", "棍棒", "斧头", "连枷", "流星锤"],
        data: []
      },
      {
        name: "求生",
        base: 0,
        additional: 0,
        professional: ["急救", "长线治疗", "诊疗", "求生", "强韧", "追踪", "动物沟通"],
        data: []
      },
      {
        species: "学识",
        name: "智力",
        base: 0,
        additional: 0,
        professional: ["研究事物的来源和效果", "解读"],
        data: []
      },
      {
        name: "器用",
        base: 0,
        additional: 0,
        professional: ["操作电脑", "操纵载具", "拆除", ],
        data: []
      },
      {
        name: "手艺",
        base: 0,
        additional: 0,
        professional: ["制造/修复物品", "伪造"],
        data: []
      },
      {
        name: "专注",
        base: 0,
        additional: 0,
        professional: ["冷静", "意志", "回忆"],
        data: []
      },
      {
        species: "互动",
        name: "洞察",
        base: 0,
        additional: 0,
        professional: ["搜索", "侦查", "察言观色", "收集情报"],
        data: []
      },
      {
        name: "隐秘",
        base: 0,
        additional: 0,
        professional: ["扒窃", "潜藏", "伪装"],
        data: []
      },
      {
        name: "表达",
        base: 0,
        additional: 0,
        professional: ["演讲", "绘画", "舞蹈", "钢琴", "吟诗", "作曲"],
        data: []
      },
      {
        name: "社交",
        base: 0,
        additional: 0,
        professional: ["威吓", "说服", "交际", "唬骗"],
        data: []
      }
    ],
    total: 6,
    index:0

  },

  mutations: {
    setApple(state, payload) {
      state.tableData = payload
    }
  },
  actions: {

  }
}
