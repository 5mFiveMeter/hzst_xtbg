import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  hzst_token:"",
  user_info:""
}

//异步
const actions = {
  changeToken(ctx,value){
    localStorage.setItem("hzst_token",value);
    ctx.commit("changeToken",value);
  },
  changeInfo(ctx,value){
    localStorage.setItem("hzst_user",JSON.stringify(value));
    ctx.commit("changeInfo",value);
  }
}
//同步
const mutations = {
  changeToken(state,value){
    state.hzst_token = value;
  },
  changeInfo(state,value){
    state.user_info = value;
  }
}

const store = new Vuex.Store({
  state,mutations,actions
});
export default store;
