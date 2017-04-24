
let routes = [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/home',
            component: resolve => require(['../views/pages/Home.vue'], resolve),
            children:[
                {
                    path: '/archivesList',
                    component: resolve => require(['../views/pages/archives/ArchivesList.vue'], resolve)
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../views/pages/Login.vue'], resolve)
        },
        {
            path: '/404',
            component: resolve => require(['../views/pages/404.vue'], resolve)
        }
    ];

export default routes;