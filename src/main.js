import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'src/common/js/rem.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import routes from './routes'
import Mock from './mock'
// import components from './components'
Mock.bootstrap();
import 'font-awesome/css/font-awesome.min.css'
// import Hello from 'components/Hello'

// Vue.component('Hello',Hello)
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(MintUI)

//NProgress.configure({ showSpinner: false });

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})



new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  //components: { App }
  render: h => h(App)
}).$mount('#app')

