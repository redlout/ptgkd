export default {
  state: {
    tableData: [{
        species: "生理",
        name: "力量",
        base: "",
        inner: "",
        total: "",
        additional: ""
      },
      {
        name: "敏捷",
        base: "",
        inner: "",
        total: "",
        additional: ""
      },
      {
        name: "耐力",
        base: "",
        inner: "",
        total: "",
        additional: ""
      },
      {
        species: "心智",
        name: "智力",
        base: "",
        inner: "",
        total: "",
        additional: ""
      },
      {
        name: "感知",
        base: "",
        inner: "",
        total: "",
        additional: ""
      },
      {
        name: "决心",
        base: "",
        inner: "",
        total: "",
        additional: ""
      },
      {
        species: "互动",
        name: "风度",
        base: "",
        inner: "",
        total: "",
        additional: ""
      },
      {
        name: "操控",
        base: "",
        inner: "",
        total: "",
        additional: ""
      },
      {
        name: "沉着",
        base: "",
        inner: "",
        total: "",
        additional: ""
      }
    ]

  },

  mutations: {
    setForm2(state, payload) {
      state.tableData = payload
    }
  },
  actions: {

  }
}
