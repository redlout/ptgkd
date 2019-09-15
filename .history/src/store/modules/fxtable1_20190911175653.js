export default {
    state: {
        form:{
            name: "",
            sex: "",
            age: "",
            height: "",
            weight: "",
            volume: "",
            raceAndnationality: "",
            character: "",
            looks: "",
            virtue_id: "",
            virtue_name: "",
            gene: "",
            delicate: "",
            xp: "",
            describe: ""
        }
    },
    
    mutations: {
        setForm (state, payload) {
            state.form = payload
          }
    },
    actions: {

    }
}