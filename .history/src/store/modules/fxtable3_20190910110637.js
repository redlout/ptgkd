export default {
  state: {
    tableData: [{
        species: "生理",
        name: "运动",
        base: "",
        additional: "",
        professional_Athletics: ["反射", "平衡", "攀爬", "投掷武器攻击", "跳跃", "游泳"],
        sel: [{}]
      },
      {
        name: "射击",
        base: "",
        additional: "",
        professional_Shooting: ["弓", "弩", "手枪", "散弹枪", "狙击枪"],
        sel: [{}]
      },
      {
        name: "武技",
        base: "",
        additional: "",
        professional_Martial: ["拳", "脚", "剑", "刀", "棍棒", "斧头", "连枷", "流星锤"],
        sel: [{}]
      },
      {
        name: "求生",
        base: "",
        additional: "",
        professional_Survival: ["急救", "长线治疗", "诊疗", "求生", "强韧", "追踪", "动物沟通"],
        sel: [{}]
      },
      {
        species: "学识",
        name: "智力",
        base: "",
        additional: "",
        professional_Academics: ["研究事物的来源和效果", "解读"],
        sel: [{}]
      },
      {
        name: "器用",
        base: "",
        additional: "",
        professional_Application: ["操作电脑", "操纵载具", "拆除", ],
        sel: [{}]
      },
      {
        name: "手艺",
        base: "",
        additional: "",
        professional_Crafts: ["制造/修复物品", "伪造"],
        professional: [{}]
      },
      {
        name: "专注",
        base: "",
        additional: "",
        professional_Concentration: ["冷静", "意志", "回忆"],
        sel: [{}]
      },
      {
        species: "互动",
        name: "洞察",
        base: "",
        additional: "",
        professional_Insight: ["搜索", "侦查", "察言观色", "收集情报"],
        sel: [{}]
      },
      {
        name: "隐秘",
        base: "",
        additional: "",
        professional_Stealth: ["扒窃", "潜藏", "伪装"],
        sel: [{}]
      },
      {
        name: "表达",
        base: "",
        additional: "",
        professional_Expression: ["演讲", "绘画", "舞蹈", "钢琴", "吟诗", "作曲"],
        sel: [{}]
      },
      {
        name: "社交",
        base: "",
        additional: "",
        professional_Communication: ["威吓", "说服", "交际", "唬骗"],
        sel: [{}]
      }
    ],
    total: 6
    index:0

  },

  mutations: {
    setTable(state, payload) {
      state.tableData = payload
    }
  },
  actions: {

  }
}
