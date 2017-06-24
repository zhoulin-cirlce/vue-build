//webpack按需加载组件 webpack必须2.0以上

const NotFound = r => require.ensure([], () => r(require('./views/404')), ' recommend')
const Form = r => require.ensure([], () => r(require('./views/nav1/Form')), ' recommend')
const Home = r => require.ensure([], () => r(require('./views/Home')), ' recommend')
const Login = r => require.ensure([], () => r(require('./views/Login')), ' recommend')
let routes = [{
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
    {
        path: '/form/:status',
        name: 'form',
        component: Form
    },
    {
        path: '/Home',
        component: Home,
        name: 'Home',
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