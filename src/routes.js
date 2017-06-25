//webpack按需加载组件 webpack必须2.0以上

const NotFound = r => require.ensure([], () => r(require('./views/404')), ' NotFound')
const Form = r => require.ensure([], () => r(require('./views/nav1/Form')), ' Form')
const Cardindex = r => require.ensure([], () => r(require('./views/rencard/CardIndex')), 'Cardindex')
const Login = r => require.ensure([], () => r(require('./views/Login')), 'Login')
const investment = r => require.ensure([], () => r(require('./views/reninvestment/Investment')), ' investment')
let routes = [
    //登录页
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //
    {
        path: '/form/:status',
        name: 'form',
        component: Form
    },
    //人品卡首页
    {
        path: '/Cardindex',
        component: Cardindex,
        name: 'Cardindex',
    },
    //人品投资首页
    {
        name:'investment',
        component: investment,
        path: '/investment',
    },
   
    {
        path: '*',
        hidden: true,
        redirect: {
            path: '/404'
        }
    }
];

export default routes;