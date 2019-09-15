import { getField, updateField } from 'vuex-map-fields';
const state = {
    // 初始化表单
    _categoryForm: {}
 }
 
 const getters = {
   //类别表单
   categoryForm: state => state._categoryForm
 }
 
 const actions = {
  
   /**
    * 新增类别
    */
   addCategory(context) {
     var formData = context.getters.categoryForm
     //Web API 调用
     dictServer.addCategory(formData, function (body) {
       //成功回调函数
       context.commit("DICT_ADDED_CATEGORY", true, body)
     }, function (body) {
       //失败回调函数
       context.commit("DICT_ADDED_CATEGORY", false, body)
     });
   }
 }
 
 const mutations = {
    //新增类别后
   [types.DICT_ADDED_CATEGORY](state, isSuccess, body) {
     if (isSuccess) {
       //state._categoryForm = {}  //不起作用，必须使用下面的方法
       state._categoryForm = {
          sort:"",
          categoryCode: "",
          categoryName: "",
          status:false,
          remark:""
       }
       //其他操作
       } else {
          //操作不成功时操作
       }
   }
}

export default{
    state,
    getters,
    actions,
    mutations
}