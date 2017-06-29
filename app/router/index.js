import Vue from "vue";
import VueRouter from "vue-router";


// 舆情资讯
const home = r => require.ensure([], () => r(require('../components/home.vue')), 'home');


Vue.use(VueRouter)

export default new VueRouter({
    linkActiveClass: '',
    routes: [
        { path: '/', redirect: '/home' }, // 默认路由
        { path: '/home', component: home },

        {
            path: '*',
            redirect: '/home'
        }
        /*  {
         path: '*', component: {
         template: '<div>抱歉，没有您要的页面。</div>'
         }
         }*/
    ]
})