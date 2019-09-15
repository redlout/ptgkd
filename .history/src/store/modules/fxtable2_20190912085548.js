export default {
  state: {
    tableData: [{
        species: "生理",
        name: "力量",
        base: 1,
        inner: 0,
        total: 1,
        additional: 0
      },
      {
        name: "敏捷",
        base: 1,
        inner: 0,
        total: 1,
        additional: 0
      },
      {
        name: "耐力",
        base: 1,
        inner: 0,
        total: 1,
        additional: 0
      },
      {
        species: "心智",
        name: "智力",
        base: 1,
        inner: 0,
        total: 1,
        additional: 0
      },
      {
        name: "感知",
        base: 1,
        inner: 0,
        total: 1,
        additional: 0
      },
      {
        name: "决心",
        base: 1,
        inner: 0,
        total: 1,
        additional: 0
      },
      {
        species: "互动",
        name: "风度",
        base: 1,
        inner: 0,
        total: 1,
        additional: 0
      },
      {
        name: "操控",
        base: 1,
        inner: 0,
        total: 1,
        additional: 0
      },
      {
        name: "沉着",
        base: 1,
        inner: 0,
        total: 1,
        additional: 0
      }
    ]

  },

  mutations: {
    setTable(state, payload) {
      state.tableData = payload
    },

  },
  actions: {

  }
}
