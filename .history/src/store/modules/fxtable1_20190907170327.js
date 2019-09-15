import { getField, updateField } from 'vuex-map-fields';
export default {
    state: {
        form:{
            name: "",
            sex: "",
            age: "",
            height: "",
            weight: "",
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
        // form(state, newstate){  // 改变收缩状态
        //     state.form.name = newstate.name;
        //     state.form.sex = newstate.sex;
        //     state.form.age = newstate.name;
        //     state.form.height = newstate.height;
        //     state.form.weight = newstate.weight;
        //     state.form.raceAndnationality = newstate.raceAndnationality;
        //     state.form.character = newstate.character;
        //     state.form.virtue_id = newstate.virtue_id;
        //     state.form.virtue_name = newstate.virtue_name;
        //     state.form.gene = newstate.gene;
        //     state.form.delicate = newstate.delicate;
        //     state.form.xp = newstate.xp;
        //     state.form.describe = newstate.describe;
        // }
    },
    actions: {

    }
}