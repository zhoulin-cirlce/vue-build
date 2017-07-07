import NotFound from './views/404'
import Form from './views/nav1/Form'
import Cardindex from './views/rencard/CardIndex'
import Login from './views/Login'
import investment from './views/reninvestment/Investment'
import profile from './views/profile/profile'
import Carddeatils from './views/deatilescard/deatilcard'
import aboutMe from './views/profile/children/aboutMe'
import infodisclosure from './views/profile/children/infodisclosure'
//充值
import rechar from './views/Recharge/rechargev'
//提现
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
        name: 'investment',
        component: investment,
        path: '/investment',

    },
    {
        name: 'rechar',
        component: rechar,
        path: '/rechar/:handeltype'
    },
    {
        path: '/deatilescard/deatilcard/:cardtype',
        name: 'Carddeatils',
        component: Carddeatils
    },

    {
        path: '/profile',
        component: profile,
        children: [
            {
                path: 'aboutMe',
                component: aboutMe,
            },
            {
                path:"infodisclosure",
                component:infodisclosure
            }
        ]
    },
    {
        path: '*',
        redirect: {
            path: '/404'
        }
    }
];

export default routes;