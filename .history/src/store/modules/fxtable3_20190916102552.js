export default {
  state: {
    tableData: [{
        species: "生理",
        name: "运动",
        old_base:0,
        base: 0,
        additional: 0,
        professional: [{value: "反射"}, {value: "平衡"}, {value: "攀爬"},{value: "投掷武器攻击"}, {value: "跳跃"}, {value: "游泳"}],
        data: [],
        sel:null
      },
      {
        name: "射击",
        old_base:0,
        base: 0,
        additional: 0,
        professional: [{value: "弓"}, {value: "弩"}, {value: "手枪"}, {value: "散弹枪"}, {value: "狙击枪"}],
        data: [],
        sel:null
      },
      {
        name: "武技",
        old_base:0,
        base: 0,
        additional: 0,
        professional: [{value: "拳"}, {value: "脚"}, {valuie: "剑"}, {value: "刀"}, {value: "棍棒"}, {value: "斧头"}, {value: "连枷"}, {value: "流星锤"}],
        data: [],
        sel:null
      },
      {
        name: "求生",
        old_base:0,
        base: 0,
        additional: 0,
        professional: [{value: "急救"} , {value: "长线治疗"}, {value: "诊疗"}, {value: "求生"}, {value:"强韧"}, {value: "追踪"}, {value:"动物沟通"}],
        data: [],
        sel:null
      },
      {
        species: "心智",
        name: "学识",
        old_base:0,
        base: 0,
        additional: 0,
        professional: [{value: "研究事物的来源和效果"}, {value: "解读"}],
        data: [],
        sel:null
      },
      {
        name: "器用",
        old_base:0,
        base: 0,
        additional: 0,
        professional: [{value: "操作电脑"}, {value: "操纵载具"}, {value: "拆除"}],
        data: [],
        sel:null
      },
      {
        name: "手艺",
        old_base:0,
        base: 0,
        additional: 0,
        professional: [{value: "制造/修复物品"}, {value: "伪造"}],
        data: [],
        sel:null
      },
      {
        name: "专注",
        old_base:0,
        base: 0,
        additional: 0,
        professional: [{value: "冷静"}, {value: "意志"}, {value: "回忆"}],
        data: [],
        sel:null
      },
      {
        species: "互动",
        name: "洞察",
        old_base:0,
        base: 0,
        additional: 0,
        professional: [{value: "搜索"}, {value: "侦查"}, {value: "察言观色"}, {value: "收集情报"}],
        data: [],
        sel:null
      },
      {
        name: "隐秘",
        old_base:0,
        base: 0,
        additional: 0,
        professional: [{value: "扒窃"}, {value: "潜藏"}, {value: "伪装"}],
        data: [],
        sel:null
      },
      {
        name: "表达",
        old_base:0,
        base: 0,
        additional: 0,
        professional: [{value: "演讲"}, {value: "绘画"}, {value: "舞蹈"}, {value: "钢琴"}, {value: "吟诗"}, {value: "作曲"}],
        data: [],
        sel:null
      },
      {
        name: "社交",
        old_base:0,
        base: 0,
        additional: 0,
        professional: [{value: "威吓"}, {value: "说服"}, {value: "交际"}, {value: "唬骗"}],
        data: [],
        sel:null
      }
    ],
    physiological_max: 6, //生理可用点数
    mind_max_max: 5, //心智可用点数
    interactive_max: 4, //互动可用点数
    free_max: 3, //自由使用点数

    //专业点出来的，在这里放是为了方便衍生属性计算
    will: 0, //意志
    reflection: 0, //反射
    strong: 0, //强韧
    investigation: 0, //侦查
  },

  mutations: {
    setApple(state, payload) {
      state.tableData = payload
    }
  },
  actions: {

  }
}
