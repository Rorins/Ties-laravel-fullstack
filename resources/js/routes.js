//DEPENDENCIES
import Vue from 'vue';
import VueRouter from 'vue-router';

//COMPONENTS FOR ROUTES
import Home from './pages/Home';
import Subscribe from './pages/Subscribe';
import Listeners from './pages/Listeners';

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
    }
]
});

//EXPORT ROUTES
export default router;
