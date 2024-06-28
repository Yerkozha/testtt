import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import { middlewarePipeline , auth, guest} from "./middlewarePipeline";
import LocalStorageService from "@/shared/composables/LocalStorageService";
import SignUp from "@/pages/auth/SignUp.vue";
import Login from "@/pages/auth/Login.vue";
import { rootProvider, useAuth } from "@/app/providers/store";
import AuthLayout from "@/app/layouts/AuthLayout.vue";
import MainLayout from "@/app/layouts/MainLayout.vue";
import Feed from "@/pages/feed/Feed.vue";

const routes: Array<RouteRecordRaw> = [

    { 
        name: 'auth', path: '/auth', 
        component: AuthLayout, 
        meta: { middleware: [ guest ] },
        redirect: '/auth/signup',
        children: [
            { name: 'signup', path: 'signup', component: SignUp, 
                meta: { middleware: [ guest ] } 
            },
            { name: 'login', path: 'login', component: Login, 
                meta: { middleware: [ guest ] } 
            }
        ]
    },

    { 
        name: 'main', path: '/', component: MainLayout, 
        meta: { middleware: [ auth ], layout: 'MainLayout' },
        redirect: '/feed',
        children: [

            
            { 
                name: 'feed', path: 'feed',  component: Feed,   
                meta: { 
                    middleware: [ auth ], title: 'Feed', layout: 'MainLayout' 
                }
            },

            
        ]
    },
    
    // { 
    //     name: 'chart', path: '/chart-flow', component: ChartFlow, 
    //     meta: { middleware: [ auth ], layout: 'AppDefaultLayout' } 
    // },

    // { 
    //     name: 'tree', path: '/:treeId(\\d+)',     component: TreeGraph,       meta: { middleware: [ auth ], layout: 'MainLayout' }
    // },       // sensitive: true

    // { 
    //     name: 'profile', path: '/profile',        component: ProfilePage,     meta: { middleware: [ auth ], layout: 'MainLayout' }
    // },
    
]
  
  
const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const store = useAuth()
    console.log(store, 'sotreee')
    if(!to.meta.middleware) {
        return next()
    }
    
    const middleware: any = to.meta.middleware ;
    
    // if(!store.state.initialized){
    //     store.dispatch(ActionTypes.INITIALIZE_APP)
    // }
    const token = LocalStorageService.getToken();

    const context = {
        to,
        from,
        next,
        store,
        token
    }
    return middleware[0]({
        ...context,
        next: middlewarePipeline( context, middleware, 1 )
    })
})

export default router