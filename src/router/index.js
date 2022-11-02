
import VueRouter from 'vue-router';

const routes = [
    {
        path:'/',
        name:'login',
        component:()=>import('../components/Login')
    },
    {
        path:'/register',
        name:'register',
        component:()=>import('../components/Register')
    },
    {
        path:'/index',
        name:'index',
        meta:{
            isAnth:true
        },
        component:()=>import('../components/Index'),
        children:[
            {
                path:'home',
                name:'home',
                meta:{
                    title:'首页',
                    isAnth:true
                },
                component:()=>import('../components/Home')
            },
            // {
            //     path:'admin',
            //     name:'admin',
            //     meta:{
            //         title:'管理员管理',
            //         isAnth:true
            //     },
            //     component:()=>import('../components/admin/AdminManage.vue')
            // },
            {
                path:'user',
                name:'user',
                meta:{
                    title:'用户管理',
                    isAnth:true
                },
                component:()=>import('../components/user/UserManage.vue')
            },
            {
                path:'express',
                name:'express',
                meta:{
                    title:'快递管理',
                    isAnth:true
                },
                component:()=>import('../components/express/ExpressManage.vue')
            },
            {
                path:'outlet',
                name:'outlet',
                meta:{
                    title:'商品类型管理',
                    isAnth:true
                },
                component:()=>import('../components/outlet/OutletManage.vue')
            },
            {
                path:'postman',
                name:'postman',
                meta:{
                    title:'快递员管理',
                    isAnth:true
                },
                component:()=>import('../components/postman/PostmanManage.vue')
            }
        ]
    }
]

 const router = new VueRouter({
    routes
})

router.beforeEach((to,from,next)=>{
    //console.log(to,from,next)
    if(to.meta.isAnth){
        if(sessionStorage.key(0) && JSON.parse(sessionStorage.getItem('info')).userName==='admin'){
            next()
        }else{
            alert('没有权限访问')
        }
    }else{
        next()
    }
})

export default router