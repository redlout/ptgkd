export default {
  state: {
    tableData: [{
        species: "生理",
        name: "运动",
        base: 0,
        additional: 0,
        professional: [{value: "反射"}, {value: "平衡"}, {value: "攀爬"},{value: "投掷武器攻击"}, {value: "跳跃"}, {value: "游泳"}],

      },
      {
        name: "射击",
        base: 0,
        additional: 0,
        professional: [{value: "弓"}, {value: "弩"}, {value: "手枪"}, {value: "散弹枪"}, {value: "狙击枪"}],
        data: [],
        sel:null
      },
      {
        name: "武技",
        base: 0,
        additional: 0,
        professional: [{value: "拳"}, {value: "脚"}, {valuie: "剑"}, {value: "刀"}, {value: "棍棒"}, {value: "斧头"}, {value: "连枷"}, {value: "流星锤"}],
        data: [],
        sel:null
      },
      {
        name: "求生",
        base: 0,
        additional: 0,
        professional: [{value: "急救"} , {value: "长线治疗"}, {value: "诊疗"}, {value: "求生"}, {value:"强韧"}, {value: "追踪"}, {value:"动物沟通"}],
        data: [],
        sel:null
      },
      {
        species: "学识",
        name: "智力",
        base: 0,
        additional: 0,
        professional: [{value: "研究事物的来源和效果"}, {value: "解读"}],
        data: [],
        sel:null
      },
      {
        name: "器用",
        base: 0,
        additional: 0,
        professional: [{value: "操作电脑"}, {value: "操纵载具"}, {value: "拆除"}],
        data: [],
        sel:null
      },
      {
        name: "手艺",
        base: 0,
        additional: 0,
        professional: [{value: "制造/修复物品"}, {value: "伪造"}],
        data: [],
        sel:null
      },
      {
        name: "专注",
        base: 0,
        additional: 0,
        professional: [{value: "冷静"}, {value: "意志"}, {value: "回忆"}],
        data: [],
        sel:null
      },
      {
        species: "互动",
        name: "洞察",
        base: 0,
        additional: 0,
        professional: [{value: "搜索"}, {value: "侦查"}, {value: "察言观色"}, {value: "收集情报"}],
        data: [],
        sel:null
      },
      {
        name: "隐秘",
        base: 0,
        additional: 0,
        professional: [{value: "扒窃"}, {value: "潜藏"}, {value: "伪装"}],
        data: [],
        sel:null
      },
      {
        name: "表达",
        base: 0,
        additional: 0,
        professional: [{value: "演讲"}, {value: "绘画"}, {value: "舞蹈"}, {value: "钢琴"}, {value: "吟诗"}, {value: "作曲"}],
        data: [],
        sel:null
      },
      {
        name: "社交",
        base: 0,
        additional: 0,
        professional: [{value: "威吓"}, {value: "说服"}, {value: "交际"}, {value: "唬骗"}],
        data: [],
        sel:null
      }
    ],
    total: 6,
    index:0,
    
    professional_table:{
        sel:null,
        columns: [
            { id: "0", field: "professional", title: "专业", width: 120 },
            { id: "1", field: "level", title: "等级", width: 150 }
          ],
        pro:[
            [{value: "反射"}, {value: "平衡"}, {value: "攀爬"},{value: "投掷武器攻击"}, {value: "跳跃"}, {value: "游泳"}],
            [{value: "弓"}, {value: "弩"}, {value: "手枪"}, {value: "散弹枪"}, {value: "狙击枪"}],
            [{value: "拳"}, {value: "脚"}, {valuie: "剑"}, {value: "刀"}, {value: "棍棒"}, {value: "斧头"}, {value: "连枷"}, {value: "流星锤"}],
            [{value: "急救"} , {value: "长线治疗"}, {value: "诊疗"}, {value: "求生"}, {value:"强韧"}, {value: "追踪"}, {value:"动物沟通"}],
            [{value: "研究事物的来源和效果"}, {value: "解读"}],
            [{value: "操作电脑"}, {value: "操纵载具"}, {value: "拆除"}],
            [{value: "制造/修复物品"}, {value: "伪造"}],
            [{value: "冷静"}, {value: "意志"}, {value: "回忆"}],
            [{value: "搜索"}, {value: "侦查"}, {value: "察言观色"}, {value: "收集情报"}],
            [{value: "扒窃"}, {value: "潜藏"}, {value: "伪装"}],
            [{value: "演讲"}, {value: "绘画"}, {value: "舞蹈"}, {value: "钢琴"}, {value: "吟诗"}, {value: "作曲"}],
            [{value: "威吓"}, {value: "说服"}, {value: "交际"}, {value: "唬骗"}]
        ],
        data:[],
        index:0
    }

  },

  mutations: {
    setApple(state, payload) {
      state.tableData = payload
    }
  },
  actions: {

  }
}
