export default {
    state: {
        professional_Athletics :["反射","平衡","攀爬","投掷武器攻击","跳跃","游泳"],
        professional_Martial :["拳","脚","剑","刀","棍棒","斧头","连枷","流星锤"],
        professional_Shooting :["弓","弩","手枪","散弹枪","狙击枪"],
        professional_Survival :["急救","长线治疗","诊疗","求生","强韧","追踪","动物沟通"],
        professional_Academics :["研究事物的来源和效果","解读"],
        professional_Application :["操作电脑","操纵载具","拆除",],
        professional_Crafts :["制造/修复物品","伪造"],
        professional_Concentration :["冷静","意志","回忆"],
        professional_Stealth:["扒窃","潜藏","伪装"],
        professional_Insight:["搜索","侦查","察言观色","收集情报"],
        professional_Expression:["演讲","绘画","舞蹈","钢琴","吟诗","作曲"],
        professional_Communication:["威吓","说服","交际","唬骗"],
      tableData: [{
          species: "生理",
          name: "运动",
          base: "",
          additional: "",
          professional:[{}]
        },
        {
          name: "敏捷",
          base: "",
          additional: "",
          professional:[{}]
        },
        {
          name: "耐力",
          base: "",
          additional: "",
          professional:[{}]
        },
        {
          species: "心智",
          name: "智力",
          base: "",
          additional: "",
          professional:[{}]
        },
        {
          name: "感知",
          base: "",
          additional: "",
          professional:[{}]
        },
        {
          name: "决心",
          base: "",
          additional: "",
          professional:[{}]
        },
        {
          species: "互动",
          name: "风度",
          base: "",
          additional: "",
          professional:[{}]
        },
        {
          name: "操控",
          base: "",
          additional: "",
          professional:[{}]
        },
        {
          name: "沉着",
          base: "",
          additional: "",
          professional:[{}]
        }
      ]
  
    },
  
    mutations: {
      setTable(state, payload) {
        state.tableData = payload
      }
    },
    actions: {
  
    }
  }
  