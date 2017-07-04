import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
    count: 10,
    num:1,
    showLoading:false,
    userInfo:[]
}

// 定义所需的 mutations
const mutations = {
    INCREMENT(state) {
        state.count++
    },
    DECREMENT(state) {
        state.count--
    },
    SHOWLOADING(state){
        state.showLoading = true;
    },
    HIDELOADING(state){
        state.showLoading = false;
    },
    //用户信息
    USERINFO (state, payload) {
        console.log(payload)
      state.userInfo = payload
  },
}

// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})