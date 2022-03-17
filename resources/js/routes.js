//DEPENDENCIES
import Vue from 'vue';
import VueRouter from 'vue-router';

//COMPONENTS FOR ROUTES
import Home from './pages/Home';
import Subscribe from './pages/Subscribe';
import Listeners from './pages/Listeners';
import Blog from './pages/Blog';
import Community from './pages/Community';
import AboutUs from './pages/AboutUs';

//ACTIVATION ROUTER
Vue.use(VueRouter);

//FRONT END ROUTE DEFINITION
const router = new VueRouter({
    mode:'history',
    routes:[
    {
        path:'/',
        name:'home',
        component:Home,
    },
    {
        path:'/subscribe',
        name:'subscribe',
        component:Subscribe,
    },
    {
        path:'/listeners',
        name:'listeners',
        component:Listeners,
    },
    {
        path:'/blog',
        name:'blog',
        component:Blog,
    },
    {
        path:'/community',
        name:'community',
        component:Community,
    },
    {
        path:'/about-us',
        name:'about-us',
        component:AboutUs,
    }
]
});

//EXPORT ROUTES
export default router;
