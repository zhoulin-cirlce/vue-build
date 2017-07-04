import { requestLogin } from '../api/api'
export const increment = ({commit}) => {
    commit('INCREMENT')
}
export const decrement = ({commit}) => {
    commit('DECREMENT')
}
export const showloading = ({commit}) => {
    commit('SHOWLOADING')
}
export const hideloading = ({commit}) => {
    commit('HIDELOADING')
}
export const  getuse = ({ commit }, payload) => {
    console.log(payload)
    commit('USERINFO', payload)
    
  }