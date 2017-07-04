import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
//import ElementUI from 'element-ui'
import 'src/common/js/rem.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import routes from './routes'
import Mock from './mock'
Mock.bootstrap();
import VueLazyload from 'vue-lazyload'

//axios 拦截器 (要想统一处理所有http请求和响应，就得用上 axios 的拦截器。)
import axios from 'axios';
axios.interceptors.request.use(function(config){
    store.dispatch('showloading')
    //console.log('config------')
    //console.log(config)
    return config
},function(err){
    return Promise.reject(err)
})
axios.interceptors.response.use(function(response){
    store.dispatch('hideloading')
    //console.log("response"+response)
    return response
},function(err){
    return Promise.reject(err)
})

//定义懒加载插件
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'static/logo@2x.png',
  loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif',
  attempt: 1,
  listenEvents: [ 'scroll', 'mousewheel' ]
});
//import NProgress from 'NProgress'
//import 'nprogress/nprogress.css'
//Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(MintUI)

//NProgress.configure({ showSpinner: false });

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  //NProgress.start();
  //next()
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
});
// router.afterEach(transition =>{
//   NProgress.done();
// })

new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  //components: { App }
  render: h => h(App)
}).$mount('#app')

