import Vue from 'vue';
import VueRouter from 'vue-router';
import { HomeComponent, AboutComponent, ListComponent } from '../components';
Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        { path: '/', component: HomeComponent },
        { path: '/about', component: AboutComponent },
        { path: '/list', component: ListComponent },
    ]
});

export default router;