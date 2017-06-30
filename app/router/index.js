import Vue from "vue";
import VueRouter from "vue-router";


// 舆情资讯
const intro = r => require.ensure([], () => r(require('../components/intro.vue')), 'intro');
const test = r => require.ensure([], () => r(require('../components/test.vue')), 'test');

Vue.use(VueRouter)

export default new VueRouter({
    linkActiveClass: '',
    routes: [
        { path: '/', redirect: '/intro' }, // 默认路由
        { path: '/intro', component: intro },
        { path: '/test', component: test },

        {
            path: '*',
            redirect: '/intro'
        }
        /*  {
         path: '*', component: {
         template: '<div>抱歉，没有您要的页面。</div>'
         }
         }*/
    ]
})